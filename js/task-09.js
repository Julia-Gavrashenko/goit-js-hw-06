function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector(`.change-color`);
const textEl = document.querySelector(`.color`);
const divEl = document.querySelector(`.widget`);
const bodyEl = divEl.parentNode;

console.log(textEl.textContent);

buttonEl.addEventListener(`click`, onBtnClick);

function onBtnClick(event) {
  console.log(event.currentTarget);
  bodyEl.style.backgroundColor = getRandomHexColor();
  textEl.textContent = getRandomHexColor();
}
