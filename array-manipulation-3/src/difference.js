/* exported difference */
function difference(first, second) {
  const diff = first.filter(x => !second.includes(x)).concat(second.filter(x => !first.includes(x)));
  return diff;
}
