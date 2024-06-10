const form = document.getElementById('registrationForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe
    alert('Datos ya registrados. No es necesario volver a ingresar información.');
});