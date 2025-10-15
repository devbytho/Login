import { app } from './firebase-init.js';
import { getAuth, sendSignInLinkToEmail } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

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
      url: 'https://login.thomasweeink.com/finish-login.html', // ✅ your subdomain
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
