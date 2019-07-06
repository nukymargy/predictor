import React from "react";


export function StatusLive(props) {
    return (
        <div className="col-md-3 img-thumbnail">
            <div className="text-center text-danger">LIVE!</div>
            <div className="row justify-content-sm-around align-items-center  mt-3">
                <div className="col-sm-3 mx-2 ">{props.teams[0].name}</div>
                <div className="col-sm-2  text-center">{props.teams[0].score}</div>
                <span>-</span>
                <div className="col-sm-2 text-center">{props.teams[1].score}</div>
                <div className="col-sm-3 mx-2">{props.teams[1].name}</div>
            </div>
            <div className="border mt-3 w-50 mx-auto">
                <div className="row justify-content-sm-around mx-3 align-items-center">
                    <div className="col-sm-1  text-center">{props.prediction[0]}</div>
                    <span>-</span>
                    <div className="col-sm-1 text-center">{props.prediction[1]}</div>
                </div>
                <div className="text-center mt-3">{props.points} points</div>
            </div>
        </div>
    )
}
