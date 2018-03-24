import * as actionTypes from '../actions/actions';

const initialState = {
    workouts: [
        {
            id: 1,
            name: 'Pierwszy trening',
            date: '23.03.2018',
            exercises: [
                {
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
    workoutDate: ''
};

const reducer = (state = initialState, action) => {
    switch(action.type){
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
            return{
                ...state,
                workoutName: action.value
            }
        case actionTypes.WORKOUT_DATE_CHANGED:
            return{
                ...state,
                workoutDate: action.value
            }
        case actionTypes.ADD_EXERCISE:
            const newExercises = [
                ...state.workouts[action.workoutId].exercises,
                {
                    name: 'obijanie sie',
                    sets: [
                        {
                            id: 5,
                            weight: 25,
                            repetitions: 999999,
                            comment: ''                                
                        },
                    ]
                }
            ];
            const newWorkouts = [
                ...state.workouts,
            ];
            newWorkouts[action.workoutId].exercises = newExercises;
            return{
                ...state,
                workouts: newWorkouts
            }
        default:
            return state;
    }
};

export default reducer;