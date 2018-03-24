import React from 'react';
import Wrap from '../../hoc/Wrap';
import classes from './Workout.css';
import Exercise from '../Exercise/Exercise';

const Workout = (props) => {
    const exercises = props.exercises;
    const allExercises = exercises.map((exercise, index) =>{
        return (
            <Exercise key={index} name={exercise.name} sets={exercise.sets} />
        );
    });


    return(
        <Wrap>
            <h3 className="text-center">{props.name}, {props.date}</h3>
            <div className={classes.Sets}>
                {allExercises}
                <button onClick={props.addExercise}>Add new exercise</button>       
            </div>
            <hr/>
        </Wrap>
    );
    
};

export default Workout;