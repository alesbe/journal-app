// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIu3SxLBXTk9o1-X3gj4S-MbNDlTvp3No",
  authDomain: "aebellver-journal.firebaseapp.com",
  projectId: "aebellver-journal",
  storageBucket: "aebellver-journal.appspot.com",
  messagingSenderId: "1022966477492",
  appId: "1:1022966477492:web:0e20c6e51045a1c0589de1"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore( FirebaseApp );