/* exported titleCase */
function titleCase(string) {
  const exceptions = ['a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to', 'and'];

  const words = string.toLowerCase().split(/\s+/);

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
}
