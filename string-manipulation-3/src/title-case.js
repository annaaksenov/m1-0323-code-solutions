/* exported titleCase */
function titleCase(title) {
  const exceptions = ['a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to', 'and'];
  const updatedTitle = [];
  const str = title.toLowerCase().split(' ');
  for (let i = 0; i < str.length; i++) {
    updatedTitle[i] = str[i][0].toUpperCase() + str[i].slice(1).toLowerCase();

    if (exceptions.includes(str[i]) && i !== 0) {
      updatedTitle[i] = str[i].toLowerCase();
    } else if (str[i] === 'in-depth') {
      updatedTitle[i] = 'In-Depth';
    } else if (str[i] === 'self-taught') {
      updatedTitle[i] = 'Self-Taught';
    } else if (str[i] === 'api') {
      updatedTitle[i] = 'API';
    } else if (str[i] === 'javascript') {
      updatedTitle[i] = 'JavaScript';
    } else if (str[i].includes('javascript:')) {
      updatedTitle[i] = 'JavaScript:';
    } else if (exceptions.includes(str[i]) && i === 0) {
      updatedTitle[i] = str[i].toUpperCase();
    }
  }
  console.log(updatedTitle.join(' '));
  return updatedTitle.join(' ');
}

/** const exceptions = ['a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to', 'and'];
  const updatedTitle = [];
  let str;
  if (title.includes(':')) {
    str = title.toLowerCase().split(':');
    console.log(str);
  } else if (title.includes('-')) {
    str = title.toLowerCase().split('-');
  }
  str = title.toLowerCase().split(' ');

  for (let i = 0; i < str.length; i++) {
    updatedTitle[i] = str[i][0].toUpperCase() + str[i].slice(1).toLowerCase();

    if (exceptions.includes(str[i]) && i !== 0) {
      updatedTitle[i] = str[i].toLowerCase();
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
  return updatedTitle.join(' '); */
/**
 *const exceptions = ['a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to', 'and'];
  const updatedTitle = [];
  const str = title.toLowerCase().split(' ');
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
  return updatedTitle.join(' ');
  }
  for (let i = 0; i < str.length; i++) {
    updatedTitle[i] = str[i][0].toUpperCase() + str[i].slice(1).toLowerCase();
  }
  console.log(exceptions);
  console.log(updatedTitle.join(' '));
  return updatedTitle.join(' ');

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
