let currentIndex = 0;
const allSpans = document.querySelectorAll('span');
const currentSpan = allSpans[currentIndex];

function handleKey(event) {
  if (event.key === currentSpan.textContent) {
    currentSpan.className = 'correct'; // 0
    currentIndex++;
    // reset underlined character to the next character
  } else {
    currentSpan.className = 'wrong';
  }

  console.log(event);
}
document.addEventListener('keydown', handleKey);
console.log(allSpans);
