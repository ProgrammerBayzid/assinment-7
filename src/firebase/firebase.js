// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBGr8WazzEczIleeFAGsmDdMt9LCPQ6-zA",
    authDomain: "car-doctor-d28dc.firebaseapp.com",
    projectId: "car-doctor-d28dc",
    storageBucket: "car-doctor-d28dc.appspot.com",
    messagingSenderId: "177388554608",
    appId: "1:177388554608:web:9cf7462b61379da773e7b5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;