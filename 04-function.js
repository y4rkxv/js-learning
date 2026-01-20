//practice
// const userName = 'Ann';
// const sayHi = function () {
//   let message = 'Hello, my name ';
//   console.log(message + userName);
// };

// sayHi();

// function sum(a, b) {
//   return a + b;
// }

// let result = sum(7, 8);
// // console.log(result);
// const testFunk = function (a, b) {
//   console.log('a :', a);
//   console.log('b :', b);
//   c = a + b;
//   return 100;
// };

// testFunk(5, 8);

// const a = function () {
//   c();
//   console.log('function a');
//   b();
// };
// const b = function () {
//   console.log('function b');
// };
// const c = function () {
//   console.log('function c');
// };

// a();

// const addName = function () {
//   const arg = Array.from(arguments);
//   console.log(arguments);
//   console.log(arg);
// };

// addName(1, 3, 4);

// addName(2, 3, 6, 899, 656756);

// const addName = function (...arg) {
//   console.log(arg);
// };

// addName(1, 3, 4);

// function ask(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// }

// function showOk() {
//   console.log('You say ok');
// }

// function showCancel() {
//   console.log('You say No');
// }

// ask('Yes or No', showOk, showCancel);

// const hello = function (name) {
//   console.log(`Hello ${name}`);
// };

// const searchName = function (callback) {
//   const name = 'Ivan';
//   callback(name);
// };
// searchName(hello);

// function checkAge(age) {
//   if (age > 18) {
//     return console.log('Hello');
//   }
//   return console.log('Goodbay');
// }

// checkAge(19);

// function showMovie(age) {
//   if (age < 21) {
//     return;
//   }
//   return console.log('Go to movie!');
// }

// showMovie(22);

// const test = arr => {
//   console.log(arg);
// };

// test('hello');

// const showMovie = age => {
//   if (age > 21) {
//     return console.log('Hello');
//   }
//   return console.log;
// };
// showMovie(27);

// const a = () => {
//   console.log('a');
// };

// const b = () => {
//   console.log('b');
// };

// const c = () => {
//   console.log('c');
//   a();
//   b();
// };
// c();

// const addNumber = number => {
//   let summ = Number(number) + 10;
//   return console.log(summ);
// };
// const numberRef = document.querySelector('input[name="number"]');
// const buttonRef = document.querySelector('button');
// buttonRef.addEventListener('click', () => addNumber(numberRef.value));
