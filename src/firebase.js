// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "reactauth1-350dd.firebaseapp.com",
  projectId: "reactauth1-350dd",
  storageBucket: "reactauth1-350dd.appspot.com",
  messagingSenderId: "604922837617",
  appId: "1:604922837617:web:95fa5cadeafd9c295079d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result)
    })
    .catch((error) => {
      console.log(error)
    })
}
