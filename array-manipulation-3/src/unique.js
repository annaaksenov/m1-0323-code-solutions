/* exported unique */
function unique(array) {
  const uniq = [...new Set(array)];
  return uniq;
}
