/* exported firstChars */
function firstChars(length, string) {
  let str = '';
  for (let i = 0; i < string.length; i++) {
    if (i < length) {
      str += string[i];
    }
  }
  return str;
}
