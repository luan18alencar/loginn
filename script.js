const form = document.getElementById('login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Simular validação de login (substitua com sua lógica real)
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'admin' && password === 'senha123') {
        // Login bem-sucedido! Redirecionar para a página principal
        window.location.href = 'index.html';
    } else {
        // Login falhou! Exibir mensagem de erro
        alert('Email ou senha incorretos.');
    }
});