let clicks = 0;
const hot = document.querySelector('.hot-button');
const count = document.querySelector('.click-count');

function handleClick(event) {
  clicks++;
  count.textContent = 'Clicks: ' + clicks;
  if (clicks > 0 && clicks < 4) {
    hot.className = 'hot-button cold';
  } else if (clicks < 7 && clicks > 4) {
    hot.className = 'hot-button cool';
  } else if (clicks < 10 && clicks > 7) {
    hot.className = 'hot-button tepid';
  } else if (clicks < 13 && clicks > 10) {
    hot.className = 'hot-button warm';
  } else if (clicks < 16 && clicks > 13) {
    hot.className = 'hot-button hot';
  } else if (clicks > 16) {
    hot.className = 'hot-button nuclear';
  }
}
hot.addEventListener('click', handleClick);
