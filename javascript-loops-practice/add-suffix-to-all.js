/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const arr = [];
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i] + suffix;
    arr.push(words[i]);
  }
  return arr;
}
