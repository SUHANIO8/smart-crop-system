import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

/**
 * FIREBASE SERVICE CONFIGURATION (Canvas)
 * * This file handles the connection parameters required to bridge your 
 * React application with the Firebase Realtime Database.
 */

// Helper to safely access environment variables without triggering esbuild warnings
const getEnv = (key, fallback) => {
  try {
    const env = (typeof import.meta !== 'undefined' && import.meta.env) ? import.meta.env : {};
    return env[key] || fallback;
  } catch {
    return fallback;
  }
};

const firebaseConfig = {
  // These parameters are "filled" from your .env file or fallback to your project defaults
  apiKey: getEnv("VITE_FIREBASE_API_KEY", "AIzaSyBT-crmUL-3-vG7pcUtnNdnC7lQTYMZ3Tg"),
  authDomain: getEnv("VITE_FIREBASE_AUTH_DOMAIN", "crop-recommendation-f8a69.firebaseapp.com"),
  
  /**
   * ✅ CRITICAL: The databaseURL must be the base endpoint.
   * Node paths like "/sensor" must not be included here; they are handled 
   * in your components using ref(rtdb, 'sensor').
   */
  databaseURL: getEnv("VITE_FIREBASE_DATABASE_URL", "https://crop-recommendation-f8a69-default-rtdb.asia-southeast1.firebasedatabase.app"),
  
  projectId: getEnv("VITE_FIREBASE_PROJECT_ID", "crop-recommendation-f8a69"),
  storageBucket: getEnv("VITE_FIREBASE_STORAGE_BUCKET", "crop-recommendation-f8a69.firebasestorage.app"),
  messagingSenderId: getEnv("VITE_FIREBASE_MESSAGING_SENDER_ID", "79378848532"),
  appId: getEnv("VITE_FIREBASE_APP_ID", "1:79378848532:web:fae430e620a545c7e34001"),
  measurementId: getEnv("VITE_FIREBASE_MEASUREMENT_ID", "G-PZQPGW8F8X")
};

// Initialize the Firebase Application
const app = initializeApp(firebaseConfig);

/**
 * EXPORTED DATABASE INSTANCE
 * * We explicitly pass the databaseURL to getDatabase() to ensure the app 
 * connects to your specific asia-southeast1 regional instance.
 * * By exporting 'rtdb', your Predict page can now automatically fill 
 * the N, P, K, pH, temperature, humidity, and rainfall fields with 
 * live data present in the database.
 */
export const rtdb = getDatabase(app, firebaseConfig.databaseURL);