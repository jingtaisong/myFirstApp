import { combineReducers } from 'redux';
import Immutable from 'immutable';

const testReducer = (state = Immutable.Map(), action) => {
    switch(action.type) {
        default:
            return state
    }
}

const reducers = combineReducers({
    test: testReducer,
})

export default reducers;