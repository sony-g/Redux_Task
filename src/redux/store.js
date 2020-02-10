import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
const __DEV__ = true;

let middleware = [thunk];

if (__DEV__) {
     const logger = createLogger({ collapsed: false });
     const reduxImmutableStateInvariant = require('redux-immutable-state-invariant').default();
     middleware = [...middleware, reduxImmutableStateInvariant, logger];
 } else {
    middleware = [...middleware];
}

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleware)
    )
}