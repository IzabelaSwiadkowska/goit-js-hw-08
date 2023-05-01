/* eslint-disable comma-dangle */
/* eslint-disable no-alert */
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

function savedData() {
  const data = {
    email: input.value,
    message: textarea.value,
  };
  try {
    localStorage.setItem('feedback-form-state', JSON.stringify(data));
  } catch (e) {
    console.error(e.message);
  }
}
if (localStorage.length !== 0) {
  try {
    input.value = JSON.parse(localStorage.getItem('feedback-form-state')).email;
    textarea.value = JSON.parse(
      localStorage.getItem('feedback-form-state')
    ).message;
  } catch (e) {
    console.error(e.message);
  }
}

form.addEventListener('input', throttle(savedData, 500));

function submitHandler(e) {
  e.preventDefault();

  if (input.value === '' || textarea.value === '') {
    alert('Both fields should be filled before send!');
  }
  const dataSent = { email: input.value, message: textarea.value };
  console.log(dataSent);
  localStorage.removeItem('feedback-form-state');
  form.reset();
}

form.addEventListener('submit', submitHandler);
