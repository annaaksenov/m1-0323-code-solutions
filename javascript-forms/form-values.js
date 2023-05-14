const form = document.querySelector('form');

function logSubmit(event) {
  event.preventDefault();

  const myObj = {
    $email: form.elements.email.value,
    $msg: form.elements.message.value,
    $name: form.elements.name.value
  };
  console.log(myObj);
}
form.addEventListener('submit', logSubmit);
