// 1 ---------------------------------------------------------------
// Дано два числа a і b.
// Потрібно написати функцію, яка обчислює та повертає їхню суму

// const summ = (num1, num2) => {
//   let result = num1 + num2;
//   return result;
// };

// console.log(summ(10, 10));

// 2-----------------------------------------------------------------

// Дано число age, яке означає вік людини.
// Напишіть програму на JavaScript, яка:
//  • якщо вік 18 років або більше — виводить повідомлення «Доступ дозволено»
//  • якщо вік менше 18 років — виводить повідомлення «Доступ заборонено

// const checkAge = function (currentAge) {
//   if (currentAge >= 18) {
//     console.log('Доступ дозволено');
//   } else {
//     console.log('Доступ заборонено');
//   }
// };
// checkAge(22);

//     3----------------------------------------------------------------------
//  Оголосіть дві змінні: admin та name.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в admin.
// Виведіть значення змінної admin, використовуючи функцію alert (яка повинна показати “Іван”).

// let admin;
// let name = 'Ivan';
// admin = name;
// alert(admin);

//   4------------------------------------------------------------------------
// let name = "Ілля";

// alert( `привіт ${1}` ); // привіт 1

// alert( `привіт ${"name"}` ); //  привіт name

// alert( `привіт ${name}` ); // привіт Ілля

//  5----------------------------------------------------------------------
// Створіть вебсторінку, яка запитує ім’я та виводить його.

// let name = prompt('Введіть ваше ім я');
// alert(name);

//   6-----------------------------------------------------------------------
// let a = 1,
//   b = 1;

// let c = ++a;  1+1=2
// let d = b++;  1*1=1

// let a = 2;

// let x = 1 + (a *= 2); //5

// 7-------------------------------------------------------------------------
// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах 1, 0, -3

// let a;
// console.log(a > 0);

//  8------------------------------------------------------------------------
// Напиши функцію, яка приймає число і визначає:
// якщо число парне — вивести "Even"
// якщо число непарне — вивести "Odd"

// const c = function (num) {
//   if (num % 2 === 0) {
//     console.log('Even');
//   } else {
//     console.log('Odd');
//   }
// };

// c();
//  9----------------------------------------------------------------------
// Є масив чисел. Знайти суму всіх чисел

// const arr = [1, 2, 3, 4];

// function arraySum(nums) {
//   let sum = 0;
//   for (let i = 0; b < nums.length; i++) {
//     sum += nums[i];
//   }
//   console.log(sum);
// }
// arraySum(arr);

//  10-----------------------------------------------------------------------
// // Дано масив const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // Отримати лише парні числа, результат вивести в консоль
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function getEvenNumbers(nums) {
//   const result = [];

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 === 0) {
//       result.push(nums[i]);
//     }
//   }

//   return result;
// }

// const arr2 = getEvenNumbers(arr);
// console.log(arr2);

// 11-----------------------------------------------------------
// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах 1, 0, -3.

// let a = 1;
// if (a > 0) {
//   console.log(true);
// } else console.log(false);

// 12-------------------------------------
//  Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах 'test', "qwerty", true
// let a = 'true';
// if (a === 'test') {
//   console.log(true);
// }

// 13--------------------------------------------------------------

// Якщо змінна більше 10 - відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах 1, 10, 13.

// let a = 1;
// if (a > 10) {
//   console.log(a - 5);
// } else {
//   console.log(a + 5);
// }

// 14-----------------------------------------------------
//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// const a = Number(prompt('Введіть номер місяця (1-12)'));
// let month;

// switch (a) {
//   case 1:
//     month = 'Січень';
//     break;
//   case 2:
//     month = 'Лютий';
//     break;
//   case 3:
//     month = 'Березень';
//     break;
//   case 4:
//     month = 'Квітень';
//     break;
//   case 5:
//     month = 'Травень';
//     break;
//   case 6:
//     month = 'Червень';
//     break;
//   case 7:
//     month = 'Липень';
//     break;
//   case 8:
//     month = 'Серпень';
//     break;
//   case 9:
//     month = 'Вересень';
//     break;
//   case 10:
//     month = 'Жовтень';
//     break;
//   case 11:
//     month = 'Листопад';
//     break;
//   case 12:
//     month = 'Грудень';
//     break;
//   default:
//     alert('Помилка: введіть число від 1 до 12');
//     break;
//

// 15---------------------------------------------------
//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// let numberStr = prompt("Введіть тризначне число");

// let num1 = Number(numberStr[0]);
// let num2 = Number(numberStr[1]);
// let num3 = Number(numberStr[2]);

// let sum = num1 + num2 + num3;

// alert("Сума цифр числа " + numberStr + " дорівнює: " + sum);

//  16----------------------------------------------------
// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
// if (age > 18) {
// return true;
// } else {
// return confirm('Батьки дозволили?');
// }
// }

//return (age > 18) ? true : confirm('Батьки дозволили?');

//  17-----------------------------------------------------
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

// function min(a, b) {
//   return Math.min(a, b);
// }

// min(2, 58);

//  18------------------------Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// function ask(question, yes, no) {
// if (confirm(question)) yes();
// else no();
// }
// ask(
// "Ви згодні?"
// ,
// function() { alert("Ви погодились."); },
// function() { alert("Ви скасували виконання."); }
// )

// const ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };
// ask(
//   'Ви згодні?',
//   function () {
//     alert('Ви погодились.');
//   },
//   function () {
//     alert('Ви скасували виконання.');
//   },
// );

//  19-------------------------------------------------
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// const student = {
//   name: 'name',
//   major: 'major',
//   gpa: 0,
//   missedClassesCount: 0,

//   sayHi() {
//     alert(
//       `Student: ${this.name}, Major: ${this.major}, GPA: ${this.gpa}, Missed classes: ${this.missedClassesCount}`,
//     );
//   },
// };
// student.sayHi();

// const student1 = {
//   name: 'Anton',
//   major: 'marketing',
//   gpa: 3,
//   missedClassesCount: 0,
// };
// const student2 = {
//   name: 'Dmytro',
//   major: 'law',
//   gpa: 3.5,
//   missedClassesCount: 7,
// };

// const student3 = {
//   name: 'Yaroslav',
//   major: 'economy',
//   gpa: 5,
//   missedClassesCount: 0,
// };

// student.sayHi.call(student1);

// student.sayHi.apply(student2);

// const yaroslavHi = student.sayHi.bind(student3);
// yaroslavHi();

//------------------- freeCodeCamp
// console.log('Hi there!');
// console.log('I am excited to talk to you.');
// let bot;
// bot = 'teacherBot';

// let botLocation = 'the universe';

// console.log('Allow me to introduce myself.');

// const botIntroduction = 'My name is ' + bot + '.';
// console.log(botIntroduction);

// const botLocationSentence = 'I live in ' + botLocation + '.';
// console.log(botLocationSentence);

// bot = 'professorBot';

// const nicknameIntroduction = 'My nickname is ' + bot + '.';
// console.log(nicknameIntroduction);

// bot = 'awesomeTeacherBot';

// const newNicknameGreeting =
//   'I love my nickname but I wish people would call me ' + bot + '.';
// console.log(newNicknameGreeting);

// const favoriteSubject = 'Computer Science';

// const favoriteSubjectSentence =
//   'My favorite subject is ' + favoriteSubject + '.';
// console.log(favoriteSubjectSentence);

//------------------------------------------------------------

// console.log("Hello! I'm your coding fun fact guide!");

// const botName = 'Yaroslav';
// const botLocation = 'Dnipro';
// const favoriteLanguage = 'JavaScript';

// console.log('My name is ' + botName + ' and I live on ' + botLocation + '.');

// console.log('My favorite programming language is ' + favoriteLanguage + '.');

// let codingFact = favoriteLanguage + ' was created in just 10 days in 1995.';
// console.log(codingFact);

// codingFact = favoriteLanguage + ' was originally called Mocha.';
// console.log(codingFact);

// codingFact = 'Almost all modern websites use ' + favoriteLanguage + '.';
// console.log(codingFact);

// console.log(
//   'It was fun sharing these facts with you. Goodbye! - ' +
//     botName +
//     ' from ' +
//     botLocation +
//     '.',
// );

//------------------------------------------------------------------------------

// let adjective = 'brave';
// let noun = 'dragon';
// let verb = 'sneezing';
// let place = 'cave';
// let adjective2 = 'huge';
// let noun2 = 'tacos';

// let firstStory =
//   'Once upon a time, there was a(n) ' +
//   adjective +
//   ' ' +
//   noun +
//   ' who loved to eat ' +
//   noun2 +
//   '. The ' +
//   noun +
//   ' lived in a ' +
//   place +
//   ' and had ' +
//   adjective2 +
//   ' nostrils that blew fire when it was ' +
//   verb +
//   '.';

// console.log('First story: ' + firstStory);

// let secondStory;

// adjective = 'lazy';
// noun = 'ogre';
// verb = 'laughing';
// place = 'swamp';
// adjective2 = 'tiny';
// noun2 = 'onions';

// secondStory =
//   'Once upon a time, there was a(n) ' +
//   adjective +
//   ' ' +
//   noun +
//   ' who loved to eat ' +
//   noun2 +
//   '. The ' +
//   noun +
//   ' lived in a ' +
//   place +
//   ' and had ' +
//   adjective2 +
//   ' nostrils that blew fire when it was ' +
//   verb +
//   '.';

// console.log('Second story: ' + secondStory);

//-----------------------------------------------------------------------------------------
// console.log("Hi there!");

// const botName = "teacherBot";

// const greeting = `My name is ${botName}.`;
// console.log(greeting);

// const subject = "JavaScript";
// const topic = "strings";

// const sentence = `Today, you will learn about ${topic} in ${subject}.`;
// console.log(sentence);

// const strLengthIntro = `Here is an example of using the length property on the word ${subject}.`;
// console.log(strLengthIntro);

// console.log(subject.length);

// console.log(`Here is an example of using the length property on the word ${topic}.`);
// console.log(topic.length);

// console.log(`Here is an example of accessing the first letter in the word ${subject}.`);

// console.log(subject[0]);

// console.log(`Here is an example of accessing the second letter in the word ${subject}.`);
// console.log(subject[1]);

// console.log(`Here is an example of accessing the last letter in the word ${subject}.`);

// const lastCharacter = subject[subject.length - 1];
// console.log(lastCharacter);

// const learningIsFunSentence = "Learning is fun.";

// console.log("Here are examples of finding the positions of substrings in the sentence.");

// console.log(learningIsFunSentence.indexOf("Learning"));

// console.log(learningIsFunSentence.indexOf("fun"));
// console.log(learningIsFunSentence.indexOf("learning"));

// console.log("I hope you enjoyed learning today.")

//-------------------------------------------------------------------------------------------------------
// const fccSentence = 'freeCodeCamp is a great place to learn web development.';

// console.log('Here are some examples of the includes() method:');

// const hasFreeCodeCamp = fccSentence.includes('freeCodeCamp');
// console.log(
//   `fccSentence.includes("freeCodeCamp") returns ${hasFreeCodeCamp} because the word "freeCodeCamp" is in the sentence.`,
// );

// const hasJavaScript = fccSentence.includes('JavaScript');
// console.log(
//   `fccSentence.includes("JavaScript") returns ${hasJavaScript} because the word "JavaScript" is not in the sentence.`,
// );

// const hasLowercaseFCC = fccSentence.includes('freecodecamp');
// console.log(
//   `fccSentence.includes("freecodecamp") returns ${hasLowercaseFCC} because includes is case-sensitive.`,
// );

// const message = 'Welcome to freeCodeCamp!';

// console.log('Here are some examples of the slice() method:');

// const platform = message.slice(11, 23);
// console.log(`The word "${platform}" was sliced from the message.`);

// const greetingWord = message.slice(0, 7);
// console.log(`The first word is "${greetingWord}".`);

// const endPunctuation = message.slice(-1);
// console.log(`The ending punctuation mark is a "${endPunctuation}"`);
// console.log(
//   'Workshop complete! You now know how to use includes() and slice().',
// );

//------------------------------------------------------------------------------------------------------------------
// const userInput = '   Hello World!   ';
// console.log('Original input:');
// console.log(userInput);

// const cleanedInput = userInput.trim();
// console.log('Result of trimming whitespace from both ends:');
// console.log(cleanedInput);

// const trimmedStart = userInput.trimStart();
// console.log('After using the trimStart() method, leading spaces removed:');
// console.log(trimmedStart);

// const trimmedEnd = userInput.trimEnd();
// console.log('After using the trimEnd() method, trailing spaces removed:');
// console.log(trimmedEnd);

// const upperCaseInput = cleanedInput.toUpperCase();
// console.log('Result of using the toUpperCase() method:');
// console.log(upperCaseInput);

// const lowerCaseInput = cleanedInput.toLowerCase();
// console.log('Result of using the toLowerCase() method:');
// console.log(lowerCaseInput);

// const lowercaseWord = 'camelcase';
// const camelCasedVersion =
//   lowercaseWord.slice(0, 5) +
//   lowercaseWord[5].toUpperCase() +
//   lowercaseWord.slice(-3);
// console.log('Camel cased version:');
// console.log(camelCasedVersion);

//-------------------------------------------------------------------------------------------------------------
// const originalString = 'I love cats.';
// console.log('Original string:');
// console.log(originalString);

// const replacedString = originalString.replace('cats', 'dogs');
// console.log('After using the replace() method:');
// console.log(replacedString);

// const exampleSentence = 'I love cats and cats are so much fun!';
// console.log('Original sentence:');
// console.log(exampleSentence);

// const dogsOnlySentence = exampleSentence.replaceAll('cats', 'dogs');
// console.log('Replacing all occurrences of cats with dogs:');
// console.log(dogsOnlySentence);

// const learningSentence = 'I love learning!';
// console.log('Original learning sentence:');
// console.log(learningSentence);

// const repeatedLove = 'love '.repeat(3);
// console.log(repeatedLove);

// const newSentence = `I ${repeatedLove} learning.`;
// console.log(newSentence);
