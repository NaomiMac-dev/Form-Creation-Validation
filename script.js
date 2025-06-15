document.addEventListener ('DOMContentLoaded' , function (){

// all my code that is wrapped in the  DOMContentLoaded event listener
const form = document.getElementById('registration-form');
const feedbackDiv = document.getElementById('form-feedback');  

// Adding submit listener & preventing  default
form.addEventListener('submit', function (event) { 
    event.preventDefault(); //Stops form from submitting

    // Input values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    let isValid = true;
    let messages = [];

    // Username Validation
    if (username.length < 3){
        isValid = false;
        messages.push('Username must be at least 3 characters');
    }

    // Email Validation
    if(!email.includes('@') || !email.includes('.')){
        isValid = false;
        messages.push ("Email mustbe valid and contain '@' and '.'."); 
        }

    // Password Validation
    if (password.length < 8) {
        isValid = false;
        messages.push ("Password must be at least 8 characters");
    }

    // Show feedback
    feedbackDiv.style.display = 'block';
    if(isValid) {
        feedbackDiv.textContent = 'Registration successful!';
        feedbackDiv.style.color = '#28a745';
    } else {
        feedbackDiv.innerHTML = messages.join ('<br>');
        feedbackDiv.style.color = '#dc3545';
    }
}); //closes the form submit listener
}); //closes the DOMContentLoaded listener
