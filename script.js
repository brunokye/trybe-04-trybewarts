const buttonLogin = document.getElementById('button-login');
const buttonSubmit = document.getElementById('submit-btn');
const buttonGoBack = document.getElementById('go-back');
const inputEmail = document.getElementById('login-email');
const inputPassword = document.getElementById('login-password');
const checkboxVerify = document.getElementById('agreement');
const characterCounter = document.getElementById('counter');
const textArea = document.getElementById('textarea');
const askForm = document.getElementById('evaluation-form');
const answerForm = document.getElementById('form-data');
const newName = document.getElementById('new-name');
const newEmail = document.getElementById('new-email');
const newHouse = document.getElementById('new-house');
const newObs = document.getElementById('new-obs');
const newFamily = document.getElementById('new-family');
const newSubject = document.getElementById('new-subject');
const newRate = document.getElementById('new-rate');

function validateLogin(event) {
  event.preventDefault();

  if (inputEmail.value !== 'tryber@teste.com' || inputPassword.value !== '123456') {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

// Contador de caracteres - https://stackabuse.com/character-counter-for-text-areas-with-vanilla-javascript/
function calculateCounter() {
  const maxCharacters = 500;
  const getValue = textArea.value.length;
  const counter = maxCharacters - getValue;

  characterCounter.textContent = counter;
}

checkboxVerify.onchange = function verifyTerms() {
  if (this.checked) {
    buttonSubmit.disabled = false;
  } else {
    buttonSubmit.disabled = true;
  }
};

function getText() {
  const getName = document.getElementById('input-name').value;
  const getLastName = document.getElementById('input-lastname').value;
  const getEmail = document.getElementById('input-email').value;
  const getHouse = document.getElementById('house').value;
  const getObs = document.getElementById('textarea').value;

  newName.innerText = `Nome: ${getName} ${getLastName}`;
  newEmail.innerText = `Email: ${getEmail}`;
  newHouse.innerText = `Casa: ${getHouse}`;
  newObs.innerText = `Observações: ${getObs}`;
}

function getFamily() {
  const family = document.getElementsByClassName('family');

  for (let i = 0; i < family.length; i += 1) {
    if (family[i].checked) {
      newFamily.innerText = `Família: ${family[i].value}`;
    }
  }
}

function getSubject() {
  const subject = document.getElementsByClassName('subject');
  const newArray = [];

  for (let i = 0; i < subject.length; i += 1) {
    if (subject[i].checked) {
      newArray.push(` ${subject[i].value}`);
    }
  }

  newSubject.innerText = `Matérias: ${newArray}`;
}

function getRate() {
  const rate = document.getElementsByClassName('rate');

  for (let i = 0; i < rate.length; i += 1) {
    if (rate[i].checked) {
      newRate.innerText = `Avaliação: ${rate[i].value}`;
    }
  }
}

function newForm(event) {
  event.preventDefault();

  askForm.style.display = 'none';
  answerForm.style.display = 'flex';

  getText();
  getFamily();
  getSubject();
  getRate();
}

function goBack(event) {
  event.preventDefault();

  askForm.style.display = 'flex';
  answerForm.style.display = 'none';
}

buttonLogin.addEventListener('click', validateLogin);
buttonSubmit.addEventListener('click', newForm);
buttonGoBack.addEventListener('click', goBack);
textArea.addEventListener('input', calculateCounter);
