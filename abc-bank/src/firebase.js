import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrlzx9xOIMRDyffKmCD_yr_eYuE69w4nk",
  authDomain: "abcbank-25a5c.firebaseapp.com",
  projectId: "abcbank-25a5c",
  storageBucket: "abcbank-25a5c.appspot.com",
  messagingSenderId: "1033499075040",
  appId: "1:1033499075040:web:ef15997187554ace4ecb85",
  measurementId: "G-ZWX745XRVE",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
