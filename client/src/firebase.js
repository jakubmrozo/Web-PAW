// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "paw-paw-web.firebaseapp.com",
  projectId: "paw-paw-web",
  storageBucket: "paw-paw-web.appspot.com",
  messagingSenderId: "888971802918",
  appId: "1:888971802918:web:362736b12b578406fc29e7",
  measurementId: "G-73PTB4WM9C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
