let clicks = 0;
let hot = document.querySelector('.hot-button');
let count = document.querySelector('.click-count');

function handleClick(event) {
  clicks++;
  count = document.querySelector('.click-count').textContent;
  hot = document.querySelector('.hot-button');
  if (hot > 0 && hot < 4) {
    hot.className = 'cold';
  } else if (hot < 7 && hot > 4) {
    hot.className = 'cool';
  } else if (hot < 10 && hot > 7) {
    return 'tepid';
  } else if (hot < 13 && hot > 10) {
    return 'warm';
  } else if (hot < 16 && hot > 13) {
    return 'hot';
  } else if (hot > 16) {
    return 'nuclear';
  }
  console.log(hot);
}
hot.addEventListener('click', handleClick);
console.log(clicks, count);
