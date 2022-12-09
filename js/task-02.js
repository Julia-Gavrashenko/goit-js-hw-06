const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const elements = ingredients.map((element) => {
  const itemEl = document.createElement(`li`);
  itemEl.classList.add(`item`);
  itemEl.textContent = element;

  return itemEl;
});

console.log(elements);

const mainEl = document.querySelector(`#ingredients`);
mainEl.append(...elements);
