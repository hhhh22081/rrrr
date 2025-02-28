document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (username && email && password) {
      document.getElementById('message').textContent = 'Регистрация успешна!';
      document.getElementById('message').style.color = 'green';
    } else {
      document.getElementById('message').textContent = 'Пожалуйста, заполните все поля.';
    }
  });