/* exported getWords */
function getWords(string) {
  if (string !== '') {
    const strArr = string.split(' ');
    return strArr;
  } else {
    return ([]);
  }
}
