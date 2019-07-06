import axios from 'axios';
import ActionTypes from '../ActionTypes';

export function requestUpcomingEvents() {
    return {
        type: ActionTypes.REQUEST_UPCOMING_EVENTS
    }
}

export function receiveUpcomingEvents(upcomingEvents) {
    return {
        type: ActionTypes.RECEIVE_UPCOMING_EVENTS,
        value: upcomingEvents
    }
}

export function receiveLeague(league) {
    return {
        type: ActionTypes.RECEIVE_LEAGUE,
        value: league
    }
}

export function receiveLeagues(leagues) {
    return {
        type: ActionTypes.RECEIVE_LEAGUES,
        value: leagues
    }
}

export function receiveEvent(event) {
    return {
        type: ActionTypes.RECEIVE_EVENT,
        value: event
    }
}

export function receiveEvents(events) {
    return {
        type: ActionTypes.RECEIVE_LEAGUES,
        value: events
    }
}

export function fetchUpcomingEvents() {
    return async function (dispatch, getState) {
        console.log('asd')

        dispatch(requestUpcomingEvents());

        const response = await axios.get('mock/upcoming-events.json');

        // const upcomingEventsData = response.json();

        const { leagues, events, upcomingEvents } = extractEvents(response.data);
        console.log(events);

        leagues.forEach(league => dispatch(receiveLeague(league)));
        events.forEach(event => dispatch(receiveEvent(event)));
        dispatch(receiveUpcomingEvents(upcomingEvents));
    }
}

function extractEvents(upcomingEventsResponse) {
    let allLeagues = [];
    let allEvents = [];

    const upcomingEvents = upcomingEventsResponse.map(eventResponse => {
        const { events, ...league } = eventResponse;
        allLeagues = [...allLeagues, league];
        allEvents = [...allEvents, ...events];

        return {
            leagueId: league.id,
            eventIds: events.map(event => event.id)
        };
    });

    return {
        leagues: allLeagues,
        events: allEvents,
        upcomingEvents
    };
}