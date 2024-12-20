// Import the functions you need from the SDKs you need
import exp from "constants";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBU8R6xU3nXpk3_G2pRSrFmlvPE_H-nzzE",
    authDomain: "smkn2mks-b42f1.firebaseapp.com",
    projectId: "smkn2mks-b42f1",
    storageBucket: "smkn2mks-b42f1.appspot.com",
    messagingSenderId: "553929899381",
    appId: "1:553929899381:web:578d6b147d6edff57ce73c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app)

export {storage}