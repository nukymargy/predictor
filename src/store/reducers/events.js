import ActionTypes from '../ActionTypes';

function event(state = {}, action) {
    switch(action.type) {
        case ActionTypes.REQUEST_EVENT: 
            return {
                ...state,
                isFetching: true
            };
        case ActionTypes.RECEIVE_EVENT:
            return {
                ...state,
                ...action.value,
                isFetching: false,
            }
        default:
            return state;
    }
}

function events(state = {}, action) {
    switch(action.type) {
        case ActionTypes.REQUEST_EVENT:
        case ActionTypes.RECEIVE_EVENT:
            return {
                ...state,
                [action.value.id]: event(state[action.value.id], action)
            };
        // case ActionTypes.RECEIVE_EVENTS:
        //     return action.value.reduce((state, actionEvent) => ({
        //         ...state, 
        //         [actionEvent.id]: event(state[actionEvent.id], actionEvent)
        //     }), state);
        default:
            return state;
    }
}

export default events;