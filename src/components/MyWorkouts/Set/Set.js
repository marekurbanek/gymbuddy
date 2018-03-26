import React from 'react';
import classes from './Set.css';
// import Input from '../../Input/Input';

const Set = (props) => {
    // let weight = null;
    // if(props.weight == null){
    //     weight = <Input value onChange placeholder=''/>
    // }
    
    
    return(
        <div className={classes.SetContainer}>
            <div >{props.id}</div>
            <div >{props.weight}</div>
            <div >{props.repetitions}</div>
            <div >{props.comment}</div>
        </div>
    );
}

export default Set;