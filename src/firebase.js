// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-DeeGqW83z3l4ms1nlWQEjs8FH1-HfkU",
  authDomain: "webcafeland-af897.firebaseapp.com",
  projectId: "webcafeland-af897",
  storageBucket: "webcafeland-af897.firebasestorage.app",
  messagingSenderId: "688606037646",
  appId: "1:688606037646:web:95eb923aa38ef2a4e36bdf",
  measurementId: "G-XP4EWRX7C0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);