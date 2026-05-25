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

//------------------------------------------------------------------------------
// const hasDeveloperJob = true;

// if (hasDeveloperJob) {
//   console.log('Timmy is employed as a developer.');
// }

// const isTimmyAGamer = false;

// if (isTimmyAGamer) {
//   console.log('Timmy loves to play World of Warcraft.');
// }

// const timmyAge = 18;

// if (timmyAge >= 16) {
//   console.log('Timmy is old enough to drive.');
// } else {
//   console.log('Timmy is not old enough to drive.');
// }

//--------------------------------------------------------------------------------
// const botName = 'MathBot';
// const greeting = `Hi there! My name is ${botName} and I am here to teach you about the Math object!`;

// console.log(greeting);

// console.log(
//   'The Math.random() method returns a pseudo random number greater than or equal to 0 and less than 1.',
// );

// const randomNum = Math.random();
// console.log(randomNum);

// console.log('Now, generate a random number between two values.');

// const min = 1;
// const max = 100;

// const randomNum2 = Math.random() * (max - min) + min;
// console.log(randomNum2);

// console.log(
//   'The Math.floor() method rounds the value down to the nearest whole integer.',
// );

// const numRoundedDown = Math.floor(6.7);
// console.log(numRoundedDown);

// console.log('Now, generate a random integer between two values.');

// const randomInt = Math.floor(Math.random() * (max - min) + min);
// console.log(randomInt);

// console.log(
//   'The Math.ceil() method rounds the value up to the nearest whole integer.',
// );

// const numRoundedUp = Math.ceil(3.2);
// console.log(numRoundedUp);

// console.log(
//   'The Math.round() method rounds the value to the nearest whole integer.',
// );

// const numRounded = Math.round(2.7);
// console.log(numRounded);
// const numRounded2 = Math.round(11.2);
// console.log(numRounded2);

// console.log(
//   'The Math.max() and Math.min() methods are used to get the maximum and minimum number from a range.',
// );

// const maxNum = Math.max(3, 125, 55, 24);
// console.log(maxNum);
// const minNum = Math.min(6, 90, 14, 90, 2);
// console.log(minNum);

// console.log('It was fun learning about the different Math methods with you!');

// //------------------------------------------------------------------------------------------
// // repeatStr(3, "a")  // має повернути "aaa"
// // repeatStr(5, "hi") // має повернути "hihihihihi"

// let str = 'a';
// let repeatStr = str.repeat(3);
// console.log(repeatStr);

// let str = 'hi';
// let repeatStr = str.repeat(5);
// console.log(repeatStr);

//------------------------------------------------------------------------------------------------
// const fortune1 = "Your cat will look very cuddly today.";
// const fortune2 = "The weather will be nice tomorrow.";
// const fortune3 = "Be cautious of your new neighbors.";
// const fortune4 = "You will find a new hobby soon.";
// const fortune5 = "It would be wise to avoid the color red today.";

// const randomNumber = Math.floor(Math.random() * 5) + 1;

// let selectedFortune;

// switch(randomNumber) {
//   case 1:
//     selectedFortune = fortune1;
//     console.log(fortune1);
//     break;
//   case 2:
//     selectedFortune = fortune2;
//     console.log(fortune2);
//     break;
//   case 3:
//     selectedFortune = fortune3;
//     console.log(fortune3);
//     break;
//   case 4:
//     selectedFortune = fortune4;
//     console.log(fortune4);
//     break;
//   case 5:
//     selectedFortune = fortune5;
//     console.log(fortune5);
//     break;
// }

// console.log(selectedFortune);

//---------------------------------------------------------------------
// function calculateSum(num1, num2) {
//   return num1 + num2;
// }

// console.log(calculateSum(2, 5));
// console.log(calculateSum(10, 10));
// console.log(calculateSum(5, 5));

// function calculateDifference(num1, num2) {
//   return num1 - num2;
// }

// console.log(calculateDifference(22, 5));
// console.log(calculateDifference(12, 1));
// console.log(calculateDifference(17, 9));

// function calculateProduct(num1, num2) {
//   return num1 * num2;
// }

// console.log(calculateProduct(13, 5));

// function calculateQuotient(num1, num2) {
//   return num2 === 0 ? 'Error: Division by zero' : num1 / num2;
// }

// console.log(calculateQuotient(7, 11));
// console.log(calculateQuotient(3, 0));

// function calculateSquare(num) {
//   return num ** 2;
// }

// console.log(calculateSquare(2));
// console.log(calculateSquare(9));

// function calculateSquareRoot(num) {
//   return Math.sqrt(num);
// }

// console.log(calculateSquareRoot(25));
// console.log(calculateSquareRoot(100));

//-------------------------------------------------------
// function booWho (value){
//   if( typeof value==="boolean"){
//     return true
//   } else{
//     return false
//   }
// }

//-----------------------------------------------------------------------------------------

// let email = 'apple.pie@example.com';

// function maskEmail(email) {
//   const atIndex = email.indexOf('@');
//   const beforeAt = email.slice(0, atIndex);
//   const afterAt = email.slice(atIndex);

//   const first = beforeAt[0];
//   const last = beforeAt[beforeAt.length - 1];

//   const starsCount = beforeAt.length - 2;
//   const stars = '*'.repeat(starsCount);

//   return first + stars + last + afterAt;
// }

// console.log(maskEmail(email));

//-------------------------------------------------------------------------------
// const minIncomeForDuplex = 60000;
// const minCreditScoreForDuplex = 700;

// const minIncomeForCondo = 45000;
// const minCreditScoreForCondo = 680;

// const minIncomeForCar = 30000;
// const minCreditScoreForCar = 650;

// function getLoanMessage(annualIncome, creditScore) {
//   if (
//     creditScore >= minCreditScoreForDuplex &&
//     annualIncome >= minIncomeForDuplex
//   ) {
//     return 'You qualify for a duplex, condo, and car loan.';
//   } else if (
//     annualIncome >= minIncomeForCondo &&
//     creditScore >= minCreditScoreForCondo
//   ) {
//     return 'You qualify for a condo and car loan.';
//   } else if (
//     annualIncome >= minIncomeForCar &&
//     creditScore >= minCreditScoreForCar
//   ) {
//     return 'You qualify for a car loan.';
//   } else {
//     return "You don't qualify for any loans.";
//   }
// }

// const duplexLoanMsg = getLoanMessage(85000, 850);
// const condoLoanMsg = getLoanMessage(65000, 690);
// const carLoanMsg = getLoanMessage(45000, 660);
// const noLoanMsg = getLoanMessage(25000, 550);

// console.log(duplexLoanMsg);
// console.log(condoLoanMsg);
// console.log(carLoanMsg);
// console.log(noLoanMsg);

//------------------------------------------------------
// let count = 0;

// function cardCounter(card) {
//   if (card === 2 || card === 3 || card === 4 || card === 5 || card === 6) {
//     count++;
//   } else if (card === 7 || card === 8 || card === 9) {
//   } else if (
//     card === 10 ||
//     card === 'J' ||
//     card === 'Q' ||
//     card === 'K' ||
//     card === 'A'
//   ) {
//     count--;
//   }

//   if (count > 0) {
//     return `${count} Bet`;
//   } else {
//     return `${count} Hold`;
//   }
// }

// console.log(cardCounter(2));
// console.log(cardCounter(7));
// console.log(cardCounter(10));
// console.log(cardCounter('K'));

// ---------------------------------------------------------------------------------
// function isLeapYear(number) {
//   if (number % 400 === 0) {
//     return `${number} is a leap year.`;
//   } else if (number % 100 === 0) {
//     return `${number} is not a leap year.`;
//   } else if (number % 4 === 0) {
//     return `${number} is a leap year.`;
//   } else {
//     return `${number} is not a leap year.`;
//   }
// }

// const year = 2026;
// const result = isLeapYear(year);

// console.log(result);

//-------------------------------------------------------------------------------
// function truncateString(string, number) {
//   if (string.length > number) {
//     const short = string.slice(0, number) + '...';
//     return short;
//   } else {
//     return string;
//   }
// }

//-----------------------------------------------------------------------------------
// function confirmEnding(string1, string2) {
//   const end = string1.slice(-string2.length);
//   return end === string2;
// }

//--------------------------------------------------------------------------
// const names = [
//   'Hole-in-one!',
//   'Eagle',
//   'Birdie',
//   'Par',
//   'Bogey',
//   'Double Bogey',
//   'Go Home!',
// ];

// function golfScore(par, strokes) {
//   if (strokes === 1) {
//     return names[0];
//   } else if (strokes <= par - 2) {
//     return names[1];
//   } else if (strokes === par - 1) {
//     return names[2];
//   } else if (strokes === par) {
//     return names[3];
//   } else if (strokes === par + 1) {
//     return names[4];
//   } else if (strokes === par + 2) {
//     return names[5];
//   } else {
//     return names[6];
//   }
// }

//---------------------------------------------------

// const recipes = [];

// const recipe1 = {
//   name: 'Spaghetti Carbonara',
//   ingredients: ['spaghetti', 'Parmesan cheese', 'pancetta', 'black pepper'],
//   cookingTime: 22,
//   totalIngredients: null,
//   difficultyLevel: '',
// };

// const recipe2 = {
//   name: 'Chicken Curry',
//   ingredients: [
//     'chicken breast',
//     'coconut milk',
//     'curry powder',
//     'onion',
//     'garlic',
//   ],
//   cookingTime: 42,
//   totalIngredients: null,
//   difficultyLevel: '',
// };

// const recipe3 = {
//   name: 'Vegetable Stir Fry',
//   ingredients: ['broccoli', 'carrot', 'bell pepper'],
//   cookingTime: 15,
//   totalIngredients: null,
//   difficultyLevel: '',
// };

// recipes.push(recipe1, recipe2, recipe3);

// function getTotalIngredients(ingredients) {
//   return ingredients.length;
// }

// function getDifficultyLevel(cookingTime) {
//   if (cookingTime <= 30) {
//     return 'easy';
//   } else if (cookingTime <= 60) {
//     return 'medium';
//   } else {
//     return 'hard';
//   }
// }

// const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
// console.log(recipe1TotalIngredients);

// const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
// console.log(recipe1DifficultyLevel);

// recipe1.totalIngredients = getTotalIngredients(recipe1.ingredients);
// recipe1.difficultyLevel = getDifficultyLevel(recipe1.cookingTime);

// recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients);
// recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime);

// recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients);
// recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime);

// console.log(recipes);

//------------------------------------------------------------------------------------------------

// const question1 = {
//   category: "Science",
//   question: "What is the chemical symbol for water?",
//   choices: ["H2O", "CO2", "O2"],
//   answer: "H2O"
// };

// const question2 = {
//   category: "Geography",
//   question: "What is the capital of France?",
//   choices: ["Berlin", "Madrid", "Paris"],
//   answer: "Paris"
// };

// const question3 = {
//   category: "History",
//   question: "In what year did World War II end?",
//   choices: ["1943", "1945", "1947"],
//   answer: "1945"
// };

// const question4 = {
//   category: "Technology",
//   question: "What does 'HTML' stand for?",
//   choices: ["HyperText Markup Language", "HighText Machine Language", "HyperTool Multi Language"],
//   answer: "HyperText Markup Language"
// };

// const question5 = {
//   category: "Math",
//   question: "What is the value of Pi rounded to two decimal places?",
//   choices: ["3.12", "3.14", "3.16"],
//   answer: "3.14"
// };

// const questions = [question1, question2, question3, question4, question5];

// function getRandomQuestion(questions) {
//   const randomIndex = Math.floor(Math.random() * questions.length);
//   return questions[randomIndex];
// }

// function getRandomComputerChoice(choices) {
//   const randomIndex = Math.floor(Math.random() * choices.length);
//   return choices[randomIndex];
// }

// function getResults(question, computerChoice) {
//   if (computerChoice === question.answer) {
//     return "The computer's choice is correct!";
//   } else {
//     return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
//   }
// }

//-------------------------------------------------------------------------------------------
// function getVowelCount(sentence) {
//   const vowels = 'aeiou';
//   let count = 0;

//   for (const char of sentence.toLowerCase()) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }

// const vowelCount = getVowelCount('Apples are tasty fruits');
// console.log(`Vowel Count: ${vowelCount}`);

// function getConsonantCount(sentence) {
//   const consonants = 'bcdfghjklmnpqrstvwxyz';
//   let count = 0;

//   for (const char of sentence.toLowerCase()) {
//     if (consonants.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }

// const consonantCount = getConsonantCount('Coding is fun');
// console.log(`Consonant Count: ${consonantCount}`);

// function getPunctuationCount(sentence) {
//   const punctuations = '.,!?;:-()[]{}"\'–';
//   let count = 0;

//   for (const char of sentence) {
//     if (punctuations.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }

// const punctuationCount = getPunctuationCount('WHAT?!?!?!?!?');
// console.log(`Punctuation Count: ${punctuationCount}`);

// function getWordCount(sentence) {
//   if (sentence.trim() === '') {
//     return 0;
//   }

//   const words = sentence.trim().split(' ');
//   let count = 0;

//   for (const word of words) {
//     if (word !== '') {
//       count++;
//     }
//   }

//   return count;
// }

// const wordCount = getWordCount('I love freeCodeCamp');
// console.log(`Word Count: ${wordCount}`);

//---------------------------------------------------------------------
// const num = 7
// function factorialCalculator (num){
//   let result = 1
//   for (let i=1 ; i <= num; i++) {
// result = result*i
// }
// return result
// }

// const factorial = factorialCalculator(num)
// const resultMsg = `Factorial of ${num} is ${factorial}`
// console.log(resultMsg)

//---------------------------------------------------------------------------------------------
// function mutation(arr) {
//     for (let i = 0; i < arr[1].length; i++) {
//         if (!arr[0].toLowerCase().includes(arr[1][i].toLowerCase())) {
//             return false
//         }
//     }
//     return true  // ← поза циклом
// }

//-------------------------------------------------------------------------------
// function chunkArrayInGroups(arr, num) {
//   const result = [];
//   for (let i = 0; i < arr.length; i += num) {
//     result.push(arr.slice(i, i + num));
//   }
//   return result;
// }

//--------------------------------------------------------------------
// function lookUpProfile(name, prop) {
//   for (let i = 0; i < contacts.length; i++) {
//     if (contacts[i].firstName === name) {

//       if (contacts[i].hasOwnProperty(prop)) {

//         return contacts[i][prop];
//       } else {
//         return 'No such property';
//     }
//   }

//   return 'No such contact';
// }

//-------------------------------------------------------------------
// const squad = [];

// const firstAstronaut = {
//   id: 1,
//   name: 'Andy',
//   role: 'Commander',
//   isEVAEligible: true,
//   priority: 3,
// };

// function addCrewMember(crew, astronaut) {
//   for (let i = 0; i < crew.length; i++) {
//     if (crew[i].id === astronaut.id) {
//       console.log('Duplicate ID: ' + astronaut.id);
//       return;
//     }
//   }
//   crew.push(astronaut);
// }

// addCrewMember(squad, firstAstronaut);

// const remainingCrew = [
//   { id: 2, name: 'Bart', role: 'Pilot', isEVAEligible: false, priority: 8 },
//   {
//     id: 3,
//     name: 'Caroline',
//     role: 'Engineer',
//     isEVAEligible: true,
//     priority: 4,
//   },
//   {
//     id: 4,
//     name: 'Diego',
//     role: 'Scientist',
//     isEVAEligible: false,
//     priority: 1,
//   },
//   { id: 5, name: 'Elise', role: 'Medic', isEVAEligible: true, priority: 7 },
//   { id: 6, name: 'Felix', role: 'Navigator', isEVAEligible: true, priority: 6 },
//   {
//     id: 7,
//     name: 'Gertrude',
//     role: 'Communications',
//     isEVAEligible: false,
//     priority: 4,
//   },
//   { id: 8, name: 'Hank', role: 'Mechanic', isEVAEligible: true, priority: 2 },
//   {
//     id: 9,
//     name: 'Irene',
//     role: 'Specialist',
//     isEVAEligible: true,
//     priority: 5,
//   },
//   {
//     id: 10,
//     name: 'Joan',
//     role: 'Technician',
//     isEVAEligible: false,
//     priority: 1,
//   },
// ];

// for (let i = 0; i < remainingCrew.length; i++) {
//   addCrewMember(squad, remainingCrew[i]);
// }

// function swapCrewMembers(crew, fromIndex, toIndex) {
//   if (
//     fromIndex < 0 ||
//     toIndex < 0 ||
//     fromIndex >= crew.length ||
//     toIndex >= crew.length
//   ) {
//     console.log('Invalid crew indices');
//     return;
//   }

//   const updatedCrew = crew.slice();
//   updatedCrew[fromIndex] = updatedCrew.splice(
//     toIndex,
//     1,
//     updatedCrew[fromIndex],
//   )[0];

//   return updatedCrew;
// }

// const updatedSquad = swapCrewMembers(squad, 2, 5);

// function sortByPriorityDescending(crew) {
//   for (let i = 0; i < crew.length - 1; i++) {
//     for (let j = 0; j < crew.length - 1 - i; j++) {
//       if (crew[j].priority < crew[j + 1].priority) {
//         const temp = crew[j];
//         crew[j] = crew[j + 1];
//         crew[j + 1] = temp;
//       }
//     }
//   }
// }

// function getEVAReadyCrew(crew) {
//   const eligible = [];
//   for (const astronaut of crew) {
//     if (astronaut.isEVAEligible) eligible.push(astronaut);
//   }
//   sortByPriorityDescending(eligible);

//   return eligible;
// }

// const EVAReadySquad = getEVAReadyCrew(updatedSquad);
// function chunkCrew(crew, size) {
//   if (size < 1) {
//     console.log('Chunk size must be >= 1');
//     return;
//   }

//   const chunks = [];
//   for (let i = 0; i < crew.length; i += size) {
//     chunks.push(crew.slice(i, i + size));
//   }

//   return chunks;
// }

// const EVAChunks = chunkCrew(EVAReadySquad, 3);

// function printCrewSummary(crew) {
//   const sorted = crew.slice();
//   sortByPriorityDescending(sorted);
//   for (const astronaut of sorted) {
//     console.log(astronaut.name);
//   }
// }

// printCrewSummary(updatedSquad);

//-----------------------------------------------------------
// function fearNotLetter(str) {
//   const alp = 'abcdefghijklmnopqrstuvwxyz';
//   const start = alp.indexOf(str[0]);
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== alp[start + i]) {
//       return alp[start + i];
//     }
//   }
//   return undefined;
// }

//----------------------------------------------------------------
// const library = [
//   {
//     title: 'Your Next Five Moves: Master the Art of Business Strategy',
//     author: 'Patrick Bet-David and Greg Dinkin',
//     about: 'A book on how to plan ahead',
//     pages: 320,
//   },
//   {
//     title: 'Atomic Habits',
//     author: 'James Clear',
//     about:
//       'A practical book about discarding bad habits and building good ones',
//     pages: 320,
//   },
//   {
//     title:
//       'Choose Your Enemies Wisely: Business Planning for the Audacious Few',
//     author: 'Patrick Bet-David',
//     about:
//       "A book that emphasizes the importance of identifying and understanding one's adversaries to succeed in the business world",
//     pages: 304,
//   },
//   {
//     title: 'The Embedded Entrepreneur',
//     author: 'Arvid Kahl',
//     about: 'A book focusing on how to build an audience-driven business',
//     pages: 308,
//   },
//   {
//     title:
//       'How to Be a Coffee Bean: 111 Life-Changing Ways to Create Positive Change',
//     author: 'Jon Gordon',
//     about: 'A book about effective ways to lead a coffee bean lifestyle',
//     pages: 256,
//   },
//   {
//     title:
//       'The Creative Mindset: Mastering the Six Skills That Empower Innovation',
//     author: 'Jeff DeGraff and Staney DeGraff',
//     about: 'A book on how to develop creativity and  innovation skills',
//     pages: 168,
//   },
//   {
//     title: 'Rich Dad Poor Dad',
//     author: 'Robert Kiyosaki and Sharon Lechter',
//     about:
//       'A book about financial literacy, financial independence, and building wealth. ',
//     pages: 336,
//   },
//   {
//     title: 'Zero to Sold',
//     author: 'Arvid Kahl',
//     about: 'A book on how to bootstrap a business',
//     pages: 500,
//   },
// ];

// console.log('Books in the Library:\n');

// function getBookInformation(catalog) {
//   return catalog.map(book => `${book.title} by ${book.author}`).join('\n');
// }

// console.log(getBookInformation(library));

// console.log('\nList of book summaries:\n');

// function getBookSummaries(catalog) {
//   return catalog.map(book => book.about).join('\n');
// }

// console.log(getBookSummaries(library));

// console.log('\nList of books by Arvid Kahl:\n');

// function getBooksByAuthor(catalog, author) {
//   return catalog.filter(book => book.author === author);
// }

// console.log(getBooksByAuthor(library, 'Arvid Kahl'));

// console.log('\nList of books by James Clear:\n');
// console.log(getBooksByAuthor(library, 'James Clear'));

// console.log('\nTotal number of pages for all library books:\n');

// function getTotalPages(catalog) {
//   const sum = catalog.reduce((acc, curr) => acc + curr.pages, 0);
//   return sum;
// }

// console.log(getTotalPages(library));

//------------------------------------------------------
// const books = [
//   {
//     title: 'Кобзар',
//     authorName: 'Тарас Шевченко',
//     releaseYear: 1840,
//   },
//   {
//     title: 'Тіні забутих предків',
//     authorName: 'Михайло Коцюбинський',
//     releaseYear: 1911,
//   },
//   {
//     title: 'Місто',
//     authorName: "Валер'ян Підмогильний",
//     releaseYear: 1928,
//   },
// ];

// function sortByYear(book1, book2) {
//   if (book1.releaseYear < book2.releaseYear) {
//     return -1;
//   } else if (book1.releaseYear > book2.releaseYear) {
//     return 1;
//   } else if (book1.releaseYear === book2.releaseYear) {
//     return 0;
//   }
// }

// const filteredBooks = books.filter(book => book.releaseYear <= 1920);

// filteredBooks.sort(sortByYear);

// console.log(filteredBooks);

//---------------------------------------------------------------
// function getIndexToIns(arr, num) {
//   const sorted = arr.sort((a, b) => a - b);
//   const index = sorted.findIndex(el => el >= num);
//   return index === -1 ? sorted.length : index;
// }

//------------------------------------------------------

// function diffArray(arr1, arr2) {
//   const onlyInArr1 = arr1.filter(el => !arr2.includes(el));
//   const onlyInArr2 = arr2.filter(el => !arr1.includes(el));
//   return onlyInArr1.concat(onlyInArr2);
// }
//--------------------------------------------------------
// function destroyer(arr, ...args) {
//   return arr.filter(item => !args.includes(item));
// }

//  ------------------------------------------
// function whatIsInAName(collection, source) {
//   const sourceKeys = Object.keys(source);

//   return collection.filter(obj =>
//     sourceKeys.every(
//       key => obj.hasOwnProperty(key) && obj[key] === source[key],
//     ),
//   );
// }

// const storyContainer = document.querySelector('.story-container');

// const scaryStoryBtn = document.getElementById('scary-btn');
// const funnyStoryBtn = document.getElementById('funny-btn');
// const adventureStoryBtn = document.getElementById('adventure-btn');

// const resultParagraph = document.getElementById('result');

// const storyObj = {
//   scary: {
//     story: `In the dark woods, a group of friends stumbled upon an old, abandoned cabin. They enter the cabin and awaken something malevolent that had been dormant for centuries.`,
//     borderColor: '#ee4b2b',
//   },
//   funny: {
//     story: `During a camping trip, Mark decided to show off his culinary skills by cooking dinner over an open fire. However, his attempt caused him to burn the dinner as well as his eyebrows off.`,
//     borderColor: '#f1be32',
//   },
//   adventure: {
//     story: `Lost in the heart of the Amazon rain forest, Sarah and Jake stumbled upon an ancient temple. They braved deadly traps and encountered strange wildlife, all while deciphering cryptic clues left behind by a mysterious civilization.`,
//     borderColor: '#acd157',
//   },
// };

// function displayStory(genre) {
//   if (storyObj.hasOwnProperty(genre)) {
//     resultParagraph.textContent = storyObj[genre].story;
//     storyContainer.style.borderColor = storyObj[genre].borderColor;
//   }
// }

// scaryStoryBtn.addEventListener('click', () =>
//   console.log(displayStory('scary')),
// );
// funnyStoryBtn.addEventListener('click', () =>
//   console.log(displayStory('funny')),
// );
// adventureStoryBtn.addEventListener('click', () =>
//   console.log(displayStory('adventure')),
// );

// //-------------------------
// function updateCount(btn) {
//   const countEl = btn.querySelector(".count");
//   let currCount = +countEl.textContent.split("/")[0];

//   if (currCount === 10) return;

//   currCount++;

//   countEl.textContent = `${currCount}/10`;
// }

// const btns = document.querySelectorAll(".emoji-btn");
// btns.forEach(btn => {
// btn.addEventListener("click", () => updateCount(btn))});

//------------------------------------------------------
// const manifest = {
//   containerId: 1,
//   destination: 'Monterey, California, USA',
//   weight: 831,
//   unit: 'lb',
//   hazmat: false,
// };

// function normalizeUnits(manifest) {
//   if (manifest.unit === 'lb') {
//     return {
//       ...manifest,
//       weight: manifest.weight * 0.45,
//       unit: 'kg',
//     };
//   }
//   return { ...manifest };
// }

// function validateManifest(manifest) {
//   const errors = {};

//   if (manifest.containerId === undefined) {
//     errors.containerId = 'Missing';
//   } else if (
//     !Number.isInteger(manifest.containerId) ||
//     manifest.containerId <= 0
//   ) {
//     errors.containerId = 'Invalid';
//   }

//   if (manifest.destination === undefined) {
//     errors.destination = 'Missing';
//   } else if (
//     typeof manifest.destination !== 'string' ||
//     manifest.destination.trim() === ''
//   ) {
//     errors.destination = 'Invalid';
//   }

//   if (manifest.weight === undefined) {
//     errors.weight = 'Missing';
//   } else if (
//     typeof manifest.weight !== 'number' ||
//     Number.isNaN(manifest.weight) ||
//     manifest.weight <= 0
//   ) {
//     errors.weight = 'Invalid';
//   }

//   if (manifest.unit === undefined) {
//     errors.unit = 'Missing';
//   } else if (manifest.unit !== 'lb' && manifest.unit !== 'kg') {
//     errors.unit = 'Invalid';
//   }

//   if (manifest.hazmat === undefined) {
//     errors.hazmat = 'Missing';
//   } else if (typeof manifest.hazmat !== 'boolean') {
//     errors.hazmat = 'Invalid';
//   }

//   return errors;
// }

// function processManifest(manifest) {

//   const errors = validateManifest(manifest);

//   const isValid = Object.keys(errors).length === 0;

//   if (isValid) {

//     console.log(`Validation success: ${manifest.containerId}`);

//     const normalizedManifest = normalizeUnits(manifest);

//     console.log(`Total weight: ${normalizedManifest.weight} kg`);
//   } else {

//     console.log(`Validation error: ${manifest.containerId}`);

//     console.log(errors);
//   }
// }
//-----------------------------------------------------------------
// function sumPrimes(num) {
//   let sum = 0;

//   for (let i = 2; i <= num; i++) {
//     let isPrime = true;

//     for (let j = 2; j <= Math.sqrt(i); j++) {
//       if (i % j === 0) {
//         isPrime = false;
//         break;
//       }
//     }

//     if (isPrime) {
//       sum += i;
//     }
//   }

//   return sum;
// }

// const summ = 2000
// const month = 12
// const p = 1000

// const credit = (summ, month, p) => {
//     return summ+ p * month
// }
// console.log (credit(summ, month, p))

// class Bank {
//   static type = 'bank';
//   constructor(options) {
//     this.summ = options.summ;
//     this.month = options.month;
//     this.p = options.p;
//   }
//   credit() {
//     return console.log(this.summ + this.p * this.month);
//   }
// }

// // const userBank = new Bank({
// //   summ: 30000,
// //   month: 5,
// //   p: 500,
// // });

// // console.log(userBank.credit);

// class NewBank extends Bank {
//   constructor(options) {
//     this.card = options.card;
//   }
// }

// const aval = new NewBank({
//   summ: 30000,
//   month: 5,
//   p: 500,
//   card: true,
// });

// console.log(aval.card);

//--------------------------------------------------------
// function createNewSum(n) {
//   return function () {
//     console.log(10 * n);
//   };
// }

// const calc = createNewSum(5)
// calc()

// function createNewNuber(n) {
//   return function (num) {
//     return n + number;
//   };
// }

// function t1(){
// let a= 0;
// return function (){
//  a = a + 1
//   return a ;

// }
// }
// let b = t1();
// let c = t1();
// console.log(b);
// console.log(b());
// console.log(b());
// console.log(b());

// console.log(c());
// console.log(c());
// console.log(c());

// // console.log(one())
// // console.log(one())
// // a=6
// // console.log(one())

// const tiger = {
//   species: 'Tiger',
//   age: 5,
//   isEndangered: true,
// };

// const elephant = {
//   species: 'Elephant',
//   age: 10,
//   isEndangered: true,
// };

// const getSpecies = animal => {
//   return animal.species;
// };

// console.log(getSpecies(tiger));

// const getAge = animal => {
//   return animal.age;
// };

// console.log(getAge(tiger));

// const addHabitat = (animal, habitat) => {
//   animal.habitat = habitat;
//   return animal;
// };

// console.log(addHabitat(tiger, 'Rainforest'));

// const updateAge = (animal, newAge) => {
//   animal.age = newAge;
//   return animal;
// };

// console.log(updateAge(elephant, 12));

// const removeEndangeredStatus = animal => {
//   delete animal.isEndangered;
//   return animal;
// };

// console.log(removeEndangeredStatus(tiger));

// const hasHabitat = animal => {
//   return animal.hasOwnProperty('habitat');
// };

// console.log(hasHabitat(tiger));
// console.log(hasHabitat(elephant));

// function getProperty(animal, propertyName) {
//   return animal[propertyName];
// }

// function largestOfAll(arr){
//   const result = []
//   for (i = 0; i < arr.length; i++){
//     let largest = arr[i][0]
//     for (j = 0; j < arr[i].length; j++){
//       if(arr[i][j] > largest){
//         largest = arr[i][j]
//       }
//     }
//     result.push(largest)
//   }
// return result

// }

//-----------------------------------------------------------------------
// const favoriteIcon = document.querySelectorAll('.favorite-icon');
// favoriteIcon.forEach(button => {
//   button.addEventListener('click', function () {
//     if (button.classList.contains('filled')) {
//       button.classList.remove('filled');
//       button.innerHTML = '&#9825;';
//     } else {
//       button.classList.add('filled');
//       button.innerHTML = '&#10084;';
//     }
//   });
// });

// class CircleBox {
//   constructor(selector) {
//     this.$el = document.querySelector(selector);
//   }

//   hide() {}
//   show() {}
// }

// class CircleItem extends CircleBox {
//   constructor(options) {
//     super(options.selector);
//     this.$el.style.width = options.size + 'px';
//     this.$el.style.height = options.size + 'px';
//     this.$el.style.borderRadius = '50%';
//     this.$el.style.backgroundColor = options.color;
//   }
// }

// const CircleRed = new CircleItem({
//   selector: '#circleRed',
//   color: 'red',
//   size: 50,
// });

// class Student {
//   planet = 'Earth';
//   country = 'USA';

//   constructor(name, age) {
//     ((this.name = name), (this.age = age));
//   }

//   logAge() {
//     console.log(this.age);
//   }

//   set city(value) {
//     this._city = value;
//   }

//   get city() {
//     return this._city;
//   }
// }

// const firstStudent = new Student('Jack', 25);

// firstStudent.city = 'Memphis';
// console.log(firstStudent.city);'


// class CircleBox {
//     constructor(selector){

//         this.$el=document.querySelector(selector)
     
//     }
//      hide(){
//     this.$el.style.display = 'none'}

//     show(){ this.$el.style.display = 'block'}
// }

// class CircleItem extends CircleBox {
//     constructor(options){
//         super(options.selector)
//         this.$el.style.width = options.size + "px";
//         this.$el.style.height = options.size + "px"
//         this.$el.style.borderRadius = "50%";
//         this.$el.style.background = options.color
//     }
// }

// const CircleRed = new CircleItem({
//     selector: "#circleRed",
//     color: "red",
//     size: 50
// })

// const CircleYellow = new CircleItem({
//     selector: "#circleYellow",
//     color: "yellow",
//     size: 50
// })

// const CircleGreen = new CircleItem({
//     selector: "#circleGreen",
//     color: "green",
//     size: 50
// })

// function Car (name, color) {
//     this.name = name;
//     this.color = color
// }
// Car.prototype.message = function() {
//     console.log (`${this.name} is ${this.color} color`)
// }

// const BMW = new Car ("bmw", "red")
// const opel = new Car ("opel", "green")

// let message = {
//     messageHello(){
//         console.log(`Hello, ${this.name}`)
//     },

// messageBye(){
//     console.log(`Bye, ${this.name}`)
// },

// }

// class User{ 
//     constructor(name){
//         this.name = name
//     }

    
// }

// Object.assign(User.prototype, message)

// new User('Ivan').messageHello()

// function showPrimes(n){
//     for(let i = 2; i < n; i++){ 

//         for (let j=2; j<1; j++){
//         if( i % j == 0) continue }
//         alert(i)
//     }
// }


// let elem = document.getElementById('elem');
// elem.style.background="green"


// let elements = document.querySelectorAll('ul>li:last-child')
// for(element of elements){
//     console.log(element)
// // }


// let elements = document.querySelector('li')
//     console.log(element)


// let element = document.getElementsByTagName("div") 
//     console.log(element)

// 

// let message = document.getElementById('message');
// console.log(message.value)

// let text = document.querySelector(".text")
// console.log(text)

// text.textContent = "Hello"

// text.style.backgroundColor = "red"
// let myElement = document.querySelector("#text");

// console.log()

const item = document.createElement("a");
item.href ="#";
item.classList.add("btn")
item.textContent = "3";

const nav = document.querySelector('.nav')
nav.appendChild(item)


const header = document.createElement('h1')