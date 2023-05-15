/* exported titleCase */
function titleCase(title) {
  const exceptions = ['a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to', 'and'];
  const word = title.split(' ');
  const updatedTitle = [];

  for (const st in word) {
    updatedTitle[st] = word[st][0].toUpperCase() + word[st].slice(1).toLowerCase();
    if (word.includes('-')) {
      updatedTitle[st] = word[st].indexOf('-' + 1).toUpperCase() + word[st].slice(2).toLowerCase();
      console.log(updatedTitle.join(' '));
    }
  }
  console.log(exceptions);
  return updatedTitle.join(' ');
}
/**
 *  const words = title.split(' ');

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

/**
 * const exceptions = ['a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to', 'and'];
  const words = title.toLowerCase().split(/\s|-|:/);
 *   const words = string.toLowerCase().split(/\s+/);

  const capitalizedWords = words.map((word, index) => {
    if (index === 0 || !exceptions.includes(word)) {
      if (word.length > 2 && word === word.toUpperCase()) {
        // Word is an acronym, capitalize it entirely
        return word.toUpperCase();
      } else if (word === 'javascript') {
        // Word is "javascript", capitalize it as "JavaScript"
        return 'JavaScript';
      } else {
        // Capitalize the first letter of the word
        let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);

        // Capitalize the letter following a hyphen or colon
        capitalizedWord = capitalizedWord.replace(/(-|:)\s*([a-z])/g, (match, p1, p2) => p1 + ' ' + p2.toUpperCase());

        return capitalizedWord;
      }
    } else {
      // Word is an exception, don't capitalize it
      return word;
    }
  });

  return capitalizedWords.join(' ');
 */
