/* exported toObject */
function toObject(keyValuePair) {
  const obj = {};
  obj[keyValuePair[0]] = keyValuePair[1];
  return obj;
}

/** PSEUDOCODE:
 * Define a function named `toObject` that accepts one argument `keyValuePair`.
 *  Assign an empty object to a variable named `obj`.
 *  Assign the second string index to the argument `keyValuePair` that will be
 *  passed in.
 *  Assign that to the the first string index that will be the object of `obj`.
 * Return the object and it's value.
 */
