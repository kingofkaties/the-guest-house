import React, { Component, useState, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './App.css';
import logIn from './components/authentication/logIn'
import signUp from './components/authentication/signUp'
import firebase from './firebase';

function App() {

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log('signed in')
    } else { console.log("guest") }
  })

  return (
    <Router>
      <ul>
        <h1>The Guest House</h1>
        <Link to="/logIn">Log In</Link>
        <Route exact path="/logIn" component={logIn} />
        <Link to="/signUp">Sign Up</Link>
        <Route exact path="/signUp" component={signUp} />
      </ul>
    </Router>
  )
}

export default App;
