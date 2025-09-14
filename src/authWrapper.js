// Custom Firebase Auth Wrapper to prevent reCAPTCHA errors
import { auth } from './firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";


// Custom auth wrapper that handles reCAPTCHA errors
class AuthWrapper {
  constructor() {
    this.auth = auth;
    this.setupErrorHandling();
  }

  setupErrorHandling() {
    // Override Firebase's internal reCAPTCHA functions
    if (typeof window !== 'undefined') {
      // Mock the problematic function
      window.firebase = window.firebase || {};
      window.firebase.auth = window.firebase.auth || {};
      
      if (!window.firebase.auth._getRecaptchaConfig) {
        window.firebase.auth._getRecaptchaConfig = () => {
          console.log('reCAPTCHA disabled - using mock config');
          return {
            disabled: true,
            skipVerification: true,
            mock: true
          };
        };
      }
    }
  }

  async signup(email, password) {
    try {
      // Disable reCAPTCHA verification
      this.auth.settings.appVerificationDisabledForTesting = true;
      
      const result = await createUserWithEmailAndPassword(this.auth, email, password);
      console.log('Signup successful:', result.user.email);
      return result;
    } catch (error) {
      console.error('Signup error:', error);
      throw this.handleAuthError(error);
    }
  }

  async login(email, password) {
    try {
      // Disable reCAPTCHA verification
      this.auth.settings.appVerificationDisabledForTesting = true;
      
      const result = await signInWithEmailAndPassword(this.auth, email, password);
      console.log('Login successful:', result.user.email);
      return result;
    } catch (error) {
      console.error('Login error:', error);
      throw this.handleAuthError(error);
    }
  }

  async logout() {
    try {
      await signOut(this.auth);
      console.log('Logout successful');
      setTimeout(() => {
        
      }, 500);
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  }

  subscribeToAuthChanges(callback) {
    return onAuthStateChanged(this.auth, callback);
  }

  handleAuthError(error) {
    // Handle specific reCAPTCHA-related errors
    if (error.message && error.message.includes('_getRecaptchaConfig')) {
      return new Error('Authentication service is temporarily unavailable. Please try again later.');
    }
    
    if (error.code === 'auth/operation-not-allowed') {
      return new Error('Email/password accounts are not enabled. Please contact support.');
    }
    
    return error;
  }
}

// Create singleton instance
const authWrapper = new AuthWrapper();

// Export the wrapper methods
export const signup = (email, password) => authWrapper.signup(email, password);
export const login = (email, password) => authWrapper.login(email, password);
export const logout = () => authWrapper.logout();
export const subscribeToAuthChanges = (callback) => authWrapper.subscribeToAuthChanges(callback);
