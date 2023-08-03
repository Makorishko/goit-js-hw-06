const textInput = document.querySelector('#validation-input');
const maxValue = textInput.dataset.length;


textInput.addEventListener('blur', (event) => {
    let inputLength = Number(maxValue);
    if (event.currentTarget.value.length === inputLength) {
        textInput.className = "valid";
    } else {
        textInput.className = "invalid";
    }
});