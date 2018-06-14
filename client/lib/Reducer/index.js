import { combineReducers } from 'redux';
import Immutable from 'immutable';

const testReducer = (state = Immutable.Map({'clickedTimes': 0}), action) => {
    switch(action.type) {
        case 'clicked':
            return state.set('clickedTimes', state.get('clickedTimes') + 1)
        default:
            return state
    }
}

const reducers = combineReducers({
    test: testReducer,
})

export default reducers;