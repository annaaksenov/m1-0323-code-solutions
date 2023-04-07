/* exported ransomCase */
function ransomCase(string) {
  const str = string.toLowerCase();
  let word = '';
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 1) {
      word += str[i].toUpperCase();
    } else {
      word += str[i];
    }
  }
  console.log(word);
  return word;
}
