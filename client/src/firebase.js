// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyA7muFsGgnh2Cdk4UeMqWwXY_zsVeD9hLQ",
  authDomain: "react-ecommerce-5b2f7.firebaseapp.com",
  projectId: "react-ecommerce-5b2f7",
  storageBucket: "react-ecommerce-5b2f7.appspot.com",
  messagingSenderId: "1092555131738",
  appId: "1:1092555131738:web:91330b290fb26283df0163"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);