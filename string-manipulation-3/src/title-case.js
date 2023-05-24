/* exported titleCase */
function titleCase(title) {
  const str = title.toLowerCase().split();
  const exceptions = ['a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to', 'and'];
  const updatedTitle = [];
  for (let i = 0; i < str.length; i++) {
    updatedTitle[i] = str[i][0].toUpperCase() + str[i].slice(1).toLowerCase();
  }
  console.log(exceptions);
  console.log(updatedTitle.join(' '));
  return updatedTitle.join(' ');

}
/**
 * const str = title.toLowerCase().split(' ');
  for (let i = 0; i < str.length; i++) {
    updatedTitle[i] = str[i][0].toUpperCase() + str[i].slice(1).toLowerCase();

    if (exceptions.includes(str[i]) && i !== 0) {
      updatedTitle[i] = str[i].toLowerCase();
     } else if (str[i].includes(':')) {
      updatedTitle[i] = str[i].toUpperCase();
    } else if (str[i] === 'in-depth') {
      updatedTitle[i] = 'In-Depth';
    } else if (str[i] === 'self-taught') {
      updatedTitle[i] = 'Self-Taught';
    } else if (str[i] === 'api') {
      updatedTitle[i] = 'API';
    } else if (str[i] === 'javascript') {
      updatedTitle[i] = 'JavaScript';
    }
  }
  console.log(updatedTitle.join(' '));
  return updatedTitle.join(' ');
}
*/
/**
 *for (const st in word) {
    updatedTitle[st] = word[st][0].toUpperCase() + word[st].slice(1).toLowerCase();
    }
  }
  console.log(updatedTitle.join(' '));
  return updatedTitle.join(' ');

   const words = title.split(' ');

  const capitalizedWords = words.map((word, index) => {
    if (index === 0 || !exceptions.includes(word)) {
      if (word === 'api') {
        return 'API';
      } else if (word === 'javascript') {
        returnconst updatedTitle = str.map(str => {
    const capitalize = str.charAt(0).toUpperCase() + str.slice(1);
    if (str === 'javascript') {
      return 'JavaScript';
    } else if (str === 'api') {
      return 'API';
    } else {
      return capitalize;
    }
  }); 'JavaScript';
      } else {
        const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        return capitalizedWord;
      }
    } else {
      return word;
    }
  });

  return capitalizedWords.join(' ');
 */
