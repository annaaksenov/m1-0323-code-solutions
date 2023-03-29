/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number) {
  return number < 5;
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrink(person) {
  if (person >= 21) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrive(person) {
  if (person >= 16) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  if (person) {
    return false;
  }
}

function categorizeAcidity(pH) {
  if (pH < 7) {
    return 'acid';
  } else if (pH === 7) {
    return 'neutral';
  } else if (pH <= 14 && pH > 7) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
      return 'We\'re the warner brothers!';
    case 'wakko':
      return 'We\'re the warner brothers!';
    case 'dot':
      return 'I\'m cute~';
    default:
      return 'Goodnight everybody!';
  }
}

function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'Home Alone';
    case 'comedy':
      return 'Free Guy';
    case 'horror':
      return 'IT';
    case 'drama':
      return 'The Perks of Being a Wallflower';
    case 'musical':
      return 'Bohemian Rhapsody';
    case 'sci-fi':
      return 'Avatar';
  }
}
