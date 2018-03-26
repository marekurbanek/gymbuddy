import React from 'react';
import Wrap from '../../hoc/Wrap';
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
        <Wrap>
            <div className={classes.ExerciseName}>{props.name}, {props.date}</div>
            <button onClick={props.addExercise} className={classes.NewExercise}>Add new exercise</button>
            <div className={classes.Wrapper + " row"}>
                {allExercises}
            </div>
            <hr />
        </Wrap>
    );

};

export default Workout;