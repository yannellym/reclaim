// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

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
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage_bucket = getStorage(app);

