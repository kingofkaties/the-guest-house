import React, { Component, useState, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './App.css';
import logIn from './components/authentication/logIn'
import signUp from './components/authentication/signUp'
import firebase from './firebase';
// import * as firebaseui from 'firebaseui'

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

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       users: [],
//     }
//   }

//   componentDidMount() {

//     // here we create a variable that holds a reference to our database
//     const dbRef = firebase.database().ref();

//     // here we add an event listener to that variable that will fire
//     // every time there is a change in the database

//     // this event listener takes a callback function which we will use to get our data
//     // from the database and call it response
//     dbRef.on('value', (response) => {

//       // here we use Firebase's .val() method to parse our database info the way we want it
//       console.log(response.val());

//       // Here we're creating a variable to store the new state we want to introduce to our app
//       const newState = [];
  
//       // Here we store the response from our query to Firebase inside of a variable called data
//       // .val() is a Firebase method that gets us the information we want
//       const data = response.val();
  
//       //data is an object, so we iterate through it using a for in loop to access each book name 
//       for (let key in data) {
  
//         // inside the loop, we push each book name to an array we already created inside the .on() function called newState
//         newState.push(data[key]);
//       }
  
//       // then, we call this.setState in order to update our component's state using the local array newState
//       this.setState({
//         users: newState
//       });
//     });

//   }

//   render() {
//     return (
//       <ul>
//         <h1>The Guest House</h1>
//         {this.state.users.map((user) => {
//           return <li>{user}</li>
//         })}
//       </ul>
//     )
//   }
// }

export default App;
