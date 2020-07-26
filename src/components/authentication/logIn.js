import React, { Fragment, useState } from 'react';
import firebase from '../../firebase';

function LogIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function setField(e) {
        if (e.target.name === "email") { setEmail(e.target.value) }
        if (e.target.name === "password") { setPassword(e.target.value) }
    }

    function handleLogIn(e) {
        console.log("login in btn")
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
            console.log(error)
        })
    }

    return (
        <Fragment>
            <p>Log In</p>
            <form action="" onChange={setField}>
                <label htmlFor="email">
                    Email:
                    <input name="email" id="email" type="email" placeholder="Email"/>
                </label>
                <label htmlFor="password">
                    Password:
                    <input name="password" id="password" type="password" placeholder="Password"/>
                </label>
                <input type="submit" value="Log In" onClick={handleLogIn}/>
            </form>
        </Fragment>    
    )

}

export default LogIn;