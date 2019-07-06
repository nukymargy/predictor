import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from './reducers';
import {fetchUpcomingEvents} from './actions'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer, 
    composeEnhancers (
        applyMiddleware(thunkMiddleware)
    )
);

store.dispatch(fetchUpcomingEvents());

export default store;