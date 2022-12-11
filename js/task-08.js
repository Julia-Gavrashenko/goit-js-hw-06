const form = document.querySelector(`.login-form`);

// console.log(form);

form.addEventListener(`submit`, onFormSubmit)
function onFormSubmit(event) {
    console.log(event.currentTarget)
}