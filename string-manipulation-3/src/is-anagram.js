/* exported isAnagram */
function isAnagram(firstString, secondString) {
  const first = firstString.split('').sort().join('').trim();
  const sec = secondString.split('').sort().join('').trim();
  console.log(sec);
  return first === sec;
}
