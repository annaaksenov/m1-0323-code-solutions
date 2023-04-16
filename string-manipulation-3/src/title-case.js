/* exported titleCase */
function titleCase(string) {
  const minor = ['and', 'or', 'nor', 'but', 'a', 'an', 'and', 'the', 'as', 'at', 'for', 'by', 'in', 'of', 'on', 'per', 'to'];
  const str = string.toLowerCase().split(' ');
  for (let i = 0; i < str.length; i++) {
    if (i > 0 && minor.includes(str[i])) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
  }
  console.log(str);
  return str.join(' ');
}

/**
 * return string.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
 */

/**
 * string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
 */
