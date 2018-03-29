import * as actionTypes from '../actions/actions';

const initialState = {
    workouts: [
        {
            id: 1,
            name: 'Pierwszy trening',
            date: '23.03.2018',
            exercises: [
                {
                    id: 1,
                    name: 'Wyciskanie sztangi lezac',
                    sets: [
                        {
                            id: 1,
                            weight: 25,
                            repetitions: 10,
                            comment: 'x'
                        },
                        {
                            id: 2,
                            weight: 25,
                            repetitions: 10,
                            comment: 's'
                        },
                        {
                            id: 3,
                            weight: 25,
                            repetitions: 10,
                            comment: 'x'
                        },
                    ]
                },
                {
                    id: 2,
                    name: 'Triceps',
                    sets: [
                        {
                            id: 1,
                            weight: 25,
                            repetitions: 10,
                            comment: ''
                        },
                        {
                            id: 2,
                            weight: 25,
                            repetitions: 10,
                            comment: ''
                        },
                        {
                            id: 3,
                            weight: 25,
                            repetitions: 10,
                            comment: ''
                        },
                    ]
                },
            ]
        },
        {
            id: 2,
            name: 'Drugi trening',
            date: '25.03.2018',
            exercises: [
                {
                    id: 1,
                    name: 'Wyciskanie sztangi lezac',
                    sets: [
                        {
                            id: 1,
                            weight: 25,
                            repetitions: 10,
                            comment: ''
                        },
                        {
                            id: 2,
                            weight: 25,
                            repetitions: 10,
                            comment: ''
                        },
                        {
                            id: 3,
                            weight: 25,
                            repetitions: 10,
                            comment: ''
                        },
                    ]
                },
                {
                    id: 2,
                    name: 'Plecy wyciag',
                    sets: [
                        {
                            id: 1,
                            weight: 25,
                            repetitions: 10,
                            comment: ''
                        },
                        {
                            id: 2,
                            weight: 25,
                            repetitions: 10,
                            comment: ''
                        },
                        {
                            id: 3,
                            weight: 25,
                            repetitions: 10,
                            comment: ''
                        },
                    ]
                },
            ]
        }
    ],
    workoutName: '',
    workoutDate: '',
    exerciseTitle: '',
    newSet: {
        isVisible: false,
        workoutId: null,
        exerciseId: null,
        weight: '',
        repetitions: '',
        comments: '',
    }
};

const reducer = (state = initialState, action) => {
    let workoutIndex = null;
    let exerciseIndex = null;
    let setIndex = null;
    const findWorkoutIndexById = (workoutId) => {
        state.workouts.map((workout, index) => {
            if (workout.id === workoutId) {
                workoutIndex = index;
            }
            return null;
        })
    }
    const findExerciseIndexById = (exerciseId) => {
        state.workouts[workoutIndex].exercises.map((exercise, index) => {
            if (exercise.id === exerciseId) {
                exerciseIndex = index;
            }
            return null;
        })
    }
    const findSetIndexById = (setId) => {
        state.workouts[workoutIndex].exercises[exerciseIndex].sets.map((set, index) => {
            if (set.id === setId) {
                setIndex = index;
            }
            return null;
        })
    }
    switch (action.type) {
        case actionTypes.ADD_WORKOUT:
            let workoutId = null
            if (state.workouts.length === 0) {
                workoutId = 1
            } else {
                workoutId = state.workouts[state.workouts.length - 1].id + 1;
            }
            return {
                ...state,
                workouts: [
                    ...state.workouts,
                    {
                        id: workoutId,
                        name: action.name,
                        date: action.date,
                        exercises: [

                        ],
                    }
                ]
            }
        case actionTypes.WORKOUT_NAME_CHANGED:
            return {
                ...state,
                workoutName: action.value
            }
        case actionTypes.WORKOUT_DATE_CHANGED:
            return {
                ...state,
                workoutDate: action.value
            }
        case actionTypes.ADD_EXERCISE:
            findWorkoutIndexById(action.workoutId)
            const exercisesLength = state.workouts[workoutIndex].exercises.length - 1;
            let exerciseId = 1
            if (exercisesLength !== -1) {
                exerciseId = state.workouts[workoutIndex].exercises[exercisesLength].id + 1;
            }
            const newExercises = [
                ...state.workouts[workoutIndex].exercises,
                {
                    id: exerciseId,
                    name: null,
                    sets: [

                    ]
                }
            ];
            const newWorkouts = [
                ...state.workouts,
            ];
            newWorkouts[workoutIndex].exercises = newExercises;
            return {
                ...state,
                workouts: newWorkouts
            }
        case actionTypes.CLEAR_WORKOUT_INPUT:
            return {
                ...state,
                workoutName: '',
                workoutDate: ''
            }
        case actionTypes.ADD_SET:
            findWorkoutIndexById(state.newSet.workoutId)
            const exerciseIdTable = state.newSet.exerciseId - 1;

            const setWorkouts = [
                ...state.workouts,
            ];

            const setLength = setWorkouts[workoutIndex].exercises[exerciseIdTable].sets.length;
            setWorkouts[workoutIndex].exercises[exerciseIdTable].sets = [
                ...setWorkouts[workoutIndex].exercises[exerciseIdTable].sets,
                {
                    id: setLength + 1,
                    weight: state.newSet.weight,
                    repetitions: state.newSet.repetitions,
                    comment: state.newSet.comments
                }
            ]
            return {
                ...state,
                setWorkouts,
                newSet: {
                    isVisible: false,
                    workoutId: null,
                    exerciseId: null,
                    weight: '',
                    repetitions: '',
                    comments: '',
                }
            }
        case actionTypes.SAVE_EXERCISE_TITLE:
            findWorkoutIndexById(action.workoutId)
            findExerciseIndexById(action.exerciseId)
            let newTitle = {
                ...state
            }
            newTitle.workouts[workoutIndex].exercises[exerciseIndex].name = state.exerciseTitle
            return {
                ...newTitle,
                exerciseTitle: ''
            }
        case actionTypes.TITLE_CHANGED:
            return {
                ...state,
                exerciseTitle: action.newTitle
            }
        case actionTypes.SAVE_EXERCISE_CHANGES:
            return {
                ...state,
            }
        case actionTypes.WEIGHT_CHANGED:
            return {
                ...state,
                newSet: {
                    ...state.newSet,
                    weight: action.newWeight,
                }
            }
        case actionTypes.REPETITIONS_CHANGED:
            return {
                ...state,
                newSet: {
                    ...state.newSet,
                    repetitions: action.newRepetitions,
                }
            }
        case actionTypes.COMMENT_CHANGED:
            return {
                ...state,
                newSet: {
                    ...state.newSet,
                    comments: action.newComment,
                }
            }
        case actionTypes.SHOW_SET_FORM:
            return {
                ...state,
                newSet: {
                    ...state.newSet,
                    isVisible: true,
                    workoutId: action.workoutId,
                    exerciseId: action.exerciseId,
                }
            }
        case actionTypes.REMOVE_EXERCISE:
            findWorkoutIndexById(action.workoutId);
            findExerciseIndexById(action.exerciseId)
            const chujek = [
                ...state.workouts
            ]
            const removedExercises = [
                ...state.workouts[workoutIndex].exercises
            ];
            removedExercises.splice(exerciseIndex, 1);
            chujek[workoutIndex].exercises = removedExercises;
            return {
                ...state,
                workouts: chujek
            }
        case actionTypes.REMOVE_WORKOUT:
            const removedWorkouts = [
                ...state.workouts
            ];
            const toDelete = new Set([action.workoutId]);
            const newArray = removedWorkouts.filter(obj => !toDelete.has(obj.id));
            return {
                ...state,
                workouts: newArray
            }
        case actionTypes.REMOVE_SET:
            findWorkoutIndexById(action.workoutId);
            findExerciseIndexById(action.exerciseId);
            findSetIndexById(action.setId);
            const removedSet = {
                ...state
            }
            removedSet.workouts[workoutIndex].exercises[exerciseIndex].sets.splice(setIndex, 1)
            return removedSet
        default:
            return state;
    }
};



export default reducer;