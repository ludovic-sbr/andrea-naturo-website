// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
let config = {
  apiKey: "AIzaSyA32FiEBo-1d_MhGN6SGyPYeD6oDhmnjwY",
  authDomain: "andrea-naturo.firebaseapp.com",
  databaseURL: "https://andrea-naturo-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "andrea-naturo",
  storageBucket: "andrea-naturo.appspot.com",
  messagingSenderId: "1029659274586",
  appId: "1:1029659274586:web:89fc960fe3b49da7e65763",
  measurementId: "G-NBFW3T21CV"
}

const app = initializeApp(config);

// Get a reference to the database service
const db = getDatabase(app);

export default db