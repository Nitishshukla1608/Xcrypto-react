// src/authService.js
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

const [login, setLogin] = useState(null);
// Signup
export const signup = async (email, password) => {
  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    // Handle reCAPTCHA-related errors
    if (error.code === 'auth/operation-not-allowed') {
      throw new Error('Email/password accounts are not enabled. Please contact support.');
    }
    throw error;
  }
};

// Login
export const login = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
      setLogin(true);
  } catch (error) {
    // Handle reCAPTCHA-related errors
    if (error.code === 'auth/operation-not-allowed') {
      throw new Error('Email/password accounts are not enabled. Please contact support.');
    }
    throw error;
  }
};

// Logout
export const logout = () => {
  return signOut(auth);
};

// Auth state listener (to track logged-in user)
export const subscribeToAuthChanges = (callback) => {
  return onAuthStateChanged(auth, callback);
};
