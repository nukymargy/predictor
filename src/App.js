import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Event } from "./components/football/Event";
import { Provider } from 'react-redux';
import store from './store';

import events from './events.json';
import { League } from './components/League';

const matchData = [
    {
        id: 2,
        matchDate: Date(),
        teams: [{
            id: 6,
            name: "Arsenal",
        }, {
            id: 7,
            name: "Chelsea",
        }],
        status: "prematch",
        prediction: [3, 2],
        points: 500,

    },
    {
        id: 3,
        teams: [{
            id: 8,
            name: "Barcelona",
            score: 3
        }, {
            id: 9,
            name: "Real Madrid",
            score: 1
        }],
        status: 'live',
        prediction: [1, 0],
        points: 200
    },
    {
        id: 4,
        teams: [{
            id: 10,
            name: "Manchester United",
            score: 2
        }, {
            id: 11,
            name: "Leicester City",
            score: 1
        }],
        status: 'finished',
        prediction: [2, 3],
        points: 100,
    }
];

const league1 = {
    id: 1,
    name: 'Premier League',
    eventIds: [1, 2]
};

const league2 = {
    id: 1,
    name: 'la liga',
    eventIds: [3, 4]
};

const leagues = [league1, league2];

function App() {
    return (
        <Provider store={store}>
            <div>
                <div className="container mt-5">
                    <League {...league1} />
                </div>
            </div>
        </Provider>
    );
}

export default App;
