const form = document.querySelector(`.login-form`);

form.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const elements = event.currentTarget.elements;
  const email = elements.email.value;
  const password = elements.password.value;

  if (email === `` || password === ``) {
    const message = alert`Enter your data`;

    return false;
  }

  const formData = {
    email,
    password,
  };

  event.currentTarget.reset();

  console.log(formData);
}
