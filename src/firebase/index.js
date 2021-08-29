// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD03FC--K40QR-Y6_szPp5iHp-NY5wylA",
  authDomain: "e-commerce-bosch.firebaseapp.com",
  projectId: "e-commerce-bosch",
  storageBucket: "e-commerce-bosch.appspot.com",
  messagingSenderId: "606528617927",
  appId: "1:606528617927:web:2530c86b0a3c9231deade2"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

const querySnapshot = await getDocs(collection(db, "productos"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
})