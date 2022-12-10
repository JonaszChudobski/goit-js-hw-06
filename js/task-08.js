const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", submitting);

function submitting(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Please, complete all the fields");
  }
  console.log({"email": email.value, "password": password.value});
  event.currentTarget.reset();
}