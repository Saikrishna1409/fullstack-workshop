const form = document.getElementById('registrationForm');
const submitBtn = document.getElementById('submitBtn');

const fields = {
    username: document.getElementById('username'),
    email: document.getElementById('email'),
    password: document.getElementById('password'),
    confirmPassword: document.getElementById('confirmPassword')
};

const errors = {
    username: document.getElementById('usernameError'),
    email: document.getElementById('emailError'),
    password: document.getElementById('passwordError'),
    confirmPassword: document.getElementById('confirmPasswordError')
};

const successIcons = {
    username: document.getElementById('usernameSuccess'),
    email: document.getElementById('emailSuccess'),
    password: document.getElementById('passwordSuccess'),
    confirmPassword: document.getElementById('confirmPasswordSuccess')
};

const toggles = {
    password: document.getElementById('passwordToggle'),
    confirmPassword: document.getElementById('confirmPasswordToggle')
};

let passwordVisible = {
    password: false,
    confirmPassword: false
};

// Validation functions
function validateUsername(username) {
    const regex = /^[a-zA-Z0-9]{3,15}$/;
    return regex.test(username);
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validatePassword(password) {
    const minLength = password.length >= 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return minLength && hasUpper && hasNumber && hasSpecial;
}

function validateConfirmPassword(password, confirmPassword) {
    return password === confirmPassword;
}

// UI update functions using innerHTML
function showError(fieldName, message) {
    errors[fieldName].innerHTML = message;
    successIcons[fieldName].style.display = 'none';
    fields[fieldName].style.borderColor = '#dc3545';
}

function showSuccess(fieldName) {
    errors[fieldName].innerHTML = '';
    successIcons[fieldName].style.display = 'inline';
    fields[fieldName].style.borderColor = '#28a745';
}

function clearField(fieldName) {
    errors[fieldName].innerHTML = '';
    successIcons[fieldName].style.display = 'none';
    fields[fieldName].style.borderColor = '#ddd';
}

function checkAllValid() {
    return Object.keys(fields).every(fieldName => {
        const field = fields[fieldName];
        if (!field.value.trim()) return false;
        
        switch(fieldName) {
            case 'username': return validateUsername(field.value.trim());
            case 'email': return validateEmail(field.value.trim());
            case 'password': return validatePassword(field.value);
            case 'confirmPassword': return validateConfirmPassword(fields.password.value, field.value);
        }
    });
}

function toggleSubmitButton() {
    submitBtn.disabled = !checkAllValid();
}

// Live validation on input
Object.keys(fields).forEach(fieldName => {
    fields[fieldName].addEventListener('input', () => {
        const value = fields[fieldName].value.trim();
        
        if (!value) {
            clearField(fieldName);
            toggleSubmitButton();
            return;
        }

        let isValid = false;
        let errorMsg = '';

        switch(fieldName) {
            case 'username':
                isValid = validateUsername(value);
                errorMsg = !isValid ? '3-15 chars, alphanumeric only' : '';
                break;
            case 'email':
                isValid = validateEmail(value);
                errorMsg = !isValid ? 'Enter valid email' : '';
                break;
            case 'password':
                isValid = validatePassword(value);
                errorMsg = !isValid ? '8+ chars, 1 uppercase, 1 number, 1 special' : '';
                break;
            case 'confirmPassword':
                isValid = validateConfirmPassword(fields.password.value, value);
                errorMsg = !isValid ? 'Passwords must match' : '';
                break;
        }

        if (isValid) {
            showSuccess(fieldName);
        } else {
            showError(fieldName, errorMsg);
        }
        
        toggleSubmitButton();
    });
});

// Password visibility toggle
Object.keys(toggles).forEach(fieldName => {
    toggles[fieldName].addEventListener('click', () => {
        passwordVisible[fieldName] = !passwordVisible[fieldName];
        fields[fieldName].type = passwordVisible[fieldName] ? 'text' : 'password';
        
        if (passwordVisible[fieldName]) {
            toggles[fieldName].classList.add('active');
        } else {
            toggles[fieldName].classList.remove('active');
        }
    });
});
// Form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (checkAllValid()) {
        alert('Registration successful! (Demo)');
        form.reset();
        Object.keys(fields).forEach(clearField);
        // Reset password visibility
        Object.keys(passwordVisible).forEach(key => {
            passwordVisible[key] = false;
            fields[key].type = 'password';
            toggles[key].textContent = '👁';
        });
        toggleSubmitButton();
    }
});
