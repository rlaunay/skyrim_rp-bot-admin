import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY?.toString(),
  authDomain: import.meta.env.VITE_AUTH_DOMAIN?.toString(),
  projectId: import.meta.env.VITE_PROJECT_ID?.toString(),
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET?.toString(),
  messagingSenderId: import.meta.env.VITE_MSG_SENDER_ID?.toString(),
  appId: import.meta.env.VITE_APP_ID?.toString(),
  measurementId: import.meta.env.VITE_MEASURE_ID?.toString(),
};

initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
