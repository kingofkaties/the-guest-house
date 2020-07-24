// firebase.js
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database'; 

// Initialize Firebase
// USE YOUR CONFIG OBJECT
const config = {
    apiKey: "AIzaSyC8j9C7-s3ZBORg4Jox8wcVrOzT3il3Ev8",
    authDomain: "the-guest-house-5a8bb.firebaseapp.com",
    databaseURL: "https://the-guest-house-5a8bb.firebaseio.com",
    projectId: "the-guest-house-5a8bb",
    storageBucket: "the-guest-house-5a8bb.appspot.com",
    messagingSenderId: "973883640867",
    appId: "1:973883640867:web:be92b52d213123ce527596"
};
firebase.initializeApp(config);

// this exports the CONFIGURED version of firebase
export default firebase;