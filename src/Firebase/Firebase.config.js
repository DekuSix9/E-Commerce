// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMOc61SMA9-1NqisTsQgTRH9Q0-euO3bs",
  authDomain: "e-commerce-5f744.firebaseapp.com",
  projectId: "e-commerce-5f744",
  storageBucket: "e-commerce-5f744.firebasestorage.app",
  messagingSenderId: "169079420472",
  appId: "1:169079420472:web:1dc228839d50149c7098cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);