const student = {
  firstName: 'Anna',
  lastName: 'Aksenov',
  age: 22
};
const fullName = student.firstName + ' ' + student.lastName;
console.log('Full name:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'receptionist';

console.log('Lives in Irvine:', student.livesInIrvine);
console.log('Precious occupation:', student.previousOccupation);

const vehicle = {
  make: 'Hyundai',
  model: 'Tuscon',
  year: 2019
};
vehicle['color'] = 'black';
vehicle['isConvertable'] = false;
console.log('Color of vehicle:', vehicle['color']);
console.log('Is convertable:', vehicle['isConvertable']);

const pet = {
  name: 'Popcorn',
  type: 'rabbit'
};
delete pet.name;
delete pet.type;
console.log('Value of pet:', pet);
