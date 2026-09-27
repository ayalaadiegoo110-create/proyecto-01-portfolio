document.addEventListener('DOMContentLoaded', () => {
    // 1. Selector de Modo (Claro / Oscuro)
    const themeSelect = document.getElementById('theme-select');
    const currentTheme = localStorage.getItem('theme') || 'light';

    // Aplicar tema inicial guardado
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (themeSelect) {
        themeSelect.value = currentTheme;

        themeSelect.addEventListener('change', (e) => {
            const selectedTheme = e.target.value;
            document.documentElement.setAttribute('data-theme', selectedTheme);
            localStorage.setItem('theme', selectedTheme);
        });
    }

    // 2. Formulario de Contacto
    const contactForm = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (formResponse) {
                formResponse.textContent = '¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.';
                formResponse.style.display = 'block';
            }

            contactForm.reset();

            setTimeout(() => {
                if (formResponse) formResponse.style.display = 'none';
            }, 5000);
        });
    }
});