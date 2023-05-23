const arr = [
  {
    isbn: '1',
    title: 'CSS',
    author: 'Dr. Peter'
  },
  {
    isbn: '2',
    title: 'HTML',
    author: 'Phoebe Van'
  },
  {
    isbn: '3',
    title: 'JavaScript',
    author: 'Marcus Lee'
  }
];
console.log(arr[0], arr[1], arr[2]);
console.log(typeof arr);
const arr1 = JSON.stringify(arr[0]);
const arr2 = JSON.stringify(arr[1]);
const arr3 = JSON.stringify(arr[2]);
console.log(arr1, typeof arr1);
console.log(arr2, typeof arr2);
console.log(arr3, typeof arr3);

const string = JSON.stringify({ id: '123', name: 'Tate West' });
console.log(string, typeof string);
const obj = JSON.parse(string);
console.log(obj.id, typeof obj.id);
console.log(obj.name, typeof obj.name);
