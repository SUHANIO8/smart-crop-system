import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

/**
 * FIXED CONFIGURATION
 * Removed the path suffix from databaseURL.
 */
const firebaseConfig = {
  apiKey: "AIzaSyBT-crmUL-3-vG7pcUtnNdnC7lQTYMZ3Tg",
  authDomain: "crop-recommendation-f8a69.firebaseapp.com",
  // ✅ Fixed: URL must not contain /sensor at the end
  databaseURL: "https://crop-recommendation-f8a69-default-rtdb.asia-southeast1.firebasedatabase.app", 
  projectId: "crop-recommendation-f8a69",
  storageBucket: "crop-recommendation-f8a69.firebasestorage.app",
  messagingSenderId: "79378848532",
  appId: "1:79378848532:web:fae430e620a545c7e34001",
  measurementId: "G-PZQPGW8F8X"
};

const app = initializeApp(firebaseConfig);
export const rtdb = getDatabase(app);