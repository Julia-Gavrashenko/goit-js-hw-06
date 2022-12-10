const inputEl = document.querySelector(`#name-input`);
const textEl = document.querySelector(`#name-output`);

inputEl.addEventListener(`input`, onInput);

function onInput() {
  textEl.textContent = inputEl.value;

  if (inputEl.value === ``) {
    return (textEl.textContent = `Anonymous`);
  }
}
