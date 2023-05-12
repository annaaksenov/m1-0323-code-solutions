const form = document.querySelector('form');

function logSubmit(event) {
  event.preventDefault();
}
form.addEventListener('submit', logSubmit);
