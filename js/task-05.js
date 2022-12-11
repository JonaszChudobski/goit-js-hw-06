const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const changeContent = (event) => {
  if (event.currentTarget.value.trim() != '') {
    nameOutput.textContent = event.currentTarget.value;
  } else {
    nameOutput.textContent = "Anonymous";
  }
};

nameInput.addEventListener("input", changeContent);
