// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsnJdqlyzC6hTo-1JQ9Ai2aICzu21hy7k",
  authDomain: "popcorniq-ad141.firebaseapp.com",
  projectId: "popcorniq-ad141",
  storageBucket: "popcorniq-ad141.firebasestorage.app",
  messagingSenderId: "594737400663",
  appId: "1:594737400663:web:54a4ed33d8779505cfcc12",
  measurementId: "G-8MT5D58R74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();