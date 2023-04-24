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
      } else if (word === 'api') {
        return 'API';
      } else {
        // Capitalize the first letter of the word
        let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);

        // Capitalize the first letter after a hyphen or a colon
        if (capitalizedWord.includes('-')) {
          const hyphenIndex = capitalizedWord.indexOf('-');
          capitalizedWord = capitalizedWord.slice(0, hyphenIndex + 1) + capitalizedWord.charAt(hyphenIndex + 1).toUpperCase() + capitalizedWord.slice(hyphenIndex + 2);
        } else if (capitalizedWord.includes(':')) {
          const colonIndex = capitalizedWord.indexOf(':');
          capitalizedWord = capitalizedWord.slice(0, colonIndex + 1) + capitalizedWord.charAt(colonIndex + 1).toUpperCase() + capitalizedWord.slice(colonIndex + 2);
        }

        return capitalizedWord;
      }
    } else {
      // Word is an exception, don't capitalize it
      return word;
    }
  });
  console.log(capitalizedWords.join(' '));
  return capitalizedWords.join(' ');
}
