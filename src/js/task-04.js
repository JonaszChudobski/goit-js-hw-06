let counterValue = 0;

const counterText = document.querySelector("#value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const decrementation = () => {
  counterValue -= 1;
  counterText.innerHTML = counterValue;
};
const incrementation = () => {
  counterValue += 1;
  counterText.innerHTML = counterValue;
};

decrementBtn.addEventListener("click", decrementation);
incrementBtn.addEventListener("click", incrementation);
