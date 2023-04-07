/* exported zip */
function zip(first, second) {
  const t = first.map(function (e, i) {
    return [e, second[i]];
  });
  console.log(t);
  return t;
}
