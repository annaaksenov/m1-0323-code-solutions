function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log('Convert 5 minutes to seconds:', convertMinutesToSeconds(5));

function greet(name) {
  return 'Hey, ' + name + '!';
}
const toGreet = greet('Beavis');
console.log(toGreet);

function getArea(width, height) {
  const area = width * height;
  return area;
}
const triangleArea = getArea(17, 42);
console.log('Area of the rectange:', triangleArea);

function getFirstPerson(person) {
  return person.firstName;
}
const who = getFirstPerson({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('First name:', who);

function getLastElement(array) {
  return array[array.length - 1];
}
const getEnd = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('Last element of an array:', getEnd);
