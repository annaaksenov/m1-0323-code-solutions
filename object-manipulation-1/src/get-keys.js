/* exported getKeys */
function getKeys(object) {
  const a = [];
  for (const key in object) {
    a.push(key);
  }
  return a;
}
