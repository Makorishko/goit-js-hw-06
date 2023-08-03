const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');

const counter = document.querySelector('#value');

decrement.addEventListener('click', changeCounter);
increment.addEventListener('click', changeCounter);

function changeCounter(event) { 
    let counterValue = Number(counter.textContent);
    const type = event.target.dataset.action;

    if (type === "decrement") {
        counterValue -= 1;
        
    } else if (type === "increment") {
        counterValue += 1;
        
    }
    counter.textContent = counterValue;
}
