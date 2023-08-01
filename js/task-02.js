const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listIngredients = ingredients.map(item => {
  const li = document.createElement("li");
  li.textContent = item;
  li.className = 'item';
  return li;
});
console.log(listIngredients);
const list = document.querySelector("ul#ingredients");
list.append(...listIngredients);
console.log(list); 

