document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add("fadeIn");

    // Función para mostrar la alerta al enviar el formulario
    document.getElementById('enviarBoton').addEventListener('click', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente
        alert("Gracias por su comentario");

        // Limpiar todos los campos del formulario
        var inputs = document.querySelectorAll('input, textarea');
        inputs.forEach(function(input) {
            input.value = ''; // Resetea el valor de cada campo de entrada y textarea
        });
    });
});