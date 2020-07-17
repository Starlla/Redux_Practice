import C from './constants'
import appReducer from './store/reducers'
import initialState from './initialState.json'

let state = initialState

console.log(`
initial state
======================
 goal: ${state.goal}
resort: ${JSON.stringify(state.allSkiDays)}
fetching: ${state.resortNames.fetching}
fetching: ${state.resortNames.suggestions}

`)


state = appReducer(state, {
    type: C.SET_GOAL,
    payload: 2
});

state = appReducer(state, {
    type: C.ADD_DAY,
    payload: {
        "resort": "Mt Shasta",
        "date": "2016-20-7",
        "powder": false,
        "backcountry": false
    }
});

state = appReducer(state, {
    type: C.CHANGE_SUGGESTIONS,
    payload: ["Mt Hood"]
});

console.log(`
New state
======================
 goal: ${state.goal}
resort: ${JSON.stringify(state.allSkiDays)}
fetching: ${state.resortNames.fetching}
fetching: ${state.resortNames.suggestions}

`)


