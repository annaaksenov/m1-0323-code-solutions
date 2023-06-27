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
    console.log('colon', str);
  } else if (title.includes('-')) {
    str = title.toLowerCase().split('-');
  }
  str = title.toLowerCase().split(' ');
  console.log('wordSplit');
  console.log(str);

  for (let i = 0; i < str.length; i++) {
    updatedTitle[i] = str[i][0].toUpperCase() + str[i].slice(1).toLowerCase();

    if (exceptions.includes(str[i]) && i !== 0) {
      updatedTitle[i] = str[i].toLowerCase();
    } else if (str[i] === 'api') {
      updatedTitle[i] = 'API';
    } else if (str[i].includes('javascript')) {
      updatedTitle[i] = 'JavaScript';
    }
  }
  let joinedTitle = updatedTitle.join(' ');
  if (specialChar) {
    joinedTitle =
      joinedTitle.substring(0, specialCharPosition) +
      joinedTitle.substring(specialCharPosition);
  }
  console.log(joinedTitle);
  return joinedTitle;
}
console.log(titleCase);
