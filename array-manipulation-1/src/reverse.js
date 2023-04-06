/* exported reverse */
function reverse(array) {
  const ar = [];
  for (let i = array.length - 1; i >= 0; i--) {
    ar.push(array[i]);
  }
  return ar;
}
