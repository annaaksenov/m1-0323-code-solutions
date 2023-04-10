/* exported omit */
function omit(source, keys) {
  var res = {};
  for (var i in source) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(source, i)) continue;
    res[i] = source[i];
  }
  return res;
}
