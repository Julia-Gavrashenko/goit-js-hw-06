const inputEl = document.querySelector(`#validation-input`);

const symbols = inputEl.getAttribute(`data-length`);

inputEl.addEventListener(`blur`, onInputBlur);

function onInputBlur() {
  if (inputEl.value.length === Number(symbols)) {
    inputEl.classList.add(`valid`);
  } else {
    inputEl.classList.remove(`valid`);
    inputEl.classList.add(`invalid`);
  }
}


