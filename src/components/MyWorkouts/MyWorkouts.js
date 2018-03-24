import React, {Component} from 'react';
import {connect} from 'react-redux';

import Wrap from '../hoc/Wrap';
import Workout from './Workout/Workout';
import NewWorkout from './Forms/NewWorkout';
import * as actionTypes from '../../actions/actions';

class MyWorkouts extends Component {
    state = {
        addingNewWorkout: false,
    };

    showWorkoutForm = () => {
        this.setState({addingNewWorkout: !this.state.addingNewWorkout});
    }


    

    render(){
        const workoutList = this.props.workouts;
        const allWorkouts = workoutList.map(workout => {
            return(
                <Workout 
                    key={workout.name} 
                    name={workout.name} 
                    exercises={workout.exercises} 
                    date={workout.date}
                    addExercise={() => this.props.addExercise(workout.id)}/> 
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
                    addNewWorkout={() => this.props.addNewWorkout(this.props.workoutName, this.props.workoutDate)}
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
        workoutDate: state.workoutDate
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
            workoutId: id-1,
        })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyWorkouts);