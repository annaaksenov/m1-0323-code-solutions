const form = document.querySelector('form');

function logSubmit(event) {
  event.preventDefault();
  const myFormData = new FormData(event.target);
  const formDataObj = {};
  myFormData.forEach((value, key) => (formDataObj[key] = value));
  console.log(formDataObj);
}
form.addEventListener('submit', logSubmit);
