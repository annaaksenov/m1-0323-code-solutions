/* exported titleCase */
function titleCase(string) {
  const title = [];
  const subtitle = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ':') {
      title.push(string[i]);
    } else {
      subtitle.push();
    }
  }
}

/**
 * function titleCase(string) {
  return string.toLowerCase().split(' ').map(function (word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}
*/
