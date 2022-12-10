const inputTable = document.querySelector("#validation-input");
const dataLength = Number(inputTable.getAttribute("data-length"));

function valid() {
  inputTable.classList.remove("invalid");
  inputTable.classList.add("valid");
}
function invalid() {
  inputTable.classList.remove("valid");
  inputTable.classList.add("invalid");
}

inputTable.addEventListener("blur", () => {
  if (inputTable.value.length === dataLength) {
    valid();
  } else {
    invalid();
  }
});
