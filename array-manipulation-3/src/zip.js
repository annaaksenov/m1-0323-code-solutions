/* exported zip */
function zip(first, second) {
  const z = [...Array(Math.max(second.length, first.length))].map((_, i) => [first[i], second[i]]);

  console.log(z);
  return z;
}

/**
 * const t = first.map(function (e, i) {
    return [e, second[i]];
  });
  console.log(t);
  return t;
 */

/**
   * const z = Array.from(Array(Math.max(second.length)), (_, i) => [first[i], second[i]]);
  return z;
   */
