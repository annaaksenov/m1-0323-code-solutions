function handleFocus(event) {
  console.log('focus fired', event.target.name);
}

function handleBlur(event) {
  console.log('blur fired', event.target.name);
}

function handleInput(event) {
  console.log(event.target.name, event.target.value);
}

const name = document.querySelector('#user-name');
name.addEventListener('focus', handleFocus);
name.addEventListener('blur', handleBlur);
name.addEventListener('input', handleInput);
const email = document.querySelector('#user-email');
email.addEventListener('focus', handleFocus);
email.addEventListener('blur', handleBlur);
email.addEventListener('input', handleInput);
const msg = document.querySelector('#user-message');
msg.addEventListener('focus', handleFocus);
msg.addEventListener('blur', handleBlur);
msg.addEventListener('input', handleInput);
