// username autofocus 
const usernameInput = document.querySelector('input[type="text"]');
usernameInput.focus();

// toggle to show/hide username
const passwordInput = document.querySelector('input[type="password"]');
const lockIcon = document.querySelector('.bxs-lock-alt');

lockIcon.addEventListener('click', () => {
    if(passwordInput.type === 'password' ){
        passwordInput.type = 'text'
    }else {
        passwordInput.type = 'password'
    }
})
