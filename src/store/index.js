import C from '../constants'
import appReducer from './reducers'
import {createStore, applyMiddleware} from 'redux'


const consoleMessage = store => next => action => {
    let result
    console.log('ski days', store.getState().allSkiDays.length);
    result = next(action);

    let {allSkiDays, goal, errors, resortNames} = store.getState();
    console.log(`
    goal: ${goal}
    resort: ${allSkiDays.length}
    fetching: ${resortNames.fetching}
    suggestions: ${resortNames.suggestions}
    
    `)

    console.groupEnd()
    return result
}

export default (initialState = {}) => {
    return applyMiddleware(consoleMessage)(createStore)(appReducer, initialState)
}