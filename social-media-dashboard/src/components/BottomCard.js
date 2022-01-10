import React from "react";

function BottomCard(props) {

    const color = props.increment < 0 ? 1 : 0;
    var inc =  props.increment;
    if(color === 1) inc = -props.increment;
    const up = "https://raw.githubusercontent.com/herschelle001/react/main/images/icon-up.svg"
    const down = "https://raw.githubusercontent.com/herschelle001/react/main/images/icon-down.svg"

    return (
        <div className="bottom-card card inline-block">

            <div className="bottom-card-top">
                <p className="inline-block">{props.text}</p>
                <img className="inline-block bottom-card-right" src={props.icon}/>

            </div>

            <div className="bottom-card-bottom">
                <h1 className="inline-block bottom-card-views">{props.value}</h1>

                <div className="inline-block bottom-card-right increase">
                    <img className="icon-bottom" src={color === 1 ? down : up}/>
                    <p className={`font-size10 inline-block ${color === 1 ? "text-red" : "text-green"}`}>{inc}%</p>
                </div>

            </div>
        </div>
    )
}

export default BottomCard;