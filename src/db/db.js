
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDyRQSs3f3eDbS9rRhmG1k-ZDx_hLjZBaw",
    authDomain: "ezearroyo-coder.firebaseapp.com",
    projectId: "ezearroyo-coder",
    storageBucket: "ezearroyo-coder.appspot.com",
    messagingSenderId: "670527082852",
    appId: "1:670527082852:web:d86c21bfddda9f3b712a71"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db