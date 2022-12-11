const inputEl = document.querySelector(`#validation-input`)

console.log(inputEl);
console.log(inputEl.placeholder);

inputEl.addEventListener(`blur`, onInputBlur);


function onInputBlur() {
    
    if (inputEl.data-length === 6) {
       return inputEl.classList.add(`#validation-input.valid`) 
    }
    


}
