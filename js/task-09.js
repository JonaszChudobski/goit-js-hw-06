const htmlBody = document.body;
const changingButton = document.querySelector(".change-color");
const spanText = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function clickTheButton() {
  const randomColor = getRandomHexColor();
  htmlBody.style.backgroundColor = randomColor;
  spanText.innerHTML = randomColor;
}

changingButton.addEventListener("click", clickTheButton);
