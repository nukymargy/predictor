import React from "react";



export function StatusPrematch(props) {
    return (
                <div className="col-md-3 img-thumbnail">
                    <div className=" text-center">{props.matchDate}</div>
                    <div className="row justify-content-sm-around align-items-center  mt-3">
                        <div className="col-sm-3 mx-2 text-center ">{props.teams[0].name}</div>
                        <input className="form-control col-sm-2  text-center"/>
                        <span>-</span>
                        <input className="form-control col-sm-2 text-center"/>
                        <div className="col-sm-3 mx-2">{props.teams[1].name}</div>
                    </div>
                    <div className="text-center mt-3">{props.points} points</div>
                </div>
    )
}
