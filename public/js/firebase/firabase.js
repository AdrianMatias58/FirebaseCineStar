// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//poner la apikeys de firebase projec
const firebaseConfig = {
  apiKey: "AIzaSyCiEdvYmm0wrssq_1C2dOYjA9OeJj33U6w",
  authDomain: "cinestar-adrian.firebaseapp.com",
  projectId: "cinestar-adrian",
  storageBucket: "cinestar-adrian.firebasestorage.app",
  messagingSenderId: "700109005349",
  appId: "1:700109005349:web:d32508c6d9e1001d6b95cc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
