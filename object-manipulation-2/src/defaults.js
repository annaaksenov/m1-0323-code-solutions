/* exported defaults */
function defaults(target, source) {
  for (var key in source) {
    if (!(key in target)) {
      target[key] = source[key];
    }
  }
}

/** PSEUDOCODE:
 *Define a function named `default` that takes two arguments `target` and `source`.
    Begin a loop to access properties in `source` object.
    Assign prop of `source` to `target` object for all prop that are not defined on
    `target`.
  This function does not return anything, but does modify `target`.
 */
