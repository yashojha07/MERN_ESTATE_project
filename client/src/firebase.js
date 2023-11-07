// Import the functions you need from the SDKs you need
// apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_KEY,
  authDomain: "estate-063.firebaseapp.com",
  projectId: "estate-063",
  storageBucket: "estate-063.appspot.com",
  messagingSenderId: "219741041954",
  appId: "1:219741041954:web:a0db65d142d9119bdc217b",
  measurementId: "G-DGD8JQ2GFG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDI8umaStLAGA3U-UNSoyi0HZxr0B0vD3Q",
  authDomain: "estate-063.firebaseapp.com",
  projectId: "estate-063",
  storageBucket: "estate-063.appspot.com",
  messagingSenderId: "219741041954",
  appId: "1:219741041954:web:a0db65d142d9119bdc217b",
  measurementId: "G-DGD8JQ2GFG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);*/