// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLTs8GYd0NqM-_-QXoy2DttUxtC0Xe8PM",
  authDomain: "netflixgpt-c7a24.firebaseapp.com",
  projectId: "netflixgpt-c7a24",
  storageBucket: "netflixgpt-c7a24.firebasestorage.app",
  messagingSenderId: "988504581604",
  appId: "1:988504581604:web:cd2d96e59cdacab91553f1",
  measurementId: "G-NG451FHW2Y"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);