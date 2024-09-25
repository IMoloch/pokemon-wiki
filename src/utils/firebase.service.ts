// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firebase = {
  auth: getAuth(app),
  signIn: function (user: User) {
    const result = signInWithEmailAndPassword(
      this.auth,
      user.email,
      user.password
    );
    return result;
  },

  signUp: function async (user: User) {
    return createUserWithEmailAndPassword(this.auth, user.email, user.password)
  },

  signOut: function () {
    this.auth.signOut();
  },

}

export { firebase };