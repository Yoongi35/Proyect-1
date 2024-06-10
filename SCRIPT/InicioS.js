const logoutButton = document.getElementById('logoutButton');

logoutButton.addEventListener('click', function() {
    alert('Has cerrado sesión');
    window.location.href = '../index.html'; // Link al que redirige al salir
});