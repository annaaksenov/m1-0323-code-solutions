/* exported takeRight */
function takeRight(array, count) {
  const arr = [];
  let c = 0;
  if (array.length - count > 0) {
    c = array.length - count;
  }
  for (let i = c; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr;
}

/** const c = array.length - count;
 * for (let i = c; i < array.length; i++) {
    if (i < array.length) {
      arr.push(array[i]);
    }

  } */

/** for (let i = 0; i < array.length; i++) {
    if (i >= count) {
      arr.push(array[i]);
    } else if (i > array.length) {
      arr.push(array[i]);
    }
*/
