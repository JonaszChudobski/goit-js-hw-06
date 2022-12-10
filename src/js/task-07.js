const rangeInput = document.querySelector("#font-size-control");
const abraText = document.querySelector("#text");

function changeFont(inputValue) {
  abraText.style.fontSize = `${inputValue}px`;
}

rangeInput.addEventListener("input", () => {
  const inputValue = rangeInput.value;
  changeFont(inputValue);
});
