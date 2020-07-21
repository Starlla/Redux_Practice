import C from '../constants'
import appReducer from './reducers'
import {createStore, applyMiddleware} from 'redux'


const consoleMessage = store => next => action => {
    let result
    console.groupCollapsed(`dispatching action => ${action.type}`);
    console.log('ski days', store.getState().allSkiDays.length);
    console.log('ski days', store.getState().allSkiDays);
    result = next(action);

    let {allSkiDays, goal, errors, resortNames} = store.getState();
    console.log(`
    goal: ${goal}
    resort: ${allSkiDays.length}
    fetching: ${resortNames.fetching}
    suggestions: ${resortNames.suggestions}
    error: ${errors}
    
    `)

    console.groupEnd();
    return result
}

export default (initialState = {}) => {
    return applyMiddleware(consoleMessage)(createStore)(appReducer, initialState)
}