const loginForm = document.querySelector('form.login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;
    
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    
    if (emailValue.length === 0 || passwordValue.length === 0) {
        alert('All fields must be filled in!');
        return;
    }

    const fields = {
        email: emailValue,
        password: passwordValue
    };
    console.log(fields);
    loginForm.reset()

});
