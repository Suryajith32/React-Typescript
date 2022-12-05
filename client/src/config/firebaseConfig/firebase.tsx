import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const FIREBASE_CONFIG = {
    apiKey: "AIzaSyDIKcHJoWnCr9AeIFyU4w0Iqi6VLkphDJI",
    authDomain: "typesccriptreact.firebaseapp.com",
    projectId: "typesccriptreact",
    storageBucket: "typesccriptreact.appspot.com",
    messagingSenderId: "934802941192",
    appId: "1:934802941192:web:1e83fd90a5d3b5608bb8bd",
    measurementId: "G-N07P5JDQDR"
}

const firebaseApp = initializeApp(FIREBASE_CONFIG)
export const auth = getAuth(firebaseApp)
export const db = getFirestore(firebaseApp)
export const storage = getStorage(firebaseApp);
