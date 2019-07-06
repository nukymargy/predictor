import { combineReducers } from "redux";
import events from './events';
import leagues from './leagues';
import ActionTypes from '../ActionTypes';

function myLeagues(state = [], action) {
    switch(action.type) {
        case ActionTypes.RECEIVE_MY_LEAGUES:
            return action.value;
        default:
            return state;
    }
}

function popularLegaues(state = [], action) {
    switch(action.type) {
        case ActionTypes.RECEIVE_POPULAR_LEAGUES:
            return action.value;
        default:
            return state;
    }
}

function upcomingEvents(state = [], action) {
    switch(action.type) {
        case ActionTypes.RECEIVE_UPCOMING_EVENTS:
            return action.value;
        default:
            return state;
    }
}

export default combineReducers({
    myLeagues,
    popularLegaues,
    events,
    leagues,
    upcomingEvents
});