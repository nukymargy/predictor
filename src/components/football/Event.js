import React from "react";
import {StatusFinished} from "./StatusFinished";
import {StatusLive} from "./StatusLive";
import {StatusPrematch} from "./StatusPrematch";


export function Event(props) {
    const {status, ...eventData} = props.event;

    switch(status) {
        case "live":
            return  <StatusLive {...eventData} />;
        case "prematch":
            return <StatusPrematch {...eventData} />;
        case "finished":
            return <StatusFinished {...eventData} />;
        default: throw new Error("Unknown status")
    }
}
