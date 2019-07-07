import React from 'react';
import events from "../events.json";
import { Event } from './football/Event';

export function League(props) {
    const { name, eventIds } = props;

    return (
        <>
            <p>{name}</p>
            <div className="row justify-content-around">
                {eventIds.map(eventId => (
                    <Event key={eventId} event={events[eventId]} />
                ))}
            </div>
        </>
    )
}