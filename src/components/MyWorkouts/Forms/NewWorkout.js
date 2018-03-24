import React from 'react';
import Input from '../../Input/Input';
import Wrap from '../../hoc/Wrap';

const NewWorkout = (props) => {
    if(props.shouldDisplay){
        return(
            <Wrap>
                <p>Nowy workaut form</p>
                <Input type='input' value={props.workoutName} changed={props.workoutNameChanged} label='Nazwa treningu'></Input>
                <Input type='input' value={props.workoutDate} changed={props.workoutDateChanged} label='Data'></Input>
                <button onClick={props.addNewWorkout}>Add New Workout</button>
            </Wrap>
        );
    }else{
        return null;
    }
};
    
export default NewWorkout;