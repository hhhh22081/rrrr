document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username && password) {
      document.getElementById('message').textContent = 'Вход выполнен успешно!';
      document.getElementById('message').style.color = 'green';
    } else {
      document.getElementById('message').textContent = 'Пожалуйста, заполните все поля.';
    }
  });