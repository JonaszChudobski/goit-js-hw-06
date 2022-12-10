const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
let listOfItems = [];
ingredients.forEach((ingredient) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.toggle("item");
  listOfItems.push(listItem);
});

const list = document.querySelector("#ingredients");
listOfItems.forEach((listElement) => {
  list.append(listElement);
});
