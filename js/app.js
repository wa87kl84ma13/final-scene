const loginBtn = document.getElementById('login-btn');
const loginModal = document.getElementById('login-modal');
const closeModal = document.getElementById('close-modal');
const signInForm = document.getElementById('sign-in-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');
const questions = document.querySelectorAll('.question');

loginBtn.addEventListener('click', function() {
    loginModal.style.display = "block";
});

closeModal.addEventListener('click', function() {
    loginModal.style.display = "none";
});

signInForm.addEventListener('submit', function(e) {
    if(emailInput.value === "" || passwordInput.value === "") {
        errorMessage.innerHTML = 'Please fill out of the fields.';
        emailInput.style.border = "1px solid #c70039";
        passwordInput.style.border = "1px solid #c70039";
    } else {
        return true;
    }

    e.preventDefault();
});

document.addEventListener('click', (e) => {
    if(e.target === loginModal) {
        loginModal.style.display = 'none';
    }
});

questions.forEach((question) => {
    question.addEventListener('click', function() {
        this.classList.toggle('show-answer');
        this.getElementsByClassName('question-plus')[0].classList.toggle('rotate-question-plus');

        let answer = this.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});

// Sign up form page