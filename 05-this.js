//practice

// function createNewSum(n) {
//   return function () {
//     console.log(10 * n);
//   };
// }
// createNewSum();

// const calc = createNewSum(5);
// calc();

// function createNewNumber(n) {
//   return function (num) {
//     return n + num;
//   };
// }

// const addFive = createNewNumber(5);
// console.log(addFive(10));

// function createUrl(domain) {
//   return function (url) {
//     return `httsp://${url}.${domain}`;
//   };
// }
// const comUrl = createUrl('com');
// console.log(comUrl('google'));

// function hello() {
//   console.log(hello, this);
// }
// hello();
// const user = {
//   name: 'Yarik',
//   city: 'Dnipro',
//   sayHello: hello,
// };
// user.sayHello();

// function abc() {
//   console.log(this);
// }

// abc();
// document.querySelector('p').onclick = abc;

// function changeColor() {
//   console.log(this);
//   this.style.background = 'green';
// }

// // document.querySelector('div').onclick = changeColor;

// function changeColor() {
//   this.style.background = 'green';
// }
// let user = document.querySelectorAll('div');

// user.forEach(function (element) {
//   element.onclick = changeColor;
// });

// const showList = () => {
//   console.log(this);
// };
// showList();

// const list = {
//   names: ['Yarik', 'Sasha', 'Dima'],
//   showList: showLis,
// };

// list.showList();

// function hello() {
//   console.log(this);
// }

// const user = {
//   name: 'Dima',
//   age: 20,
//   hello: hello,
//   sayHelloWindow: hello.bind(window),
//   info: function () {
//     console.log(`Name is ${this.name}`);
//     console.log(`Age is ${this.age}`);
//   },
// };
// const Ann = {
//   name: 'Sasha',
//   age: 23,
// };

// const Nata = {
//   name: 'Nata',
//   age: 19,
// };

// user.info.bind(Ann)();
// user.info.bind(Nata)();

// const userInfo = {
//   name: 'name',
//   age: 98,
//   logInfo: function (job) {
//     console.group(`${name} info:`);
//     console.log(`Name is : ${this.name}`);
//     console.log(`Age is : ${this.age}`);
//     console.log(`Job is : ${job}`);
//     console.groupEnd();
//   },
// };

// const Vano = {
//   name: 'Ivan',
//   age: 45,
// // };
// userInfo.logInfo.call(Vano, 'developer');

// const showUserInfo = {
//   name: name,
//   age: 87,
//   logInfo: function (job, city) {
//     console.group(`${name} info:`);
//     console.log(`Name is : ${this.name}`);
//     console.log(`Age is : ${this.age}`);
//     console.log(`Job is : ${job}`);
//     console.log(`City is : ${city}`);
//     console.groupEnd();
//   },
// };

// const Vano = {
//   name: 'Ivan',
//   age: 45,
// };

// userInfo.logInfo.call(Vano, 'developer', 'Lvlv');

const message = function (name, stars) {
  console.log(`${name}, Welcome to ${this.hotel}, stars ${stars}`);
};

const Bukovel = { hotel: 'Bukovel' };
const Tourist = { hotel: 'Tourist' };

message.call(Bukovel, 'Ivan', '5');
message.call(Tourist, 'Max', '3');
