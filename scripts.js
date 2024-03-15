const button = document.querySelector('#enter');

  const login = document.querySelector('#login');

function checkLogin() {
  if (login.value == "Test" && pass.value == "1234") {
    alert('Right!')
  }
  else {
    alert('Wrong!')
  }
}

button.addEventListener('click', checkLogin)