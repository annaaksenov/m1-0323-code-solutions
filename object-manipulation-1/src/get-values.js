/* exported getValues */
function getValues(object) {
  const a = [];
  for (const key in object) {
    a.push(object[key]);
  }
  return a;
}
