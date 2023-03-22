const colors = [
  'red',
  'white',
  'blue'
];
console.log('Value of colors[0]:', colors[0]);
console.log('Value of colors[1]:', colors[1]);
console.log('Value of colors[2]:', colors[2]);
console.log('America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2]);
colors[2] = 'green';
console.log('Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2]);
console.log(colors);

const students = [
  'Blossom',
  'Bubbles',
  'Buttercup'
];
const numberOfStudents = students.length;
console.log('There are ' + numberOfStudents + ' students in the class.');
const lastIndex = students[students.length - 1];
console.log('The last student in the array is ' + lastIndex + '.');
console.log(students);
