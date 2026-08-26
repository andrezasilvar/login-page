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

// password character counter
const passwordCounter = document.querySelector('#passwordCounter')

passwordInput.addEventListener('input', () => {
    // strong password validation
    let strengthMess = ''

    if(passwordInput.value !== passwordInput.value.toLowerCase() && /[0-9]/.test(passwordInput.value)){
        strengthMess = 'Strong password ✓'
    }else{
        strengthMess = 'Missing uppercase letter and/or number'
    }

    // counter + strong validation at the same text
    passwordCounter.textContent = passwordInput.value.length + '/8 minimum characters' + ' | ' + strengthMess

    // color based on minimum character count
    if(passwordInput.value.length < 8){
        passwordCounter.style.color = '#daffd8'
    }else {
        passwordCounter.style.color = '#093025'
    }
})


