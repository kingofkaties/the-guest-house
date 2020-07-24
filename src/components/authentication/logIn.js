import React, { Fragment, useState } from 'react';
import firebase from '../../firebase';

function LogIn() {

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log("signed in!")
        } else { console.log("Guest") }
    })

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    function setField(e) {
        if (e.target.name === "password") { setPassword(e.target.value) }
        if (e.target.name === "email") { setEmail(e.target.value) }
    }

    function handleSignIn(e) {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email, password)
    }

    return (
        <Fragment>
            <p>Log In</p>
            <form action="" onChange={setField}>
                <label htmlFor="email">
                    Email:
                    <input id="email" type="email" placeholder="Email"/>
                </label>
                <label htmlFor="password">
                    Password:
                    <input id="password" type="password" placeholder="Password"/>
                </label>
                <input type="submit" value="Log In" onClick={handleSignIn}/>
            </form>
        </Fragment>    
    )

}

export default LogIn;