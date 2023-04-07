/* exported take */
function take(array, count) {
  const ar = [];
  for (let i = 0; i < array.length; i++) {
    if (i < count) {
      ar.push(array[i]);
    }
  }
  console.log(ar);
  return ar;
}

/** PSEUDOCODE:
 * Define a function named `take` that accepts two arguments, `array` and `count`.
 *  Declare a variable named `ar` and assign it an empty array.
 *  Begin a loop that iterates through the `array` array, where for each index in
 *  the array:
 *  Check if the index meets the `count` value.
 *  Push the indexes to `ar` array.
 * Return the array of the `ar` variable.
 */
