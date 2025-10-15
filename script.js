import { getAuth, sendSignInLinkToEmail } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

const auth = getAuth();

const actionCodeSettings = {
  url: window.location.origin + '/finish-login.html', // <-- callback page
  handleCodeInApp: true
};

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;

  await sendSignInLinkToEmail(auth, email, actionCodeSettings);
  window.localStorage.setItem('emailForSignIn', email);
});
