import React from 'react';
import classes from './Set.css';
import Input from '../../Input/Input';

const Set = (props) => {
    let weight = <Input value={props.weight} changed={props.weightChanged} placeholder='Weight'/>
    let repetitions = <Input value={props.repetitions} changed={props.repetitionsChanged} placeholder='Repetitions'/>
    let comment = <Input value={props.comment} changed={props.commentChanged} placeholder='Comment'/>
    if(props.weight){
        weight = props.weight;
    }
    if(props.repetitions){
        repetitions=props.repetitions;
    }
    if(props.comment){
        comment = props.comment;
    }

    
    
    return(
        <div className={classes.SetContainer}>
            <div >{props.id}</div>
            <div >{weight}</div>
            <div >{repetitions}</div>
            <div >{comment}</div>
        </div>
    );
}

export default Set;