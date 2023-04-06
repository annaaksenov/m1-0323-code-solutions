/* exported drop */
function drop(array, count) {
  const ar = [];
  for (let i = count; i < array.length; i++) {
    ar.push(array[i]);
  }
  return ar;
}
