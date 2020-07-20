import C from './constants'
import appReducer from './store/reducers'
// import initialState from './initialState.json'
import { createStore } from 'redux'

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

const store = createStore(appReducer, initialState );

window.store = store;

store.subscribe((() => {
    const state = JSON.stringify((store.getState()))
    localStorage['redux-store'] = state
}))

store.dispatch({
    type: C.ADD_DAY,
    payload: {
        "resort": "Mt Shasta",
        "date": "2016-20-7",
        "powder": false,
        "backcountry": false
    }
})

store.dispatch({
    type: C.SET_GOAL,
    payload: 2
})



