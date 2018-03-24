import React from 'react';
import Set from '../Set/Set';
import classes from './Exercise.css';

const Exercise = (props) => {

    let allSets = null;
    if(props.sets){
        const sets = props.sets;
        allSets = sets.map(set => {
            return(
                <Set key={set.id} id={set.id} weight={set.weight} repetitions={set.repetitions} comment={set.comment}/>
            );
        });
    }
    

    return(
        <div className={classes.Exercise}>
            <h4 className="text-center">{props.name}</h4>
            <div className={classes.ExerciseHeader}>
                <div>No.</div>
                <div>Weight</div>
                <div>Repetitions</div>
                <div>Comments</div>
            </div>
                {allSets}
        </div>
    );
}

export default Exercise;