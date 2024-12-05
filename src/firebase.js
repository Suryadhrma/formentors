// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKfscBNcniXQ_pEdtSw4tds-osy1EAuuQ",
  authDomain: "forweb-325b9.firebaseapp.com",
  projectId: "forweb-325b9",
  storageBucket: "forweb-325b9.firebasestorage.app",
  messagingSenderId: "689524090556",
  appId: "1:689524090556:web:9bc11c22b63d3a3c1b92b9",
  measurementId: "G-FEPQPY9W0P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);