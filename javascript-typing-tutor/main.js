let currentIndex = 0;
const allSpans = document.querySelectorAll('span');
allSpans.className = 'bb';

function handleKey(event) {
  const currentSpan = allSpans[currentIndex];
  if (event.key === currentSpan.textContent) {
    currentIndex++;
    currentSpan.className = 'correct';
    currentSpan.nextElementSibling.className = 'bb';
  } else {
    currentSpan.className = 'wrong bb';
  }
}

document.addEventListener('keydown', handleKey);
