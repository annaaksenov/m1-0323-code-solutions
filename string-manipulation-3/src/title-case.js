function titleCase(title) {
  const exceptions = ['a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to', 'and'];
  const updatedTitle = [];
  let str;
  let specialCharPosition;
  let specialChar;
  if (title.includes(':')) {
    specialCharPosition = title.indexOf(':');
    specialChar = ':';
    str = title.toLowerCase().split(':');
  } else if (title.includes('-')) {
    str = title.toLowerCase().split('-');
  }
  str = title.toLowerCase().split(' ');
  for (let i = 0; i < str.length; i++) {
    updatedTitle[i] = str[i][0].toUpperCase() + str[i].slice(1).toLowerCase();
    if (str[i].includes('-')) {
      const hyphenSplit = str[i].split('-');
      const hyphenCapitalized = hyphenSplit
        .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join('-');
      updatedTitle[i] = hyphenCapitalized;
    }
    if (exceptions.includes(str[i]) && i !== 0) {
      updatedTitle[i] = str[i].toLowerCase();
    } else if (str[i] === 'api') {
      updatedTitle[i] = str[i].replace('api', 'API');
    } else if (str[i].includes('javascript')) {
      updatedTitle[i] = str[i].replace('javascript', 'JavaScript');
    }
  }
  let joinedTitle = updatedTitle.join(' ');
  if (specialChar) {
    joinedTitle =
    joinedTitle.substring(0, specialCharPosition + 2) +
    joinedTitle[specialCharPosition + 2].toUpperCase() +
    joinedTitle.substring(specialCharPosition + 3);
  }
  return joinedTitle;
}
console.log(titleCase);
