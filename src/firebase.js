// Import the functions from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSNdMGGUumBhKMfCaw9bDGkpEjzEngGyM",
  authDomain: "react-task-management-system.firebaseapp.com",
  projectId: "react-task-management-system",
  storageBucket: "react-task-management-system.appspot.com",
  messagingSenderId: "817627713821",
  appId: "1:817627713821:web:6d874d479b1261228751f4",
  measurementId: "G-5SWRS8PP68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
