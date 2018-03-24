import React from 'react';
import classes from './Set.css';

const Set = (props) => (
    <div className={classes.SetContainer}>
        <div >{props.id}</div>
        <div >{props.weight}</div>
        <div >{props.repetitions}</div>
        <div >{props.comment}</div>
    </div>
);

export default Set;