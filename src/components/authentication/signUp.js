import React, { Fragment, useState } from 'react';
import firebase from '../../firebase';

function SignUp() {

    // setting up state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function setField(e) {
        // controlling components in state
        if (e.target.name === "email") { setEmail(e.target.value) }
        if (e.target.name === "password") { setPassword(e.target.value) }
    }

    function handleSignUp(e) {
        console.log(e)
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            console.log(error)
        })
    }


    return (
        <Fragment>
            <p>Sign Up</p>
            <form action="" onChange={setField}>
                <label htmlFor="email">
                    Email:
                    <input name="email" type="email" id="email" placeholder="Enter your email" />
                </label>
                <label htmlFor="password">
                    Password:
                    <input name="password" type="password" id="password" placeholder="Enter your password" />
                </label>
                <input type="submit" value="Sign Up" onClick={handleSignUp}/>
            </form>
        </Fragment>
    )
}

export default SignUp;