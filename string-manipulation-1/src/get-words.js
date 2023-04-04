/* exported getWords */
/**
 * PSEUDOCODE:
 * Define a function, named `getWords`, that accepts one argument, `string`.
 * Begin a if loop with a statement that checks if the `string` is not an empty string.
 *  Create a variable, `strArr`, and assign it a value that would string each word.
 *  Return `strArr`.
 *  If the statment is a empty string, return an empty array.
 **/

function getWords(string) {
  if (string !== '') {
    const strArr = string.split(' ');
    return strArr;
  } else {
    return ([]);
  }
}
