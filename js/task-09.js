const btn = document.querySelector(".change-color");
const textColor = document.querySelector(".color");
const bodyColor = document.querySelector('body');

btn.addEventListener("click", (event) => { 
  const color = getRandomHexColor();
  textColor.textContent = color;
  bodyColor.style.backgroundColor = color;
})


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
