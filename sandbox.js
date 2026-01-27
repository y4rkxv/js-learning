// const myArray = ['1', '2', '3'];
// myArray.forEach((Element, index) => {
//   console.log(Element, index);
// });

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);

const myObject = {
  x: 10,
  y: true,
  z: 'abc',
};
// for (const key in myObject) {
//   console.log(key, myObject[key]);
// }

// Object.keys(myObject).forEach(key => {
//   console.log(key, myObject[key]);
// });
const myArray = [true, 10, 'abc', null];
for (const key in myArray) {
  console.log(myArray[key]);
}
