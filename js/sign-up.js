const signUpForm = document.getElementById('sign-up-form');
const userName = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

function inputChecks(inputArray) {
    inputArray.forEach((input) => {
        if(input.value.trim() === '') {
            showError(input, `${input.name} is required*`);
        } else {
            showSuccess(input);
        }
    });
}

function checkInputLength(input, min) {
    if(input.value.length < min) {
        showError(input, `${input.name} must be at least ${min} characters`);
    }
}

function passwordMatch(password1, password2) {
    if(password1.value !== password2.value) {
        showError(password2, 'Passwords do not match');
    }
}

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.textContent = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

signUpForm.addEventListener('submit', function(e) {
    e.preventDefault();

    inputChecks([userName, email, password, confirmPassword]);
    checkInputLength(userName, 5);
    checkInputLength(password, 8);
    passwordMatch(password, confirmPassword);
});