document.addEventListener('DOMContentLoaded', () => {
    const titulo = document.getElementById('titulo');
    const boton = document.getElementById('btn-cambiar');

    boton.addEventListener('click', () => {
        titulo.textContent = '¡Listo para crear proyectos internacionales!';
        titulo.style.color = '#28a745';
    });
});