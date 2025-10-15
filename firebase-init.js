// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";

export const firebaseConfig = {
  apiKey: "AIzaSyBnrG0Xo0oXlhhOnkBRJCMiqqWmIzYfbZY",
  authDomain: "login-portfoliov1.firebaseapp.com",
  projectId: "login-portfoliov1",
  storageBucket: "login-portfoliov1.firebasestorage.app",
  messagingSenderId: "8270160669",
  appId: "1:8270160669:web:d610d76e4daa63795877f4",
  measurementId: "G-7M6EYY5QR1"
};

// ✅ Initialize Firebase app
export const app = initializeApp(firebaseConfig);
