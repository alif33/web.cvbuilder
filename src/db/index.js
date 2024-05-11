import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAsCswjYxK3U_sBwBDuPW_laT_-MeerIPM",
    authDomain: "resumeminutes10.firebaseapp.com",
    projectId: "resumeminutes10",
    storageBucket: "resumeminutes10.appspot.com",
    messagingSenderId: "422466126923",
    appId: "1:422466126923:web:b3f7a5102df3ab84dd39ce",
    measurementId: "G-3NCNN3L760"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db }