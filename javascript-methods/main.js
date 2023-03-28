const num1 = 13;
const num2 = 12;
const num3 = 11;
const maximumValue = Math.max(num1, num2, num3);
console.log('Max value:', maximumValue);

const heroes = ['Spiderman', 'Invincible', 'Buttercup', 'Deadpool'];
const randomNumber = Math.random() * heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('Random index:', randomIndex);

const randomHero = heroes[randomIndex];
console.log('Random hero:', randomHero);

const library = [{ title: 'MC Guide', author: 'Mojang' }, { title: 'New MC Guide', author: 'Microsoft' }, { title: 'Ender Farms', author: 'YTbers' }];
const lastBook = library.pop();
console.log('Last book:', lastBook);

const firstBook = library.shift();
console.log('First book:', firstBook);

const js = {
  title: 'Javascript & JQuery',
  author: 'Duckett'
};
const css = {
  title: 'HTML & CSS',
  author: 'Duckett'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Library:', library);

const fullName = 'Anna Aksenov';
const firstAndLastName = fullName.split(' ');
console.log('First & last name:', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('Say my name:', sayMyName);
