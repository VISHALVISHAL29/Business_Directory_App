// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYAWgf17_x2DXIpv8XGHmbMNCbJtKXRAE",
  authDomain: "business-directory-app-a55c1.firebaseapp.com",
  projectId: "business-directory-app-a55c1",
  storageBucket: "business-directory-app-a55c1.appspot.com",
  messagingSenderId: "399113316011",
  appId: "1:399113316011:web:32c53cbf001f1225c439ee",
  measurementId: "G-JRMKJ1PQ7G"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
//const analytics = getAnalytics(app);