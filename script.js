const form = document.getElementById('notify-form');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === "") {
    showError("Whoops! It looks like you forgot to add your email");
  } else if (!emailPattern.test(emailValue)) {
    showError("Please provide a valid email address");
  } else {
    hideError();
    alert("Thank you! You'll be notified soon.");
    emailInput.value = "";
  }
});

function showError(msg) {
  emailInput.classList.add('error');
  errorMessage.textContent = msg;
}

function hideError() {
  emailInput.classList.remove('error');
  errorMessage.textContent = "";
}