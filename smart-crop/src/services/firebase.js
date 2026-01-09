// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBT-crmUL-3-vG7pcUtnNdnC7lQTYMZ3Tg",
  authDomain: "crop-recommendation-f8a69.firebaseapp.com",
  databaseURL: "https://crop-recommendation-f8a69-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "crop-recommendation-f8a69",
  storageBucket: "crop-recommendation-f8a69.firebasestorage.app",
  messagingSenderId: "79378848532",
  appId: "1:79378848532:web:fae430e620a545c7e34001",
  measurementId: "G-PZQPGW8F8X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const rtdb = getDatabase(app);

export { rtdb };
