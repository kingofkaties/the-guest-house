import React, { Fragment, useState } from 'react';

function NewGuest() {

    // setting up state
    const [emotionName, setEmotionName] = useState("");
    const [emotionCause, setEmotionCause] = useState("");
    const [emotionColor, setEmotionColor] = useState("");
    const [emotionSize, setEmotionSize] = useState("");

    function setField(e) {
        if (e.target.id === "emotionName") { setEmotionName(e.target.value) }
        if (e.target.id === "emotionCause") { setEmotionCause(e.target.value) }
        if (e.target.name === "emotionColor") { setEmotionColor(e.target.value) }
    }

    return (
        <Fragment>
            <form action="" onChange={setField}>
                <div>
                    <p>A stranger arrives on the doorstep.</p>
                    <a href="#emotionName">Ask their name.</a>
                </div>
                <div id="emotionName">
                    <label htmlFor="emotionName">Who are they?</label>
                    <input id="emotionName" type="text" placeholder="Name the emotion you're feeling."/>
                    <a href="#emotionColor">There's a certain atmosphere hanging about them...</a>
                </div>
                <div id="emotionColor">
                    <label htmlFor="emotionColor">What colour are they?</label>
                    <input type="color" placeholder="What colour does this emotion feel like to you?" />
                    <a href="#emotionCause">Listen to their story.</a>
                </div>
                <div id="emotionCause">
                    <label htmlFor="emotionCause">Why are they here?</label>
                    <textarea id="emotionCause" placeholder="Describe the situation that caused this emotion."/>
                    <a href="#emotionSize">They ask for a room.</a>
                </div>
                <div id="emotionSize">
                    <label htmlFor="emotionSize">How much space do they need?</label>
                    {/* <label htmlFor="medium">Medium-sized room</label>
                    <input id="medium" name="roomSize" type="radio" onClick={() => setEmotionSize("medium")} />
                    <label htmlFor="large">Large room</label>
                    <input id="large" name="roomSize" type="radio" onClick={() => setEmotionSize("large")} /> */}
                    <input type="submit" value="Show your new guest to a regular room." />
                    <input type="submit" value="Show your new guest to a large room." />
                </div>
            </form>
        </Fragment>

    )

}

export default NewGuest;