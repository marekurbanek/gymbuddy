import React from 'react';
import Input from '../../Input/Input';

const NewSetForm = (props) => {
    return (
        <div className="row">
            <div className="col-md-2">
            </div>
            <div className="col-md-3">
                <Input type="input" placeholder="weight" value={props.weight} changed={props.weightChanged} />
            </div>
            <div className="col-md-3">
                <Input type="input" placeholder="reps" value={props.repetitions} changed={props.repetitionsChanged}/>
            </div>
            <div className="col-md-3">
                <Input type="input" placeholder="comment" value={props.comments} changed={props.commentsChanged}/>
            </div>
        </div>
    );
}

export default NewSetForm;