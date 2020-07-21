import C from './constants'
import appReducer from './store/reducers'
// import initialState from './initialState.json'
import { createStore } from 'redux'
import storeFactory from './store';
import {addDay, removeDay, setGoal, addError, clearError, changeSuggestions} from './actions'

// let state = initialState
//
// console.log(`
// initial state
// ======================
//  goal: ${state.goal}
// resort: ${JSON.stringify(state.allSkiDays)}
// fetching: ${state.resortNames.fetching}
// fetching: ${state.resortNames.suggestions}
//
// `)
//
//
// state = appReducer(state, {
//     type: C.SET_GOAL,
//     payload: 2
// });
//
// state = appReducer(state, {
//     type: C.ADD_DAY,
//     payload: {
//         "resort": "Mt Shasta",
//         "date": "2016-20-7",
//         "powder": false,
//         "backcountry": false
//     }
// });
//
// state = appReducer(state, {
//     type: C.CHANGE_SUGGESTIONS,
//     payload: ["Mt Hood"]
// });
//
// console.log(`
// New state
// ======================
//  goal: ${state.goal}
// resort: ${JSON.stringify(state.allSkiDays)}
// fetching: ${state.resortNames.fetching}
// fetching: ${state.resortNames.suggestions}
//
// `)

const initialState = (localStorage['redux-store'])? JSON.parse(localStorage['redux-store']): {};

const store = storeFactory();

const saveState = () =>{
    const state = JSON.stringify((store.getState()));
    localStorage['redux-store'] = state
};

store.subscribe(saveState);

window.store = store;

store.dispatch({
    type: C.ADD_DAY,
    payload: {
        "resort": "Mt Shasta",
        "date": "2016-20-7",
        "powder": false,
        "backcountry": false
    }
})

store.dispatch(
    addDay("Heavenly", '2016-12-22')
)

store.dispatch(
    removeDay('2016-12-22')
)

// store.dispatch({
//     type: C.SET_GOAL,
//     payload: 2
// })

store.dispatch(
    setGoal(55)
)

store.dispatch(
    addError('Error!')
)

store.dispatch(
    clearError(0)
)

store.dispatch(
    changeSuggestions(['One', 'Two', 'Three'])
)



