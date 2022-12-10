const counterEl = document.querySelector(`#counter`);
const valueEl = document.querySelector(`#value`);
const decrBtn = counterEl.firstElementChild;
const incrBtn = counterEl.lastElementChild;

let value = 0;

decrBtn.addEventListener(`click`, onDecrBtnClick);
incrBtn.addEventListener(`click`, onIncrBtnClick);

function onDecrBtnClick(event) {
  value -= 1;
  valueEl.textContent = value;
  console.log(value);
}

function onIncrBtnClick(event) {
  value += 1;
  valueEl.textContent = value;
  console.log(value);
}
