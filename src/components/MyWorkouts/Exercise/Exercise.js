import React from 'react';
import Set from '../Set/Set';
import classes from './Exercise.css';
import Input from '../../Input/Input';

const Exercise = (props) => {

    let allSets = null;
    let newSet = null;
    let inputTitle = null;

    if (props.sets) {
        const sets = props.sets;
        allSets = sets.map(set => {
            return (
                <Set
                    key={set.id}
                    id={set.id}
                    weight={set.weight}
                    repetitions={set.repetitions}
                    comment={set.comment} 
                    weightChanged={props.weightChanged}
                    repetitionsChanged={props.repetitionsChanged}
                    commentChanged={props.commentChanged}
                    />
            );
        });
    };
    if (props.showingNewSet.shouldShow &&
        props.workoutId === props.showingNewSet.workoutId &&
        props.exerciseId === props.showingNewSet.exerciseId) {
        newSet = <button className="btn btn-success" onClick={() => props.addNewSet(props.workoutId, props.exerciseId)}>Add new Set</button>
    };
    if (props.name == null) {
        inputTitle = (
            <div className="row">
                <div className="col-md-10">
                    <Input
                        type='input'
                        value={props.exerciseTitle}
                        changed={props.exerciseTitleChanged}
                        placeholder="Exercise name">
                    </Input>
                </div>
                <div className="col-md-2">
                    <button
                        className={"btn btn-success " + classes.AddTitleBtn}
                        onClick={() => props.saveExerciseTitle(props.workoutId, props.exerciseId)}>+
                    </button>
                </div>
            </div>
        );
    } else {
        inputTitle = (
            <div>
                <strong>{props.name}</strong>
                <button className="btn btn-success" onClick={() => props.saveExerciseChanges(props.workoutId, props.exerciseId)}>Save</button>
            </div>
        )
    };

    return (
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