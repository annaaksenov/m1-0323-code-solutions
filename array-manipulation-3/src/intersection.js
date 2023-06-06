/* exported intersection */
function intersection(first, second) {
  const int = first.filter(x => second.includes(x));
  return int;
}
