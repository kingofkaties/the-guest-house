import React, { Fragment } from 'react';

function NewGuest() {

    return (
        <Fragment>
            <p>A new guest arrives on the doorstep.</p>
            <label htmlFor="emotionName">Who are they?</label>
            <input id="emotionName" type="text" placeholder="Name the emotion you're feeling."/>
            <label htmlFor="emotionCause">Why are they here?</label>
            <input type="text" placeholder="Describe the situation that caused this emotion."/>
            <label htmlFor="emotionColor">What colour are they?</label>
            <input type="color" placeholder="What colour does this emotion feel like to you?" />
            <label htmlFor="emotionSize">How much space do they need?</label>
            <label htmlFor="medium">Medium-sized room</label>
            <input id="medium" type="radio" />
            <label htmlFor="large">Large room</label>
            <input id="large" type="radio" />
        </Fragment>

    )

}

export default NewGuest;