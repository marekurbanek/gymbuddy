import React, { Component } from 'react';
import Set from '../Set/Set';
import classes from './Exercise.css';
import { connect } from 'react-redux';
import NewSetForm from '../NewSetForm/NewSetForm';
import * as actionTypes from '../../../actions/actions';
import ExerciseTitleInput from '../ExerciseTitleInput/ExerciseTitleInput';

class Exercise extends Component {
    state = {
        removeSetBtn: {
            isVisible: false,
            setId: null,
        }
    }
    onSetEnter = (setId) => {
        this.setState({
            removeSetBtn: {
                isVisible: true,
                setId: setId,
            }
        })
    }
    removeSet = (workoutId, exerciseId, setId) => {

    }

    onSetLeave = () => {
        this.setState({
            removeSetBtn: {
                isVisible: false,
                setId: null,
            }
        })
    }

    render() {
        let newSetForm = null;
        let allSets = null;
        let newSetBtn = null;
        let inputTitle = null;
        let saveButton = null;

        if (this.props.newSet.isVisible &&
            this.props.newSet.workoutId === this.props.workoutId &&
            this.props.newSet.exerciseId === this.props.exerciseId) {
            saveButton = <button className="btn btn-success" onClick={this.props.addSet}>Save</button>
        }

        if (this.props.newSet.isVisible &&
            this.props.newSet.workoutId === this.props.workoutId &&
            this.props.newSet.exerciseId === this.props.exerciseId) {
            newSetForm = <NewSetForm
                weight={this.props.newSet.weight}
                repetitions={this.props.newSet.repetitions}
                comments={this.props.newSet.comments}
                weightChanged={this.props.weightChanged}
                repetitionsChanged={this.props.repetitionsChanged}
                commentsChanged={this.props.commentsChanged} />
        }

        if (this.props.sets) {
            allSets = this.props.sets.map((set, index) => {
                return (
                    <Set
                        key={set.id}
                        setIndex={index}
                        setId={set.id}
                        weight={set.weight}
                        repetitions={set.repetitions}
                        comment={set.comment}
                        workoutId={this.props.workoutId}
                        exerciseId={this.props.exerciseId}
                        onSetEnter={this.onSetEnter}
                        removeSetBtn={this.state.removeSetBtn}
                        removeSet={this.props.removeSet}
                        onSetLeave={this.onSetLeave}
                    />
                );
            });
        };
        if (this.props.showingNewSet.shouldShow &&
            this.props.workoutId === this.props.showingNewSet.workoutId &&
            this.props.exerciseId === this.props.showingNewSet.exerciseId &&
            !this.props.newSet.isVisible) {
            newSetBtn = <button
                className="btn btn-success"
                onClick={() => this.props.showNewSetForm(this.props.workoutId, this.props.exerciseId)}>Add new Set
                            </button>
        };
        if (this.props.name == null) {
            inputTitle = <ExerciseTitleInput
                exerciseTitle={this.props.exerciseTitle}
                exerciseTitleChanged={this.props.exerciseTitleChanged}
                saveExerciseTitle={this.props.saveExerciseTitle}
                workoutId={this.props.workoutId}
                exerciseId={this.props.exerciseId} />
        } else {
            inputTitle = (
                <div className="row">
                    <div className="col-md-2">
                        {saveButton}
                    </div>
                    <div className="col-md-8">
                        <strong>{this.props.name}</strong>
                    </div>
                    <div className={classes.TrashBtn + " col-md-2"}>
                        <button className="btn btn-default" onClick={() => this.props.removeExercise(this.props.workoutId, this.props.exerciseId)}>
                            <span className="glyphicon glyphicon-trash"></span>
                        </button>
                    </div>
                </div>
            )
        };
        return (
            <div className={classes.Exercise + ' ' + classes.shadow5}
                onMouseEnter={(event) => this.props.onMouseEnter(event, this.props.exerciseId)}
                onMouseLeave={() => this.props.onMouseLeave()}>
                <h4 className="text-center">{inputTitle}</h4>
                <div className={classes.ExerciseHeader}>
                    <div>No.</div>
                    <div>Weight</div>
                    <div>Repetitions</div>
                    <div>Comments</div>
                </div>
                {allSets}
                {newSetForm}
                {newSetBtn}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        newSet: state.newSet
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showNewSetForm: (workoutId, exerciseId) => dispatch({
            type: actionTypes.SHOW_SET_FORM,
            workoutId: workoutId,
            exerciseId: exerciseId
        }),
        weightChanged: (event) => dispatch({
            type: actionTypes.WEIGHT_CHANGED,
            newWeight: event.target.value,
        }),
        repetitionsChanged: (event) => dispatch({
            type: actionTypes.REPETITIONS_CHANGED,
            newRepetitions: event.target.value
        }),
        commentsChanged: (event) => dispatch({
            type: actionTypes.COMMENT_CHANGED,
            newComment: event.target.value
        }),
        addSet: () => dispatch({
            type: actionTypes.ADD_SET
        }),
        removeExercise: (workoutId, exerciseId) => dispatch({
            type: actionTypes.REMOVE_EXERCISE,
            workoutId: workoutId,
            exerciseId: exerciseId
        }),
        removeSet: (workoutId, exerciseId, setId) => dispatch({
            type: actionTypes.REMOVE_SET,
            workoutId: workoutId,
            exerciseId: exerciseId,
            setId: setId
        }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Exercise);