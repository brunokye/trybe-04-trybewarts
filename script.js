const buttonLogin = document.getElementById('button-login');
const inputEmail = document.getElementById('input-email');
const inputPassword = document.getElementById('input-password');

function validateLogin() {
  if (inputEmail.value !== 'tryber@teste.com' || inputPassword.value !== '123456') {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

buttonLogin.addEventListener('click', validateLogin);
