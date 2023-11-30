// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "penster-180da.firebaseapp.com",
  projectId: "penster-180da",
  storageBucket: "penster-180da.appspot.com",
  messagingSenderId: "102592087834",
  appId: "1:102592087834:web:08b6fb4da377ed8c2b0ea3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
