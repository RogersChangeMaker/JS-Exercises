const showSignup = document.getElementById("show-signup");
const showSignin = document.getElementById("show-signin");
const signinForm = document.getElementById("signin-form");
const signupForm = document.getElementById("signup-form");

// Toggle forms
showSignup.addEventListener("click", () => {
  signinForm.classList.add("hidden");
  signupForm.classList.remove("hidden");
});

showSignin.addEventListener("click", () => {
  signupForm.classList.add("hidden");
  signinForm.classList.remove("hidden");
});

// Dummy submit handlers (you can replace with actual logic or API calls)
signinForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("signin-email").value;
  const password = document.getElementById("signin-password").value;

  alert(`Logging in with\nEmail: ${email}`);
});

signupForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("signup-name").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  alert(`Signed up as ${name}\nEmail: ${email}`);
});
