/* exported reverseWord */
function reverseWord(word) {
  let str = '';
  for (let i = word.length - 1; i >= 0; i--) {
    str = str + word[i];
  }
  return str;
}
