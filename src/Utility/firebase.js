import firebase from "firebase/compat/app";
// auth
import { getAuth } from 'firebase/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABdGDW1NgtWXT5FKYfoNlGa7aBzqlNV7c",
  authDomain: "clone-8723c.firebaseapp.com",
  projectId: "clone-8723c",
  storageBucket: "clone-8723c.appspot.com",
  messagingSenderId: "717392441450",
  appId: "1:717392441450:web:f3bd52304c3d7105f2da13",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
