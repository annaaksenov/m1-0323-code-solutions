const width = 1;
const height = 2;
const area = width * height;
console.log(area, typeof area);

const bill = 3;
const payment = 4;
const change = payment - bill;
console.log(change, typeof change);

const quizzes = 5;
const midterm = 6;
const final = 7;
const grade = (quizzes + midterm + final) / 3;
console.log(grade, typeof grade);

const firstName = 'Anna';
const lastName = ' Aksenov';
const fullName = firstName + lastName;
console.log(fullName, typeof fullName);

const pH = 8;
const isAcidic = pH < 7;
console.log(isAcidic, typeof isAcidic);

const headCount = 9;
const isSparta = headCount === 300;
console.log(isSparta, typeof isSparta);

let motto = fullName;
motto += ' is the GOAT';
console.log(motto, typeof motto);
