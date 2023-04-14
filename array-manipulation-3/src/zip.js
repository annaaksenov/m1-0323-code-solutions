/* exported zip */
function zip(first, second) {
  const z = [...Array(Math.min(second.length, first.length))].map((_, i) => [first[i], second[i]]);
  return z;
}
