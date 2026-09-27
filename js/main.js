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
                if (formResponse) {
                    formResponse.style.display = 'none';
                }
            }, 5000);
        });
    }
});