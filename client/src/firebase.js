
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
   apiKey : import.meta.env.FIREBASE_KEY,
  authDomain: "estate-063.firebaseapp.com",
  projectId: "estate-063",
  storageBucket: "estate-063.appspot.com",
  messagingSenderId: "219741041954",
  appId: "1:219741041954:web:a0db65d142d9119bdc217b",
  measurementId: "G-DGD8JQ2GFG"
};


export const app = initializeApp(firebaseConfig);
