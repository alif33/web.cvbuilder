import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCZOZpWz7iXo5OjpNbCIFp0b2GqtYde_14",
    authDomain: "cv-builder-5d037.firebaseapp.com",
    projectId: "cv-builder-5d037",
    storageBucket: "cv-builder-5d037.appspot.com",
    messagingSenderId: "670783499107",
    appId: "1:670783499107:web:2b3807731419b4be32c156",
    measurementId: "G-LFKCKXB0H6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db }