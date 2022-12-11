const boxesDiv = document.querySelector("#boxes");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const addedDiv = document.createElement("div");
    addedDiv.style.width = `${30 + i * 10}px`;
    addedDiv.style.height = `${30 + i * 10}px`;
    addedDiv.style.backgroundColor = getRandomHexColor();
    boxesDiv.append(addedDiv);
  }
}

function destroyBoxes() {
  while (boxesDiv.firstChild) {
    boxesDiv.removeChild(boxesDiv.lastChild);
  }
}

createButton.addEventListener("click", () => {
  const inputNumber = document.querySelector("input").value;
  createBoxes(inputNumber);
});

destroyButton.addEventListener("click", destroyBoxes);
