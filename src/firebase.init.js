// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmxPi0X3FC5yS2cc_-Pl5-0aKwz1Ax2V8",
    authDomain: "personal-website-9f18b.firebaseapp.com",
    projectId: "personal-website-9f18b",
    storageBucket: "personal-website-9f18b.appspot.com",
    messagingSenderId: "560059028610",
    appId: "1:560059028610:web:d3d43e83f3f6c59275d09b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;