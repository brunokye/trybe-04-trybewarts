const buttonLogin = document.getElementById('button-login');
const buttonSubmit = document.getElementById('submit-btn');
const inputEmail = document.getElementById('login-email');
const inputPassword = document.getElementById('login-password');
const checkboxVerify = document.getElementById('agreement');
const characterCounter = document.getElementById('counter');
const textArea = document.getElementById('textarea');

function validateLogin() {
  if (inputEmail.value !== 'tryber@teste.com' || inputPassword.value !== '123456') {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

checkboxVerify.onchange = function test() {
  if (this.checked) {
    buttonSubmit.disabled = false;
  } else {
    buttonSubmit.disabled = true;
  }
};

// Contador de caracteres - https://stackabuse.com/character-counter-for-text-areas-with-vanilla-javascript/
function calculateCounter() {
  const maxCharacters = 500;
  const getValue = textArea.value.length;
  const counter = maxCharacters - getValue;

  characterCounter.textContent = counter;
}

/*
function displayInfo() {
  const clearScreen = document.getElementById('evaluation-form');
  const printScreen = document.getElementById('form-data');
  const inputName = document.getElementById('input-name').value;
  const inputLast = document.getElementById('input-lastname').value;
  const testEmail = document.getElementById('input-email').value;
  const inputSelect = document.getElementById('house').value;

  clearScreen.style.visibility = 'hidden';

  let newName = document.getElementById('new-name').value;
  let newEmail = document.getElementById('new-email').value;
  let newHouse = document.getElementById('new-house').value;

  newName = `Nome: ${inputName}${inputLast}`;
  newEmail = `Email: ${testEmail}`;
  newHouse = `Casa: ${inputSelect}`;

  printScreen.style.visibility = 'visible';
}
*/

buttonLogin.addEventListener('click', validateLogin);
// buttonSubmit.addEventListener('click', displayInfo);
textArea.addEventListener('input', calculateCounter);
