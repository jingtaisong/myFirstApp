import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import combineReducers from './lib/Reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(combineReducers, composeEnhancers(
        applyMiddleware(thunk)
    ));
    return store;
}