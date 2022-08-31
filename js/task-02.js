const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("ul");

const elements = [];


ingredients.forEach(function (name) {
  const liString = name;

  const liEl = document.createElement("li");
  liEl.textContent = liString;
  liEl.classList.add("item");

  elements.push(liEl);
});

list.append(...elements);

