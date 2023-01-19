// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyD07Zp0z--RwR1b_ExOuS4q2wbTTcCekfA",
  authDomain: "journal-app-3b1e3.firebaseapp.com",
  projectId: "journal-app-3b1e3",
  storageBucket: "journal-app-3b1e3.appspot.com",
  messagingSenderId: "1057822796017",
  appId: "1:1057822796017:web:573fb057b1b46c884f2150"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDb = getFirestore(firebaseApp);