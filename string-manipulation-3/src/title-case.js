/* exported titleCase */
function titleCase(title) {
  const str = title.toLowerCase().split(' ');
  const exceptions = ['a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to', 'and'];
  const updatedTitle = str.map(str => {
    const capitalize = str.charAt(0).toUpperCase() + str.slice(1);
    if (str === 'javascript') {
      return 'JavaScript';
    } else if (str === 'api') {
      return 'API';
    } else {
      return capitalize;
    }
  });
  console.log(exceptions);
  console.log(updatedTitle.join(' '));
  return updatedTitle.join(' ');
}
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
        return 'JavaScript';
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
