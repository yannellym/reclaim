import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZGj-ZvgRblAFSCXjq-pYaX10YGgUTl9Q",
  authDomain: "reclaim-react.firebaseapp.com",
  projectId: "reclaim-react",
  storageBucket: "reclaim-react.appspot.com",
  messagingSenderId: "1051327382010",
  appId: "1:1051327382010:web:4d1de7e40a02be6163e443",
  measurementId: "G-SZJH4T30E1"
};

// Initialize Firebase
initializeApp(firebaseConfig);

//init services
const db = getFirestore();

//collection ref
const colRef = collection(db, "batches")

//get collection Data
getDocs(colRef)
  .then((snapshot) => {
    let batches = []
    snapshot.docs.forEach((doc) =>{
      batches.push({ ...doc.data(), id: doc.id })  //for each object in snapshot, we add an object to batches and an id 
    })
    console.log(batches)
})
.catch(err =>{
  console.log(err.message)
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

