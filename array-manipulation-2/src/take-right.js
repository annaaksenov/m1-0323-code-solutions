/* exported takeRight */
function takeRight(array, count) {
  const arr = [];
  for (let i = 0; i < array.length - count; i++) {
    if (i < array.length - count) {
      arr.push(array[i]);
    }
  }
}

/** const c = array.length - count;
 * for (let i = c; i < array.length; i++) {
    if (i < array.length) {
      arr.push(array[i]);
    }

  } */
