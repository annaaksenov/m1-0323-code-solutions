/* exported compact */
function compact(array) {
  const ar = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      ar.push(array[i]);
    }
  }
  return ar;
}
