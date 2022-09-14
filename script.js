const buttonLogin = document.getElementById('button-login');
const buttonSubmit = document.getElementById('submit-btn');
const inputEmail = document.getElementById('login-email');
const inputPassword = document.getElementById('login-password');
const checkboxVerify = document.getElementById('agreement');

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

buttonLogin.addEventListener('click', validateLogin);
