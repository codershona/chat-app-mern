import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  // your Firebase credentials go here
  apiKey: "AIzaSyDIF6oCEKOLY3rxyAjiTJKtUpqi7Z69S-Y",
  authDomain: "chat-app-f-1105c.firebaseapp.com",
  projectId: "chat-app-f-1105c",
  storageBucket: "chat-app-f-1105c.appspot.com",
  messagingSenderId: "83938649539",
  appId: "1:83938649539:web:6233be4bffea2643f38976",
  measurementId: "G-R6QGD6TG0X",
});

const database = firebaseApp.firestore();

export default database;
