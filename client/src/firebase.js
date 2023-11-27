import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-6ea7a.firebaseapp.com",
  projectId: "real-estate-6ea7a",
  storageBucket: "real-estate-6ea7a.appspot.com",
  messagingSenderId: "979108095356",
  appId: "1:979108095356:web:c5ab38fff79e93d37070f9"
};

export const app = initializeApp(firebaseConfig);