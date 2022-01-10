import React from "react";

const url = "https://raw.githubusercontent.com/herschelle001/react/main/social-media-dashboard/images/";

function TopCard(props) {
    const color = props.inc < 0 ? 1 : 0;
    var inc =  props.inc;
    if(color === 1) inc = -props.inc;
    const up = url + "icon-up.svg"
    const down = url + "icon-down.svg"
    return (
        <div className="top-card card">

            <hr className={`hr ${props.hr}`}/>

            <div className="top-cards-heading">
                <img className="top-cards-icon" src={props.topIcon}/>

                <p className="inline-block">{props.username}</p>
            </div>

            <h1 className="followers">{props.followers + props.folLetter}</h1>

            <p className="font-size16">{props.folOrSub === 0 ? "F O L L O W E R S" : "S U B S C R I B E R S"}</p>

            <div className="top-cards-footer">
                <img className="icon" src={color === 1 ? down : up}/>
                <p className={`font-size12 inline-block ${color === 1 ? "text-red" : "text-green"}`}>{inc} Today</p>
            </div>

        </div>
    )
}

export default TopCard;