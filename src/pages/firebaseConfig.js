// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged , signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react"

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
export const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

//custom hook 
export function useAuth() {
  const [ currentUser, setCurrentUser ] = useState();
  useEffect(() => {
    let unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, []);
  return currentUser;
}


// storage_bucket

export async function upload (file, currentUser, setLoading) {
    const fileRef = ref(storage_bucket, currentUser.uid + '.png');
    setLoading(true)
    const snapshot = await uploadBytes(fileRef, file);
    const photoURL = await getDownloadURL(fileRef);

    updateProfile(currentUser, {photoURL})

    setLoading(false)
    alert("uploaded File")
}