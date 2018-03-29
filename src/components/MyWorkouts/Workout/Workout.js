import React from 'react';
import classes from './Workout.css';
import Exercise from '../Exercise/Exercise';

const Workout = (props) => {

    const allExercises = props.exercises.map((exercise, index) => {
        return (
            <div key={exercise.id} className="col-sm-12 col-md-4">
                <Exercise
                    name={exercise.name}
                    sets={exercise.sets}
                    exerciseId={exercise.id}
                    workoutId={props.workoutId}
                    onMouseEnter={props.onMouseEnter}
                    onMouseLeave={props.onMouseLeave}
                    showingNewSet={props.showingNewSet}
                    addNewSet={props.addNewSet}
                    saveExerciseTitle={props.saveExerciseTitle}
                    exerciseTitle={props.exerciseTitle}
                    exerciseTitleChanged={props.exerciseTitleChanged}
                />
            </div>
        );
    });

    return (
        <div className={classes.Workout}>
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className={classes.ExerciseName}><h4>{props.date}</h4>
                        <button onClick={props.addExercise} className={"btn btn-default " + classes.NewExercise}>Add new exercise</button>
                    </div>
                </div>
                <div className="col-md-1 col-md-offset-1">
                    <button className="btn btn-default" onClick={() => props.removeWorkout(props.workoutId)}>
                            <span className="glyphicon glyphicon-trash"></span>
                    </button>
                </div>
            </div>

            <div className={classes.Wrapper + " row"}>
                {allExercises}
            </div>
        </div>
    );

};

export default Workout;