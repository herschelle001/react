import React from "react";
import $ from "jquery";
import TopCard from "./TopCard";
import BottomCard from "./BottomCard";
import topData from "./topData"
import bottomData from "./bottomData"

function Main() {

    const [darkMode, setDarkMode] = React.useState(false);

    React.useEffect(() => {
        const pTags = $('p');
        const hTags = $('h1');
        const body = $('body');
        const cards = $('.card');
        const header = $('#header');
        if(darkMode) {
            body.addClass('background-dark');
            header.addClass('header-dark');
            cards.addClass('card-dark');
            pTags.addClass('text-blue');
            hTags.addClass('text-white');

        }
        else {
            body.removeClass('background-dark');
            header.removeClass('header-dark');
            cards.removeClass('card-dark');
            pTags.removeClass('text-blue');
            hTags.removeClass('text-white');
        }
    }, [darkMode]);

    function handleClick() {
        setDarkMode(!darkMode);
    }


    return (
        <div className="main">

            <div className="main-head">
                <h1>Social Media Dashboard</h1>
                <p>Total Followers: 23,004</p>
                <div className="button">
                    <p className="inline-block button-text">Dark Mode</p>
                    <label className="switch inline-block">
                        <input id="button" onClick={handleClick} type="checkbox"/>
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

export default Main;