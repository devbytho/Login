import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
import { getAuth, sendSignInLinkToEmail } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBnrG0Xo0oXlhhOnkBRJCMiqqWmIzYfbZY",
  authDomain: "login-portfoliov1.firebaseapp.com",
  projectId: "login-portfoliov1",
  storageBucket: "login-portfoliov1.firebasestorage.app",
  messagingSenderId: "8270160669",
  appId: "1:8270160669:web:d610d76e4daa63795877f4",
  measurementId: "G-7M6EYY5QR1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
const auth = getAuth(app);

// Loader fade out
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if(loader) loader.classList.add("hidden");

  const loginContainer = document.getElementById("loginContainer");
  if(loginContainer) loginContainer.style.opacity = "1";
});

// Login form
const loginForm = document.getElementById("loginForm");
if(loginForm){
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const errorBox = document.getElementById("error");
    const successBox = document.getElementById("success");

    errorBox.textContent = "";
    successBox.textContent = "";

    const actionCodeSettings = {
      url: window.location.origin + '/finish-login.html',
      handleCodeInApp: true
    };

    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem('emailForSignIn', email);
      successBox.textContent = "Login link sent! Check your email.";
    } catch(err) {
      errorBox.textContent = "Failed to send login link.";
    }
  });
}

