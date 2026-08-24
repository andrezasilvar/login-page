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

// loading button
const loginBtn = document.querySelector('.btn')
const loginForm = document.querySelector('form')

loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    loginBtn.textContent = 'Loading...'
    setTimeout(() => {
        loginBtn.textContent = 'Login'
    }, 2000)
})