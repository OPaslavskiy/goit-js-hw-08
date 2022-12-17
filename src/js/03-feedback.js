import throttle from 'lodash.throttle';

const feedback = document.querySelector('.feedback-form');
const FORM_KEY = 'feedback-form-state';
openPage();

feedback.addEventListener('submit', sendingFeedback);
feedback.addEventListener('input', throttle(savedMessage, 500));

let formData = {};

function errorMessage() {
  alert('Dude, fill in all the fields');
}

function sendingFeedback(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const message = event.currentTarget.elements.message.value;

  if (!email || !message) {
    errorMessage();
  } else {
    formData = { email, message };
    console.log(formData);
    feedback.reset();
    localStorage.removeItem(FORM_KEY);
  }
}

function savedMessage() {
  const currentEmail = feedback.elements.email.value;
  const currentMessage = feedback.elements.message.value;
  formData.email = currentEmail;
  formData.message = currentMessage;

  localStorage.setItem(FORM_KEY, JSON.stringify(formData));
}

function openPage() {
  currentValue = JSON.parse(localStorage.getItem(FORM_KEY));
  if (currentValue) {
    console.log(currentValue);
    feedback.elements.email.value = currentValue.email;
    feedback.elements.message.value = currentValue.message;
  }
}
