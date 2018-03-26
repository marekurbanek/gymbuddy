import React from 'react';
import Set from '../Set/Set';
import classes from './Exercise.css';
import Input from '../../Input/Input';
import Wrap from '../../hoc/Wrap';

const Exercise = (props) => {

    let allSets = null;
    let newSet = null;
    let inputTitle = null;

    if(props.sets){
        const sets = props.sets;
        allSets = sets.map(set => {
            return(
                <Set key={set.id} id={set.id} weight={set.weight} repetitions={set.repetitions} comment={set.comment}/>
            );
        });
    };
    if( props.showingNewSet.shouldShow && 
        props.workoutId === props.showingNewSet.workoutId &&
        props.exerciseId === props.showingNewSet.exerciseId){
            newSet = <button onClick={() => props.addNewSet(props.workoutId, props.exerciseId)}>Add new Set</button>
        };
    if(props.name == null){
        inputTitle = (
            <Wrap>
                <div className={classes.TitleInput}>
                    <Input type='input' value={props.exerciseTitle} changed={props.exerciseTitleChanged}></Input>
                </div>
                <div className={classes.TitleButton}>
                    <button onClick={() => props.saveExerciseTitle(props.workoutId, props.exerciseId)}>+</button>
                </div>
            </Wrap>
        );
    }else{
        inputTitle = props.name;
    };

    return(
        <div className={classes.Exercise + ' ' + classes.shadow5} 
            onMouseEnter={(event) => props.onMouseEnter(event, props.exerciseId)}
            onMouseLeave={() => props.onMouseLeave()}>
            <h4 className="text-center">{inputTitle}</h4>
            <div className={classes.ExerciseHeader}>
                <div>No.</div>
                <div>Weight</div>
                <div>Repetitions</div>
                <div>Comments</div>
            </div>
            {allSets}
            {newSet}
        </div>
    );
}

export default Exercise;