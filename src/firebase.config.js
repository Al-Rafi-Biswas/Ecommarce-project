// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi_QTW5oPQQJBvs2v2hhoic6hQSABv0CM",
  authDomain: "sowd-2417-fdc2e.firebaseapp.com",
  projectId: "sowd-2417-fdc2e",
  storageBucket: "sowd-2417-fdc2e.firebasestorage.app",
  messagingSenderId: "197942730120",
  appId: "1:197942730120:web:68ca2d534c73127ccaee3d",
  measurementId: "G-KE3FYM9S8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;