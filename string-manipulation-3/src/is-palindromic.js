/* exported isPalindromic */
function isPalindromic(string) {
  const str = string.replace(' ', '');
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}