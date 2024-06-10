const form = document.getElementById('registrationForm');
        let attempts = 3;

        // Datos correctos para el registro
        const validUsername = 'Yoongi17';
        const validEmail = 'Suga30@gmail.com';
        const validPassword = 'ShadowAS17';

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (username === validUsername && email === validEmail && password === validPassword) {
                alert('Registro exitoso');
                window.location.href = 'sesion.html';
            } else {
                attempts--;
                alert(`Error. Te quedan ${attempts} intentos.`);
                if (attempts === 0) {
                    form.reset();
                    attempts = 3;
                    alert('Has agotado tus intentos. Inténtalo de nuevo más tarde.');
                }
            }
        });