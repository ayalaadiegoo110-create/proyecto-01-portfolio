document.addEventListener('DOMContentLoaded', () => {
    const btnContacto = document.getElementById('btn-contacto');
    const infoContacto = document.getElementById('info-contacto');

    btnContacto.addEventListener('click', () => {
        if (infoContacto.textContent === '') {
            infoContacto.textContent = '📧 Correo de contacto: ayalaadiegoo110@gmail.com';
            btnContacto.textContent = 'Ocultar Correo';
        } else {
            infoContacto.textContent = '';
            btnContacto.textContent = 'Mostrar Correo';
        }
    });
});