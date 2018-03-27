import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './MyWorkouts.css';
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
        this.setState({ addingNewWorkout: !this.state.addingNewWorkout });
    }

    addNewWorkoutAndHideForm = () => {
        this.setState({ addingNewWorkout: false });
        this.props.addNewWorkout(this.props.workoutName, this.props.workoutDate);
        this.props.clearWorkoutInputs();
    }

    onWorkoutHover = (event, workoutId, exerciseId) => {
        this.setState({
            showingNewSet: {
                workoutId: workoutId,
                exerciseId: exerciseId,
                shouldShow: true,
            }
        });
    }

    onMouseLeaveExercise = () => {
        this.setState({
            showingNewSet: {
                workoutId: null,
                exerciseId: null,
                shouldShow: false
            }
        })
    }

    render() {
        const allWorkouts = this.props.workouts.map(workout => {
            return (
                <Workout
                    key={workout.id}
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
                    saveExerciseChanges={(workoutId, exerciseId) => this.props.saveExerciseChanges(workoutId, exerciseId)}
                    weightChanged={this.props.weightChanged}
                    repetitionsChanged={this.props.repetitionsChanged}
                    commentChanged={this.props.commentChanged}
                />
            );
        });

        return (
            <div className={classes.WorkoutsContainer}>
                <h2 className="text-center">My Workouts</h2>
                <div className={classes.BtnContainer}>
                    <button onClick={this.showWorkoutForm} className={"btn btn-primary"}>Add Workout</button><br />
                </div>
                <NewWorkout
                    shouldDisplay={this.state.addingNewWorkout}
                    workoutNameChanged={this.props.workoutNameChanged}
                    workoutDateChanged={this.props.workoutDateChanged}
                    workoutName={this.props.workoutName}
                    workoutDate={this.props.workoutDate}
                    addNewWorkout={this.addNewWorkoutAndHideForm}
                />
                <div className={classes.MyWorkouts}>
                    {allWorkouts}
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        workouts: state.workouts,
        workoutName: state.workoutName,
        workoutDate: state.workoutDate,
        exerciseTitle: state.exerciseTitle,
        weight: state.weight,
        repetitions: state.repetitions,
        comment: state.comment
    };
}

const mapDispatchToProps = dispatch => {
    return {
        addNewWorkout: (name, date) => dispatch({
            type: actionTypes.ADD_WORKOUT,
            name: name,
            date: date
        }),
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
            workoutId: id - 1

        }),
        clearWorkoutInputs: () => dispatch({
            type: actionTypes.CLEAR_WORKOUT_INPUT
        }),
        exerciseTitleChanged: (event) => dispatch({
            type: actionTypes.TITLE_CHANGED,
            newTitle: event.target.value
        }),
        addSet: (workoutId, exerciseId) => dispatch({
            type: actionTypes.ADD_SET,
            workoutId: workoutId,
            exerciseId: exerciseId
        }),
        saveExerciseTitle: (workoutId, exerciseId) => dispatch({
            type: actionTypes.SAVE_EXERCISE_TITLE,
            workoutId: workoutId,
            exerciseId: exerciseId
        }),
        saveExerciseChanges: (workoutId, exerciseId) => dispatch({
            type: actionTypes.SAVE_EXERCISE_CHANGES,
            workoutId: workoutId,
            exerciseId: exerciseId
        }),
        weightChanged: (event) => dispatch({
            type: actionTypes.WEIGHT_CHANGED,
            newWeight: event.target.value
        }),
        repetitionsChanged: (event) => dispatch({
            type: actionTypes.REPETITIONS_CHANGED,
            newRepetitions: event.target.value
        }),
        commentChanged: (event) => dispatch({
            type: actionTypes.COMMENT_CHANGED,
            newComment: event.target.value
        })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyWorkouts);