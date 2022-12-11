function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector(`.change-color`);
const textEl = document.querySelector(`.color`);
const divEl = document.querySelector(`.widget`);
const bodyEl = divEl.parentNode;


buttonEl.addEventListener(`click`, onBtnClick);

function onBtnClick(event) {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  textEl.textContent = randomColor;
}
