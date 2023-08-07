/* exported reverseWords */
function reverseWords(string) {
  const reverse = string.split(' ').map(word => word.split('').reverse().join(''));
  return reverse.join(' ');
}
