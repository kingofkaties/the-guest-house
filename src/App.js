import React, { Component, useState, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './styles/sass/App.scss';
import logIn from './components/authentication/logIn'
import signUp from './components/authentication/signUp'
import house from './components/house'
import newGuest from './components/newGuest'
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
      <Route path="/house" component={house} />
      <Link to="/newGuest">A guest knocks...</Link>
      <Route exact path="/newGuest" component={newGuest} />
    </Router>
  )
}

export default App;
