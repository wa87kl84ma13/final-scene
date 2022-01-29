const signUpForm = document.getElementById('sign-up-form');
const userName = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const error = document.querySelector('.error-message');

function inputChecks(inputArray) {
    inputArray.forEach(input => {
        if(input.value.trim() === '') {
            error.textContent = 'Please fill out all the fields';
        } else {
            return true;
        }
    });
}


signUpForm.addEventListener('submit', function(e) {
    e.preventDefault();

    inputChecks([userName, email, password, confirmPassword]);
});