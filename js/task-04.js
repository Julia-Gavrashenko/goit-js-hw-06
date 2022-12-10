const counterEl = document.querySelector(`#counter`);
const valueEl = document.querySelector(`#value`);
const decrBtn = counterEl.firstElementChild;
const incrBtn = counterEl.lastElementChild;

let counterValue = 0;

decrBtn.addEventListener(`click`, onDecrBtnClick);
incrBtn.addEventListener(`click`, onIncrBtnClick);

function onDecrBtnClick(event) {
  counterValue -= 1;
  valueEl.textContent = counterValue;
  console.log(value);
}

function onIncrBtnClick(event) {
  counterValue += 1;
  valueEl.textContent = counterValue;
  console.log(value);
}
