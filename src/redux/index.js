import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import mainReducer from './reducers/main';
import thunk from 'redux-thunk';

const composeEnhancers =
    (process.env.REACT_APP_ENV !== 'PROD' &&
        typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const rootReducer = combineReducers({
    main: mainReducer,
});
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
