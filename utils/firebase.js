import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAJlYZ5YqwjcnujA6q-GJSSUad7n5fdg18",
    authDomain: "next-firebase-6ca8f.firebaseapp.com",
    projectId: "next-firebase-6ca8f",
    storageBucket: "next-firebase-6ca8f.appspot.com",
    messagingSenderId: "639524718675",
    appId: "1:639524718675:web:98765869402f5b29069ea6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);