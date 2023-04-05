const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const elements = ingredients.map(value=>{
  const createli = document.createElement('li');
  createli.textContent = value;
  createli.classList ="item";
  return createli;
});
const list = document.querySelector("ul#ingredients");
list.append(...elements);  