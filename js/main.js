document.addEventListener('DOMContentLoaded', () => {
  
    const themeSelect = document.getElementById('theme-select');
    const savedTheme = localStorage.getItem('theme') || 'light';

  
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    if (themeSelect) {
        themeSelect.value = savedTheme;

        themeSelect.addEventListener('change', (e) => {
            const selectedTheme = e.target.value;
            document.documentElement.setAttribute('data-theme', selectedTheme);
            localStorage.setItem('theme', selectedTheme);
        });
    }

    
    const btnContacto = document.getElementById('btn-contacto');
    const infoContacto = document.getElementById('info-contacto');

    if (btnContacto && infoContacto) {
        btnContacto.addEventListener('click', () => {
            infoContacto.textContent = '✉️ ayalaadiegoo110@gmail.com';
            infoContacto.style.display = 'block';
            btnContacto.style.display = 'none';
        });
    }
});