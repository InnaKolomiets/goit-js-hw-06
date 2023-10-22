const validationInput = document.querySelector('#validation-input');
const dataLength = Number(validationInput.dataset.length);

validationInput.addEventListener('blur', (event) => {
    const inputLength = event.target.value.trim().length;

    if (inputLength !== dataLength) {
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid');
    } else {
        validationInput.classList.remove('invalid');
        validationInput.classList.add('valid');
    }
})