/* eslint-disable no-useless-catch */
// Import the functions you need from the SDKs you need
import router from '@/router/router';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export class Firebase {
  auth = getAuth(app);

  async getAuth() {
    return new Promise<boolean>((resolve, reject) => {
      onAuthStateChanged(
        this.auth,
        (currentUser) => {
          currentUser ? resolve(true) : resolve(false)
        },
        (error) => {
          reject(error);
        },
      );
    });
  }

  async signIn(user: User) {
    try {
      const result = await signInWithEmailAndPassword(this.auth, user.email, user.password);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async signUp(user: User) {
    try {
      const res = await createUserWithEmailAndPassword(this.auth, user.email, user.password);
      return res;
    } catch (error) {
      throw error;
    }
  }

  signOut() {
    try {
      this.auth.signOut();
    } catch (error) {
      throw error;
    }
    router.push({ name: 'Login' });
  }
}
