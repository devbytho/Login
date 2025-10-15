import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

const auth = getAuth();

if (isSignInWithEmailLink(auth, window.location.href)) {
  let email = window.localStorage.getItem('emailForSignIn');
  if (!email) {
    email = window.prompt('Please provide your email for confirmation');
  }

  signInWithEmailLink(auth, email, window.location.href)
    .then(() => {
      window.localStorage.removeItem('emailForSignIn');
      document.getElementById("status").textContent = "✅ Login successful! These are the right credentials.";
    })
    .catch(() => {
      document.getElementById("status").textContent = "❌ Failed to sign in.";
    });
}
