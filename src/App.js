import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Event } from "./components/football/Event";
import { Provider } from 'react-redux';
import store from './store';

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

function App() {
    return (
        <Provider store={store}>
            <div>
                <div className="container mt-5">
                    <div className="row justify-content-around">
                        {matchData.map(event => <Event event={event} />)}
                    </div>
                </div>
            </div>
        </Provider>
    );
}

export default App;
