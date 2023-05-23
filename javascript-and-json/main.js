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

const arrays = JSON.stringify(arr);
console.log(arrays, typeof arrays);

const string = JSON.stringify({ id: '123', name: 'Tate West' });
console.log(string, typeof string);
const obj = JSON.parse(string);
console.log(obj.id, typeof obj.id);
console.log(obj.name, typeof obj.name);
