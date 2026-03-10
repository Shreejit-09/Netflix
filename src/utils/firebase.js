// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoeUKOTvuSzzNaSBPtUmwcThPKohm_ANQ",
  authDomain: "netflix-69f0d.firebaseapp.com",
  projectId: "netflix-69f0d",
  storageBucket: "netflix-69f0d.firebasestorage.app",
  messagingSenderId: "518862229883",
  appId: "1:518862229883:web:e335ab87dbbbebfcaa2dde",
  measurementId: "G-XRDGD721RW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();