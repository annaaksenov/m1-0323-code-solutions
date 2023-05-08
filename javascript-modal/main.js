const open = document.querySelector('.om');
const modal = document.querySelector('.close');
function handleClick(event) {
  modal.className = 'open';
}
open.addEventListener('click', handleClick);

const close = document.querySelector('.no');
function deClick(event) {
  modal.className = 'close';
}
close.addEventListener('click', deClick);
