import React from 'react';
import classes from './Set.css';
const Set = (props) => {
    return(
        <div className={classes.SetContainer}>
            <div >{props.setId}</div>
            <div >{props.weight}</div>
            <div >{props.repetitions}</div>
            <div >{props.comment}</div>
        </div>
    );
}

export default Set;