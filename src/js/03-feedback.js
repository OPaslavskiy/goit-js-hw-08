import throttle from 'lodash.throttle';
const submitForm = document.querySelector('.feedback-form');
const textArea = document.querySelector('textarea');

const MESSAGE_KEY = 'userMessage';

submitForm.addEventListener('submit', onFormSubmit);
textArea.addEventListener('input', throttle(enteringMessage, 500));

saveTextarea();

function enteringMessage(event) {
  const message = event.target.value;
  localStorage.setItem(MESSAGE_KEY, message);
}

function onFormSubmit(event) {
  event.preventDefault();

  const formElement = event.currentTarget.elements;

  if (!formElement.email.value || !formElement.message.value) {
    alert('Dude, fill in all the fields');
  }
  const formData = new FormData(event.currentTarget);

  console.log(formData);
  if (formElement.email.value && formElement.message.value) {
    submitForm.reset();
    localStorage.removeItem(MESSAGE_KEY);
  }
}

function saveTextarea() {
  const savedMessage = localStorage.getItem(MESSAGE_KEY);
  if (savedMessage) {
    textArea.value = savedMessage;
  }
}
