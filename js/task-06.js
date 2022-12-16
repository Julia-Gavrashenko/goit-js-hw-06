const inputEl = document.querySelector(`#validation-input`);



inputEl.addEventListener(`blur`, onInputBlur);

function onInputBlur() {
  const symbols = inputEl.getAttribute(`data-length`);
  
  if (inputEl.value.length === Number(symbols)) {
    inputEl.classList.remove(`invalid`);
    inputEl.classList.add(`valid`);
  } else {
    inputEl.classList.remove(`valid`);
    inputEl.classList.add(`invalid`);
  }
}


