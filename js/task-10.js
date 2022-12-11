function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const mainEl = document.querySelector(`#controls`);
const createBtn = mainEl.querySelector("[data-create]");
const destroyBtn = mainEl.querySelector("[data-destroy]");
const mainBox = document.querySelector(`#boxes`);
const input = mainEl.firstElementChild;

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement(`div`);
    mainBox.appendChild(box);

    box.style.width = 30 + i * 10 + `px`;
    box.style.height = 30 + i * 10 + `px`;
    box.style.backgroundColor = getRandomHexColor();
  }
}

function destroyBoxes() {
  mainBox.innerHTML = ``;
}

createBtn.addEventListener(`click`, onCreateBtnClick);

function onCreateBtnClick(event) {
  if (input.value !== ``) {
    // destroyBoxes();
    createBoxes(input.value);
  }
}

destroyBtn.addEventListener(`click`, onDestroyBtnClick);

function onDestroyBtnClick() {
  destroyBoxes();
}
