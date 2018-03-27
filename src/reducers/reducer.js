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
    weight: '',
    repetitions: '',
    comments: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_WORKOUT:
            const workoutId = state.workouts.length;

            return {
                ...state,
                workouts: [
                    ...state.workouts,
                    {
                        id: workoutId + 1,
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
            const exercisesLength = state.workouts[action.workoutId].exercises.length;
            const newExercises = [
                ...state.workouts[action.workoutId].exercises,
                {
                    id: exercisesLength + 1,
                    name: null,
                    sets: [

                    ]
                }
            ];
            const newWorkouts = [
                ...state.workouts,
            ];
            newWorkouts[action.workoutId].exercises = newExercises;
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
            const workoutIdTable = action.workoutId - 1;
            const exerciseIdTable = action.exerciseId - 1;

            const workouts = [
                ...state.workouts,
            ];

            const setLength = workouts[workoutIdTable].exercises[exerciseIdTable].sets.length;
            workouts[workoutIdTable].exercises[exerciseIdTable].sets = [
                ...workouts[workoutIdTable].exercises[exerciseIdTable].sets,
                {
                    id: setLength + 1,
                    weight: '',
                    repetitions: '',
                    comment: ''
                }
            ]
            return {
                ...state,
                workouts
            }
        case actionTypes.SAVE_EXERCISE_TITLE:
            let newTitle = {
                ...state
            }
            newTitle.workouts[action.workoutId - 1].exercises[action.exerciseId - 1].name = state.exerciseTitle
            return newTitle;
        case actionTypes.TITLE_CHANGED:
            return {
                ...state,
                exerciseTitle: action.newTitle
            }
        case actionTypes.SAVE_EXERCISE_CHANGES:
            console.log('hejo')
            console.log(...state);
            return {
                ...state,
            }
        case actionTypes.WEIGHT_CHANGED:
            console.log('weight');
            console.log(action.newWeight);
            console.log(state.weight);
            return {
                ...state,
                weight: action.newWeight
            }
        case actionTypes.REPETITIONS_CHANGED:
            console.log('repetitions');
            console.log(action.newRepetitions);
            return {
                ...state,
                repetitions: action.newRepetitions,
            }
        case actionTypes.COMMENT_CHANGED:
            return {
                ...state,
                comment: action.newComment,
            }
        default:
            return state;
    }
};

export default reducer;