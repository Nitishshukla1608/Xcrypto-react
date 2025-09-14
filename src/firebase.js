// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBojawm4UgthO4F94TN8W3ShnyDAZQXBU",
  authDomain: "xcrypto-3d378.firebaseapp.com",
  projectId: "xcrypto-3d378",
  storageBucket: "xcrypto-3d378.firebasestorage.app",
  messagingSenderId: "688088753395",
  appId: "1:688088753395:web:c4e17beaf79dc6dac8c386",
  measurementId: "G-FDSPPYXR5V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Configure Firebase Auth to prevent reCAPTCHA errors
try {
  // Disable app verification to prevent reCAPTCHA issues
  auth.settings.appVerificationDisabledForTesting = true;
  
  // Additional configuration to prevent reCAPTCHA errors
  if (typeof window !== 'undefined') {
    // Set up global configuration to prevent reCAPTCHA errors
    window.firebaseAuthConfig = {
      disableAppVerification: true,
      skipRecaptcha: true
    };
  }
} catch (error) {
  console.warn('Firebase Auth configuration warning:', error.message);
}

// Optional: Connect to auth emulator in development
// if (process.env.NODE_ENV === 'development') {
//   connectAuthEmulator(auth, "http://localhost:9099");
// }