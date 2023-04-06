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
