import React from 'react';
import classes from './Set.css';
const Set = (props) => {
    let removeSetBtn = props.setIndex +1;
    if(props.removeSetBtn.isVisible && props.removeSetBtn.setId === props.setId){
        removeSetBtn = <button 
                        className="btn btn-danger btn-sm" 
                        onClick={() => props.removeSet(props.workoutId, props.exerciseId, props.setId)}>-
                       </button>
    }
    return(
        <div className={classes.SetContainer} 
            onMouseEnter={() => props.onSetEnter(props.setId)}
            onMouseLeave={() => props.onSetLeave()}>
            <div >{removeSetBtn}</div>
            <div >{props.weight}</div>
            <div >{props.repetitions}</div>
            <div >{props.comment}</div>
        </div>
    );
}

export default Set;