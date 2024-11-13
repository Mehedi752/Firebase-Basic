// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeaZNQJOpGiCKfk-J5jDUKevowSTan_XQ",
  authDomain: "simple-firebase-bd5e1.firebaseapp.com",
  projectId: "simple-firebase-bd5e1",
  storageBucket: "simple-firebase-bd5e1.firebasestorage.app",
  messagingSenderId: "504637938771",
  appId: "1:504637938771:web:5f8a611ad75a6a3e59baa6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;