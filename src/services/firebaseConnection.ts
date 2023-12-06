// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAZdH1XAzJtEBbRTrH1vrU5ZS9hk99w4fE",
  authDomain: "reactlinks-f83f4.firebaseapp.com",
  projectId: "reactlinks-f83f4",
  storageBucket: "reactlinks-f83f4.appspot.com",
  messagingSenderId: "519606405358",
  appId: "1:519606405358:web:e016b311e103fa52c90bff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {auth, db}