/* exported pick */
function pick(source, keys) {
  const result = {};
  for (const key in source) {
    if (source[key] !== undefined && keys.includes(key)) {
      result[key] = source[key];
    }
  }
  return result;
}
