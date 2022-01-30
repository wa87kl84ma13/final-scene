const signUpForm = document.getElementById('sign-up-form');
const email = document.getElementById('email');
const password = document.getElementById('password');

function inputChecks(inputArray) {
    inputArray.forEach((input) => {
        if(input.value.trim() === '') {
            showError(input, `${input.name} is required*`);
        } else {
            showSuccess(input);
        }
    });
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

    inputChecks([email, password]);
});