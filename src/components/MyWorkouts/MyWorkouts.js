import React, {Component} from 'react';
import {connect} from 'react-redux';

import Wrap from '../hoc/Wrap';
import Workout from './Workout/Workout';
import NewWorkout from './Forms/NewWorkout';
import * as actionTypes from '../../actions/actions';

class MyWorkouts extends Component {
    state = {
        addingNewWorkout: false,
        showingNewSet: {
            workoutId: null,
            exerciseId: null,
            shouldShow: false,
        }
    }

    showWorkoutForm = () => {
        this.setState({addingNewWorkout: !this.state.addingNewWorkout});
    }

    addNewWorkoutAndHideForm = () => {
        this.setState({addingNewWorkout: false});
        this.props.addNewWorkout(this.props.workoutName, this.props.workoutDate);
        this.props.clearWorkoutInputs();
    }

    onWorkoutHover = (event, workoutId, exerciseId) =>{
        this.setState({showingNewSet: {
            workoutId: workoutId,
            exerciseId: exerciseId,
            shouldShow: true,
        }});
    }

    onMouseLeaveExercise = () => {
        this.setState({showingNewSet: {
            workoutId: null,
            exerciseId: null,
            shouldShow: false
        }})
    }

    render(){
        const workoutList = this.props.workouts;
        const allWorkouts = workoutList.map(workout => {
            return(
                <Workout 
                    key={workout.name} 
                    name={workout.name} 
                    date={workout.date}
                    exercises={workout.exercises} 
                    workoutId={workout.id}
                    addExercise={() => this.props.addExercise(workout.id)}
                    onMouseEnter={(event, exerciseId) => this.onWorkoutHover(event, workout.id, exerciseId)}
                    onMouseLeave={this.onMouseLeaveExercise}
                    showingNewSet={this.state.showingNewSet}
                    addNewSet={(workoutId, exerciseId) => this.props.addSet(workoutId, exerciseId)}
                    saveExerciseTitle={(workoutId, exerciseId) => this.props.saveExerciseTitle(workoutId, exerciseId)}
                    exerciseTitleChanged={(event) => this.props.exerciseTitleChanged(event)}
                    /> 
            );
        });

        return(
            <Wrap>
                <h2 className="text-center">My Workouts</h2>
                <button onClick={this.showWorkoutForm}>Add new Workouot!</button>
                <NewWorkout 
                    shouldDisplay={this.state.addingNewWorkout} 
                    workoutNameChanged={this.props.workoutNameChanged}
                    workoutDateChanged={this.props.workoutDateChanged}
                    workoutName={this.props.workoutName}
                    workoutDate={this.props.workoutDate}
                    addNewWorkout={this.addNewWorkoutAndHideForm}
                />
                {allWorkouts}
            </Wrap>
        );
    }
};

const mapStateToProps = state => {
    return {
        workouts: state.workouts,
        workoutName: state.workoutName,
        workoutDate: state.workoutDate,
        exerciseTitle: state.exerciseTitle
    };
}

const mapDispatchToProps = dispatch => {
    return {
        addNewWorkout: (name, date) => dispatch({
            type: actionTypes.ADD_WORKOUT, 
            name: name, 
            date: date}),
        workoutNameChanged: (event) => dispatch({
            type: actionTypes.WORKOUT_NAME_CHANGED,
            value: event.target.value
        }),
        workoutDateChanged: (event) => dispatch({
            type: actionTypes.WORKOUT_DATE_CHANGED,
            value: event.target.value
        }),
        addExercise: (id) => dispatch({
            type: actionTypes.ADD_EXERCISE,
            workoutId: id - 1,

        }),
        clearWorkoutInputs: () => dispatch({
            type: actionTypes.CLEAR_WORKOUT_INPUT
        }),
        exerciseTitleChanged: (event) => dispatch({
            type: actionTypes.TITLE_CHANGED,
            newTitle: event.target.value,
        }),
        addSet: (workoutId, exerciseId) => dispatch({
            type: actionTypes.ADD_SET,
            workoutId: workoutId,
            exerciseId: exerciseId
        }),
        saveExerciseTitle: (workoutId, exerciseId) => dispatch({
            type: actionTypes.SAVE_EXERCISE_TITLE,
            workoutId: workoutId,
            exerciseId: exerciseId,
            exerciseTitle: this.props.exerciseTitle
        }),

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyWorkouts);