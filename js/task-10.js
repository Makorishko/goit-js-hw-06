const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
const box= document.querySelector("#boxes");
let size = 20;

create.addEventListener('click', (event) => { 
  const input = document.querySelector("input");
  const amount = Number(input.value);
  createBoxes(amount);
});

destroy.addEventListener('click', (event) => { 
  box.textContent = "";
  size = 20;
});

function createBoxes(amount) { 
  const elements = new Array(amount).fill().map(() => {
    const color = getRandomHexColor();
    size += 10;
    return `<div style="background-color:${color};width:${size}px;height:${size}px"></div>`;
  }).join('');

  box.insertAdjacentHTML("beforeend", elements);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
