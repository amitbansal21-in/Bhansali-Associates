/**
 * Forms Module
 * Client-side validation, honeypot, and state management.
 */

export const initForms = () => {
    const forms = document.querySelectorAll('.validate-form');

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Honeypot Check (spam protection)
            const honeypot = form.querySelector('input[name="website_url_hp"]');
            if (honeypot && honeypot.value !== '') {
                console.warn('Silent rejection: Spam detected.');
                return;
            }

            if (validateForm(form)) {
                submitForm(form);
            }
        });
    });
};

const validateForm = (form) => {
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');

    requiredFields.forEach(field => {
        if (!field.value.trim() || (field.type === 'email' && !validateEmail(field.value))) {
            isValid = false;
            showError(field);
        } else {
            removeError(field);
        }
    });

    return isValid;
};

const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

const showError = (field) => {
    field.classList.add('is-invalid');
    // Future architectural extension: hook an ARIA error msg id here
};

const removeError = (field) => {
    field.classList.remove('is-invalid');
};

const submitForm = (form) => {
    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
        btn.disabled = true;
        btn.classList.add('is-loading');
    }
    
    // Future AJAX implementation placeholder
    console.log('Form passed client syntax validation. Ready for AJAX dispatch.');
};
