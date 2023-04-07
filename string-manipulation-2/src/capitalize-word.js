/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  } else {
    const lower2 = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower2.slice(1);
  }
}

/**
 * PSEUDOCODE:
 *Define a function, named `capitalizeWord`, that accepts one argument, `word`.
 *  Declare a if statment that would check if `word` is equivalent to different
 *  variations of 'JavaScript'.
 *  If true return the string of 'JavaScript' that is cased properly.
 *  In other cases, have a return of `word` that has it's first character
 *  capitalized and the rest lower cased.
**/
