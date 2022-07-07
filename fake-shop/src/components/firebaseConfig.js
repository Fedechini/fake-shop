import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDn0otPL1GvyZKRGt-uCqQZ7lb3mzG5Qek",
  authDomain: "fake-shop-883f5.firebaseapp.com",
  projectId: "fake-shop-883f5",
  storageBucket: "fake-shop-883f5.appspot.com",
  messagingSenderId: "315393146848",
  appId: "1:315393146848:web:491fe9f28913ecfc42f585",
  measurementId: "G-CRJ8LE3PLM",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
