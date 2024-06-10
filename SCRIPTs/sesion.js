const form = document.getElementById('loginForm');
    
// Datos válidos para iniciar sesión
const validUsername1 = 'Yoongi17';
const validUsername2 = 'Suga30@gmail.com';
const validPassword = 'ShadowAS17';

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if ((username === validUsername1 || username === validUsername2) && password === validPassword) {
        alert('Bienvenido a nuestra página');
        // Redirigir a otra página web después de la alerta
        window.location.href = '../Wii.html';
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});