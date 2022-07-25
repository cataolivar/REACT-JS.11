import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0lWC0kCIKZV5fT9tGChDI-9aTunP66E0",
  authDomain: "kalakashop-4a0b4.firebaseapp.com",
  projectId: "kalakashop-4a0b4",
  storageBucket: "kalakashop-4a0b4.appspot.com",
  messagingSenderId: "834756441190",
  appId: "1:834756441190:web:15ab88fb9b70f993fa29a7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);