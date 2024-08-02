// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-d721b.firebaseapp.com",
  projectId: "mern-blog-d721b",
  storageBucket: "mern-blog-d721b.appspot.com",
  messagingSenderId: "874740968796",
  appId: "1:874740968796:web:cf194d84417bbd84e86599"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);