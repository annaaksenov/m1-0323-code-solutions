/* exported union */
function union(first, second) {
  var uni = first.concat(second.filter((item) => first.indexOf(item) < 0));
  return uni;
}
