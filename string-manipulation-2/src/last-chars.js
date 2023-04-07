/* exported lastChars */
function lastChars(length, string) {
  let str = '';
  for (let i = string.length - length; i <= string.length; i++) {
    if (i < string.length) {
      str += string[i];
    } else if (length > string.length) {
      return 'LearningFuze';
    }
  }
  return str;
}
