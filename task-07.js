const rangeInput = document.querySelector("#font-size-control");
const textUnderInput = document.querySelector("#text");
rangeInput.addEventListener('input', (event) => {
    textUnderInput.style.fontSize = rangeInput.value + 'px';
});