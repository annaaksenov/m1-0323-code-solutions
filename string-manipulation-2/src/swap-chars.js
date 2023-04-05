/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  const a = [];
  let s = '';
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      a.push(string[secondIndex]);
    } else if (i === secondIndex) {
      a.push(string[firstIndex]);
    } else {
      console.log(a);
      a.push(string[i]);
    }
  } for (let i = 0; i < a.length; i++) {
    s += a[i];
  }
  return s;
}

/** attempt 1:
 * let str = '';
  for (let i = 0; i <= string.length; i++) {
    if (string[i] === firstIndex) {
      str += string[i].replace(secondIndex, firstIndex);
    } else if (string[i] === secondIndex) {
      str += string[i].replace(firstIndex, secondIndex);
    }
  }
  console.log(str);
  return str; */

/** attempt 2:
 * let str = '';
  for (let i = 0; i <= string.length; i++) {
    if (i === firstIndex) {
      str += string[firstIndex];
      str.replace(firstIndex, secondIndex);
    } else if (i === secondIndex) {
      str += string[secondIndex];
      str.replace(secondIndex, firstIndex);
    }
  }
  console.log(str);
  return str; */

/**
  *
*/
