/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  const a = [];
  let s = '';
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      a.push(string[secondIndex]);
    } else if (i === secondIndex) {
      a.push(string[firstIndex]);
    } else {
      a.push(string[i]);
    }
  } for (let i = 0; i < a.length; i++) {
    s += a[i];
  }
  return s;
}
