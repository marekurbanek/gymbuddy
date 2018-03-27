import React from 'react';
import Input from '../../Input/Input';
import Wrap from '../../hoc/Wrap';
import classes from './NewWorkout.css';

const NewWorkout = (props) => {
    if (props.shouldDisplay) {
        return (
            <Wrap>
                <div className="row">
                    <div className="col-md-5 form-group">
                        <Input 
                            type='input' 
                            value={props.workoutName} 
                            changed={props.workoutNameChanged} 
                            label='Workout name'
                            placeholder="Workout name">
                        </Input>
                    </div>
                    <div className="col-md-5 form-group">
                        <Input 
                            type='input' 
                            value={props.workoutDate} 
                            changed={props.workoutDateChanged} 
                            label='Date'
                            placeholder="Date"></Input>
                    </div>
                    <div className="col-md-2 form-group">
                        <button className={classes.AddButton + " btn btn-success"} onClick={props.addNewWorkout}>Add</button>
                    </div>
                </div>
            </Wrap>
        );
    } else {
        return null;
    }
};

export default NewWorkout;