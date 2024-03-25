// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVA-L3Doe8AG0A9VYF61Kvrn0whda1sOI",
  authDomain: "netflix-gpt-1599f.firebaseapp.com",
  projectId: "netflix-gpt-1599f",
  storageBucket: "netflix-gpt-1599f.appspot.com",
  messagingSenderId: "301640553036",
  appId: "1:301640553036:web:c2d9ce14b64fd364315ae9",
  measurementId: "G-6X60M8X4BQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);