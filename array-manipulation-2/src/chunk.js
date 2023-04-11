/* exported chunk */
function chunk(array, size) {
  const arr = [];
  for (let i = 0; i < array.length; i += size) {
    const chunk = array.slice(i, i + size);
    arr.push(chunk);
  }
  return arr;
}
