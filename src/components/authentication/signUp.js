import React, { Fragment, useState } from 'react';
import firebase from '../../firebase';

function SignUp() {

    // setting up state
    // const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    // const [confirmEmail, setConfirmEmail] = useState("");

    function setField(e) {
        // if (e.target.name === "username") { setUsername(e.target.value) }
        if (e.target.name === "password") { setPassword(e.target.value) }
        if (e.target.name === "email") { setEmail(e.target.value) }
        // if (e.target.name === "confirmEmail") { setConfirmEmail(e.target.value) }
    }

    function handleSignUp(e) {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            alert(error)
        })
    }


    return (
        <Fragment>
            <p>Sign Up</p>
            <form action="" onChange={setField}>
                {/* <label htmlFor="username">
                    Username:
                    <input name="username" type="text" id="username" placeholder="Enter your username" />
                </label> */}
                <label htmlFor="email">
                    Email:
                    <input name="email" type="email" id="email" placeholder="Enter your email" />
                </label>
                <label htmlFor="password">
                    Password:
                    <input name="password" type="password" id="password" placeholder="Enter your password" />
                </label>
                {/* <label htmlFor="confirmEmail">
                    Confirm email:
                    <input name="confirmEmail" type="email" id="confirmEmail" placeholder="Confirm your email" />
                </label> */}
                <input type="submit" value="Sign Up" onClick={handleSignUp}/>
            </form>
        </Fragment>
    )
}

export default SignUp;