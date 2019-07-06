import ActionTypes from '../ActionTypes';

function league(state = {}, action) {
    switch (action.type) {
        case ActionTypes.REQUEST_LEAGUE:
            return {
                ...state,
                isFetching: true
            };
        case ActionTypes.RECEIVE_LEAGUE:
            return {
                ...state,
                ...action.value,
                isFetching: false,
            }
        default:
            return state;
    }
}

function leagues(state = {}, action) {
    switch (action.type) {
        case ActionTypes.REQUEST_LEAGUE:
        case ActionTypes.RECEIVE_LEAGUE:
            return {
                ...state,
                [action.value.id]: league(state[action.value.id], action)
            };
        // case ActionTypes.RECEIVE_LEAGUES:
        //     return action.value.reduce((state, actionLeague) => ({
        //         ...state, 
        //         [actionLeague.id]: league(state[actionLeague.id], actionLeague)
        //     }), state);
        default:
            return state;
    }
}

export default leagues;