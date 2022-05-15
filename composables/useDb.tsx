// Import the functions you need from the SDKs you need

import firebase from 'firebase/app'

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyC3ICAy84ZP5Fwh2h56iV5B5-UGuv8AMyk",
  authDomain: "uniguesser-e8f61.firebaseapp.com",
  databaseURL: "https://uniguesser-e8f61-default-rtdb.firebaseio.com",
  projectId: "uniguesser-e8f61",
  storageBucket: "uniguesser-e8f61.appspot.com",
  messagingSenderId: "852483125091",
  appId: "1:852483125091:web:edffea01cab7d2ee61ed56"
};


// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;

