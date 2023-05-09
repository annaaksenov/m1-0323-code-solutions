let clicks = 0;
const lit = document.querySelector('.light');
const back = document.querySelector('.div');

function handleClick(event) {
  clicks++;
  if (clicks % 2 === 1) {
    lit.className = 'light off';
    back.className = 'div o';
  } else {
    lit.className = 'light on';
    back.className = 'div l';
  }
}
lit.addEventListener('click', handleClick);
