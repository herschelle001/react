import React from "react";
import TopCard from "./TopCard";
import BottomCard from "./BottomCard";
import topData from "./topData"
import bottomData from "./bottomData"

function Main() {
    return (
        <div className="main">

            <div className="main-head">
                <h1>Social Media Dashboard</h1>
                <p>Total Followers: 23,004</p>
                <div className="button">
                    <p className="inline-block button-text">Dark Mode</p>
                    <label className="switch inline-block">
                        <input id="button" onClick={applyDarkMode} type="checkbox"/>
                        <span className="slider round"/>
                    </label>
                </div>
            </div>

            <div className="main-div-mid">
                {
                    topData.map(info => (
                        <TopCard
                            key={info.key}
                            hr={info.hr}
                            topIcon={info.topIcon}
                            username={info.username}
                            folOrSub={info.folOrSub}
                            followers={info.followers}
                            folLetter={info.folLetter}
                            inc={info.inc}
                        />
                    ))
                }

            </div>

            <div className="main-mid-text">
                <p className="font-size18">Overview - Today</p>
            </div>

            <div>
                {
                    bottomData.map((info, index) => (
                        index < 4 ?
                            <BottomCard
                                key={info.key}
                                text={info.text}
                                icon={info.icon}
                                value={info.value}
                                increment={info.increment}
                            /> : ""
                    ))
                }
            </div>

            {/*Second Row*/}

            <div>
                {
                    bottomData.map((info, index) => (
                        index > 3 ?
                            <BottomCard
                                key={info.key}
                                text={info.text}
                                icon={info.icon}
                                value={info.value}
                                increment={info.increment}
                            /> : ""
                    ))
                }
            </div>

        </div>
    )
}

var dark = 0;

function applyDarkMode() {
    var cards = document.getElementsByClassName('card');
    var pTags = document.getElementsByTagName('p');
    var hTags = document.getElementsByTagName('h1');
    if (dark === 1) {
        document.body.classList.remove('background-dark');
        document.getElementById('header').classList.remove('header-dark');
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.remove('card-dark');
        }
        for (let i = 0; i < pTags.length; i++) {
            pTags[i].classList.remove('text-blue');
        }
        for (let i = 0; i < hTags.length; i++) {
            hTags[i].classList.remove('text-white');
        }
        dark = 0;
    } else {
        document.body.classList.add('background-dark');
        document.getElementById('header').classList.add('header-dark');
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.add('card-dark');
        }
        for (let i = 0; i < pTags.length; i++) {
            pTags[i].classList.add('text-blue');
        }
        for (let i = 0; i < hTags.length; i++) {
            hTags[i].classList.add('text-white');
        }
        dark = 1;
    }
}

export default Main;