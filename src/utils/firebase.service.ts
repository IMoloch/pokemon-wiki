/* eslint-disable no-useless-catch */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firebase = {
  auth: getAuth(app),

  signIn: async function (user: User) {
    try {
      const result = await signInWithEmailAndPassword(this.auth, user.email, user.password);
      return result;
    } catch (error) {
      throw error;
    }
  },

  signUp: async function (user: User) {
    try {
      const res = await createUserWithEmailAndPassword(this.auth, user.email, user.password);
      return res;
    } catch (error) {
      throw error;
    }
  },

  signOut: async function () {
    try {
      this.auth.signOut();
    } catch (error) {
      throw error;
    }
  },
};

export { firebase };
