// console.log('hi');

// let firstName = "Artem";
// console.log(firstName);

// let myFavouriteColor = 'red';
// console.log(myFavouriteColor);

// console.log(firstName, myFavouriteColor);

// let isAdult = false;
// let ifWeekend = false;
// let isStudent = true;

// let myPet = null;
// console.log(myPet);

// const title = 'Titanic'

// const getUpTime = 8;
// console.log(getUpTime);

// const weekDays = 7;
// console.log(weekDays)



// const currentYear = new Date().getFullYear();
// console.log(currentYear);

// let yearBirthay = prompt("Введіть ваш рік народження");
// const userAge = currentYear - yearBirthay;

// alert('Вам ' + userAge + ' років.');


// let userFutureAge = userAge + 10;
// alert('А через 10 років вам буде: ' + userFutureAge);

// const product1 = prompt('Введіть назву 1 продукту');
// const price1 = prompt('Введіть ціну ' + product1);
// const product2 = prompt('Введіть назву 2 продукту');
// const price2 = prompt('Введіть ціну ' + product2);

// const productAllPrice = Number(price1) + Number(price2);

// alert('Ви купили ' + product1 + ' - ' + price1 + 'грн' + '\n' +
//     'Ви купили ' + product2 + ' - ' + price2 + 'грн' + '\n' +
//     '------' + '\n' +
//     'Всього до сплати: ' + productAllPrice + 'грн'
// );
// const userName = prompt('Enter your name');
// const isUserName = prompt('Is it your name ' + userName + '?');

// if (isUserName) {
//     alert('Hi, ' + isUserName + '!');
// } else {
//     alert('Next time be careful!');
// }

// const userPresent = prompt('What do you want to get on your birthday?');
// const isUserPresent = prompt('Have you changed your mind?');

// if (isUserPresent) {
//     alert('Good, I go to find your present - ' + isUserPresent + '.');
// } else {
//     alert('Good, think more.');
// }

// let amount = 0;

// if (confirm('Is Sun a star?')) {
//     amount = amount + 1;
//     // amount++
//     // amount--
// }
// if (!confirm('Is Moon a planet?')) {
//     amount = amount + 1;
//     // amount++
//     // amount--
// }
// if (confirm('Is Milky Way a galaxy?')) {
//     amount = amount + 1;
//     // amount++
//     // amount--
// }
// alert('Your result - ' + amount + ' points!');

// if (confirm('Do you want to convert dollar to hryvna')) {
//     const dollarAmount = prompt('Enter your dollar amount');
//     const dollarRate = prompt('Enter dollar rate');
//     const dollarConvert = dollarAmount * dollarRate;
//     alert('It is - ' + dollarConvert + ' UAH');
// } else {
//     const hryvnaAmount = prompt('Enter your hryvna amount');
//     const hryvnaRate = prompt('Enter hryvna rate');
//     const hryvnaConvert = hryvnaAmount / hryvnaRate;
//     alert('It is - ' + hryvnaConvert + ' USD');
// }

// const userAge = prompt('Скільки вам років?');
// if (Number(userAge) < 13) {
//     alert('Ви ще маленький і не зможете подивитись кіно!');
// } else {
//     alert('Вам достатньо років і ви можете купляти квиток.');
// }

// const firstNumber = prompt('Введіть перше число.');
// const secondNumber = prompt('Введіть друге число.');
// if (Number(firstNumber) > Number(secondNumber)) {
//     alert('Перше число більше.');
// } else if (Number(firstNumber) === Number(secondNumber)) {
//     alert('Числа однакові.');
// } else {
//     alert('Друге число більше.');
// }

// const accessPassword = 'password123';
// const userPassword = prompt('Введіть пароль користувача.');
// if (userPassword === accessPassword) {
//     alert('Пароль підійшов!');
// } else {
//     alert('Невірний пароль!');
// }

// const number = prompt('Введіть число.');
// if (Number(number) > 0) {
//     alert('Позитивне число.');
// } else if (Number(number) === 0) {
//     alert('Нейтральне число.');
// } else {
//     alert('Негативне число.');
// }

// const number = prompt('Введіть число.');
// const remainder = number % 2;
// if (remainder === 0) {
//     console.log('Парне');
// } else {
//     console.log('Непарне');
// }

// console.log(!true);
// console.log(!false);

// const userAgeInput = prompt('Введіть свій вік.');
// const startSchoolAge = 6;
// const endSchoolAge = 17;
// const userAge = Number(userAgeInput);
// if (userAge > startSchoolAge && userAge >= endSchoolAge) {
//     alert('Ви шкільного віку.')
// } else {
//     alert('Ви не шкільного віку.')
// }

// const numberInput = prompt('Введіть число.')
// const multipleNumber1 = numberInput % 3;
// const multipleNumber2 = numberInput % 7;
// if (multipleNumber1 === numberInput && multipleNumber2 === numberInput) {
//     alert('win!');
// } else {
//     alert('lose(');
// }

// const userInput = prompt('Enter number');
// console.log(userInput);
// const userNumber = Number(userInput);
// console.log(userNumber);
// //User cancel the window
// const error1 = userInput === null;
// //User sent nothing
// const error2 = userInput === '';
// //User enter words instead of numbers
// const error3 = Number.isNaN(userNumber);
// if (error1 || error2 || error3){
//     alert('Error.\n' + userInput + ' - not a number!');
// } else {
//     alert('Thanks.');
// }

// const inputFirstNumber = prompt('Enter first number.');
// const inputSecondNumber = prompt('Enter second number.');
// const firstNumber = Number(inputFirstNumber);
// const secondNumber = Number(inputSecondNumber);
// if (firstNumber > 0 && secondNumber > 0) {
//     alert('All numbers positive.');
// } else if (firstNumber < 0 && secondNumber < 0) {
//     alert('All numbers negative.');
// } else if (firstNumber === 0 && secondNumber === 0) {
//     alert('All numbers neutral.');
// } else {
//     alert('Numbers with different signs.');
// }

// const sum = prompt('Введіть суму.');
// const minSum = 1000;
// let delivery;
// if (Number(sum) > minSum) {
//     let delivery = 0;
//     alert('Ваша сума більша за 1000 грн, тому доставка - ' + delivery + ' грн.');
// } else {
//     let delivery = 500;
//     alert('Платіть за доставку: ' + delivery + ' грн.');
// }

// let delivery1 = (Number(sum) > minSum) ? 0 : 500;

// const number = prompt('Введіть число.');
// let number1 = (Number(number) % 2 === 0) ? 'Парне.' : 'Непарне.';
// alert(number + ' - ' + number1);

// const price = 100;
// const inputUserAge = prompt('Введіть свій вік.');
// const userAge = Number(inputUserAge);
// const sale = (userAge < 18 || userAge > 65) ? 10 : 0;
// const summaCheck = price - (price * sale / 100);
// alert(summaCheck);

// const inputNumber = prompt('Введіть число, щоб знайти його модуль.');
// const number = Number(inputNumber);
// const module = (number >= 0) ? number : -number;
// alert(module);

// const userInput1 = prompt('Введіть першу довжину сторони прямокутника.');
// const userInput2 = prompt('Введіть другу довжину сторону прямокутника.');
// const rectangleWidth = (userInput1 === userInput2) ? 'Квадрат' : 'Прямокутник';
// alert(rectangleWidth);

// const message=` Введи мову, якою хочеш спілкуватися:
// 1) українська - ua
// 2) англійська - en
// 3) польска - pl
// 4) іспанська - es
// 5) французька - fr
// `;

// const lang = prompt(message);

// switch (lang) {
//     case 'ua':
//     case '1':
//     case 'українська':
//         alert('привіт');
//         break;
//     case 'en':
//     case '2':
//     case 'англійська':
//         alert('hi');
//         break;
//     case 'pl':
//     case '3':
//     case 'польська':
//         alert('cześć');
//         break;
//     case 'es':
//     case '4':
//     case 'іспанська':
//         alert('hola');
//         break;
//     case 'fr':
//     case '5':
//     case 'французька':
//         alert('bonjour');
//         break;
//     default:
//         alert('Мова не підтримується.');
//         break;
// }
// if (lang === 'ua' || lang === '1' || lang === 'українська') {
//     alert('привіт');
// } else if(lang === 'en' || lang === '2' || lang === 'англійська') {
//     alert('hi');
// } else if (lang === 'pl' || lang === '3' || lang === 'польська') {
//     alert('cześć');
// } else if (lang === 'es' || lang === '4' || lang === 'іспанська') {
//     alert('hola');
// } else if (lang === 'fr' || lang === '5' || lang === 'французька') {
//     alert('bonjour');
// } else {
//     alert('Ви нічого не ввели.');
// }

// switch (confirm('Ви хочете покинути сайт?')) {
//     case true:
//         alert('Допобачення!');
//         break;
//     case false:
//         alert('Ми раді, що ви лишаєтесь з нами!');
//         break;
// }

// confirm('Ви хочете покинути сайт?')
//     ? alert('Допобачення!')
//     : alert('Ми раді, що ви лишаєтесь з нами!');
    
// switch (confirm('Введіть число від 1 до 7.')) {
//     case '1':
//         alert('Monday');
//         break;
//     case '2':
//         alert('Tuesday');
//         break;
//     case '3':
//         alert('Wednesday');
//         break;
//     case '4':
//         alert('Thursday');
//         break;
//     case '5':
//         alert('Friday');
//         break;
//     case '6':
//         alert('Saturday');
//         break;
//     case '7':
//         alert('Sunday');
//         break;
//     default:
//         alert('Треба було вводити числа від 1 до 7!');
//         break;
// }

// switch (confirm('Введіть ще раз числа від 1 до 7.')) {
//     case '1':
//     case '2':
//     case '3':
//     case '4':
//     case '5':
//         alert('Робочі дні тижня.');
//         break;
//     case '6':
//     case '7':
//         alert('Вихіднф дні тижня.');
//         break;
//     default:
//         alert('Не має такого дня тижня!');
//         break;
// }

// const firstNumber = prompt('Введи перше число.');
// const secondNumber = prompt('Введи друге число.');

// const number1 = Number(firstNumber);
// const number2 = Number(secondNumber);

// const operator = prompt('Введи дію: +, -, *, /, % ');

// switch (operator) {
//     case '+':
//         const result1 = number1 + number2;
//         alert(number1 + ' + ' + number2 + ' = ' + result1);
//         break;
//     case '-':
//         const result2 = number1 - number2;
//         alert(number1 + ' - ' + number2 + ' = ' + result2);
//         break;
//     case '*':
//         const result3 = number1 * number2;
//         alert(number1 + ' * ' + number2 + ' = ' + result3);
//         break;
//     case '/':
//         const result4 = number1 / number2;
//         alert(number1 + ' / ' + number2 + ' = ' + result4);
//         break;
//     case '%':
//         const result5 = number1 % number2;
//         alert(number1 + ' % ' + number2 + ' = ' + result5);
//         break;
//     default:
//         alert('Такої дії не існує!');
//         break;
// }

// let amountPlate = 3;

// while (amountPlate > 0) {
//     console.log('washing plate', amountPlate);
//     amountPlate--;
// }

// let amountPlate1 = 0;
// const totalAmountPlate1 = 5

// while (amountPlate1 < totalAmountPlate1) {
//     amountPlate1++;
//     console.log('washing plate', amountPlate1);
// }

// while (true) {
//     const inputUserNumber = prompt('Введіть число 77.');
//     if (inputUserNumber === '77') {
//         alert('Дякую.');
//         break;
//     }
// }

// while (true) {
//     const userInput = prompt('Enter number multiply 7');
//     const userNumber = Number(userInput);
//     if (userInput % 7 === 0 && userInput !== '' && userInput !== null) {
//         alert('Thanks!');
//         break;
//     }
// }

// while (true) {
//     const inputNumber = prompt('Введи число 0.');
//     if (inputNumber === '0') {
//         alert('Дякую.');
//         break;
//     }
// }

// while (true) {
//     const userInput = prompt('Введіть будьщо.');
//     if (userInput === null || userInput === '') {
//         alert('Дякую.');
//         break;
//     }
// }

// const secretNumber = 8;

// while (true) {
//     const inputUserNumber = prompt('Enter secret number.');
//     const inputNumber = Number(inputUserNumber);
//     if (inputUserNumber.trim === '' || inputUserNumber === null || Number.isNaN(inputNumber)) {
//         alert("Wrong answer.");
//     } else if (inputNumber === secretNumber) {
//         alert('Correct answer!');
//         break;
//     } else if (inputNumber < secretNumber) {
//         alert('Secret number bigger.');
//     } else {
//         alert('Secret number less.');
//     }
// }

// for (let i = 0; i < 5; i++){
//     console.log(i);
// }

// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }

// for (let i = 5; i > 0; i--){
//     console.log(i);
// }

// for (let i = 10; i < 50; i++){
//     const multipleNumber = i % 7;
//     if (multipleNumber === 0) {
//         console.log(i);
//     }
// }

// const start = 5;
// const end = 10;

// let summa = 0;

// for (let i = start; i < end; i++){
//     // console.log(i);
//     summa += i;
//     // summa = summa + i;
// }
// console.log(summa);

// const start = 5;
// const end = 10;

// let summa = 1;

// for (let i = start; i < end; i++){
//     summa = summa * i;
// }
// console.log(summa);

// const start = 0;
// const end = 10;

// let summa = 0;
// let mult = 1;

// for (i = start; i <= end; i++){
//     if (i % 2 === 0) {
//         summa += i;
//     } else {
//         mult *= i;
//     }
// }
// console.log('summa - ' + summa);
// console.log('mult - ' + mult);

// const password = '12345';
// const maxTry = 3;
// for (let i = 0; i < maxTry; i++){
//     const passwordInput = prompt('Enter password to continue.');
//     if (passwordInput === password) {
//         alert('Welcome!');
//         break;
//     } else {
//         alert('You have - ' + (maxTry - i - 1) + ' attempts');
//     }
// }

// const start = 10;
// const end = 20;

// const secretNumber = 13;
// for (let i = start; i < end; i++){
//     if (i === secretNumber) {
//         continue;
//     }
//     console.log(i);
// }

// while (true) {
//     const userInput = prompt('Enter number.')
//     if (userInput === null) {
//         alert('Be attentive!');
//         continue;
//     }
//     if (userInput === secretNumber) {
//         alert('Your answer is right.');
//         break;
//     }
// }

// const number1 = 8;
// const number2 = 10;

// const result = number1 * number2;
// while (true) {
//     const inputNumber = prompt(`Скільки буде
//         ${number1} * ${number2}`);
//     if (inputNumber === null || inputNumber.trim() === '') {
//         alert('Будь уважним!');
//         continue;
//     }
//     if (inputNumber === result) {
//         alert('Добре!');
//         break;
//     }
//     alert('Спробуй ще!');
// }

// const start = 15;
// const end = 25;

// for (let i = start; i < end; i++){
//     if (i % 4 === 0 && i % 5 === 0) {
//         continue;
//     }
//     console.log(i);
// }

// const start = 1;
// const end = 10;

// let summa = 0;

// for (let i = start; i <= end; i++){
//     if (i % 2 === 0 || i % 3 === 0) {
//         continue;
//     }
//     summa += i
// }
// console.log(summa);

// const number = 8;

// for (let i = 1; i <= 10; i++){
//     console.log(`${number} * ${i} = ${number * i}`);
// }

// for (let num1 = 1; num1 <= 10; num1++){
//     console.group(num1);
//     for (let num2 = 1; num2 <= 10; num2++){
//         console.log(`${num1} * ${num2} = ${num1 * num2}`);
//     }
//     console.groupEnd();
// }

// function logHi() {
//     console.log('Hi');
// }

// logHi();
// logHi();
// logHi();
// logHi();
// logHi();
// logHi();

// function logMessage(message) {
//     console.log(message);
// }

// function logForUser(userName, word) {
//     console.log(`${word}, ${userName}!`);
// }
// logForUser('Bill', 'Hi');
// logForUser('Tom', 'Ciao');
// logForUser('Anna', 'Halo');

// // Порядок створення параметрів в функції повинен збігатися з порядком передачі аргументів в функцію

// function logSquareNumber(number) {
//     console.log(number*number);
// }
// logSquareNumber(4);
// logSquareNumber(8);

// function logNumbersDiapazon(start, end) {
//     for (let i = start; i < end; i++){
//         console.log(i);
//     }
// }

// logNumbersDiapazon(1, 5);

// /**
//  *
//  * @param {number} amount defolt value 1
//  * @param {string} draw defolt value ':)'
//  */
// function drawCat(amount = 1, draw = ':)') {
//     for (let i = 1; i <= amount; i++){
//         console.log(i, draw);
//     }
// }

// drawCat(3, ':|');
// drawCat();
// drawCat(undefined, '=^.^=');

// /**
//  *
//  * @param {number} number1
//  * @param {number} number2
//  * @returns {number}
//  */
// function addTwoNumbers(number1 = 0, number2 = 0) {
//     const summa = number1 + number2;
//     return summa;
// }

// const result = addTwoNumbers(7, 2);
// console.log(result);

// console.log(addTwoNumbers(4, 9));

// /**
//  *
//  * @param {number} side
//  * @returns {number}
//  */
// function getAreaSquare(side) {
//     const area = side * side;
//     return area;
// }

// /**
//  *
//  * @param {number} start
//  * @param {number} end
//  * @returns {number}
//  */
// function diapazonSum(start, end) {
//     for (let i = start; i < end; i++){
//         summa += i;
//     }
//     return summa;
// }
// console.log(diapazonSum(1, 6));

// /**
//  *
//  * @param {number} number
//  * @returns {string}
//  */
// function getSignNumber(number) {
//     if (number > 0) {
//         return 'pozitive';
//     }
//     if (number < 0) {
//         return 'negative';
//     }
//     return 'zero';
// }

// console.log(getSignNumber(5));
// console.log(getSignNumber(-5));
// console.log(getSignNumber(0));

// function getNumber(number) {
//     if (number % 2 === 0) {
//         return 'Парне'
//     }
//     return 'Непарне'
// }

// /**
//  *
//  * @param {number} number
//  * @returns {string}
//  */
// function getNumber2(number) {
//     return number % 2 === 0 ? 'even' : 'odd';
// }

// console.log(getNumber2(6))

// function getTwoNumbers(number1, number2) {
//     if (number1 >= number2){
//         return number1;
//     }
//     return number2;
// }

// console.log(getTwoNumbers(6, 4));

// /**
//  *
//  * @param {number} number1
//  * @param {number} number2
//  * @param {number} number3
//  * @returns {number}
//  */
// function getThreeNumbers(number1, number2, number3) {
//     if (number1 < number2 && number1 < number3) {
//         return number1;
//     }
//     if (number2 < number1 && number2 < number3) {
//         return number2;
//     }
//     if (number3 < number1 && number3 < number2) {
//         return number3;
//     }
// }

// console.log(getThreeNumbers(3, 8, 9));

// const phone = {
//     brand: 'Blackview',
//     model: 'BV5500Plus',
//     price: 3000,
//     aboutPhone() {
//         return `${this.brand} ${this.model} ${this.price}`;
//     }
// };
// console.log(phone.aboutPhone());

// const country = {
//     capital: 'Kyiv',
//     area: '608628',
//     population: '40000000',
//     populationArea: '78',
//     aboutCountry() {
//         return `${this.capital} ${this.area} ${this.population} ${this.populationArea}`
//     }
// };
// console.log(country.aboutCountry());

// const rectangle = {
//     width: 180,
//     height: 180,
//     getArea() {
//         return (this.width) * this.height
//     },
//     getPerimetr() {
//         return this.width * 2 + this.height * 2
//     }
// };
// console.log(rectangle.getArea());
// console.log(rectangle.getPerimetr());

// /**
//  *
//  * @param {string} brand
//  * @param {string} model
//  * @param {number} price
//  */
// function Phone(brand, model, price) {
//     this.brand === brand;
//     this.model === model;
//     this.price === price;
//     this.getDetails = function () {
//         return `${brand} ${model} costs ${price}`
//     }
// }

// const phone1 = new Phone('Blackview', 'BV5500Plus', 3000);
// console.log(phone1.getDetails());

// /**
//  *
//  * @param {string} title
//  * @param {string} director
//  * @param {number} releaseYear
//  */
// function Movie(title, director, releaseYear) {
//     this.title === title;
//     this.director === director;
//     this.releaseYear === releaseYear;
//     this.getPoster = function () {
//         return `${title} directed by ${director} (${releaseYear})`
//     };
// }

// const movie1 = new Movie('The Boys', 'Director', 2000);
// console.log(movie1.getPoster());

// function City(name, country, population) {
//     this.name === name;
//     this.country === country;
//     this.population === population;
//     this.toString = function () {
//         return `City is ${name} in country ${country}`
//     };
//     this.getFullInfo = function () {
//         return `City is ${name} in country ${country} with a population ${population}`
//     };
// }

// const city1 = new City('Zaporozhye', 'Ukraine', '2000000');
// console.log(city1.getFullInfo());
// console.log(city1.toString());

// function User(name, age, isMale) {
//     this.name = name;
//     this.age = age;
//     this.isMale = isMale;
// }
// function UserPrototype() {
//     this.getName = function () {
//         return this.name;
//     }
//     this.getInfo = function () {
//         return `${this.name} is ${this.age} years old`;
//     }
//     this.getGender = function () {
//         return this.isMale ? 'male' : 'female';
//     }
// }
// User.prototype = new UserPrototype();
// const user1 = new User('Alex', 20, true);
// console.log(user1.getInfo());
// console.log(user1.getGender());
// const user2 = new User('Maria', 20, false);
// console.log(user2.getInfo());
// console.log(user2.getGender());

// /**
//  *
//  * @param {number} radius
//  */
// function Circle(radius) {
//     this.radius = radius;
// }
// function CircleMethods() {
//     this.getArea = function () {
//         return Math.PI * this.radius * this.radius;
//     }
//     this.getPerimetr = function() {
//         return 2 * Math.PI * this.radius;
//     }
//     this.getDiametr = function () {
//         return 2 * this.radius;
//     }
// }
// Circle.prototype = new CircleMethods();
// const circle1 = new Circle(20)
// console.log(circle1.getArea());
// console.log(circle1.getPerimetr());
// console.log(circle1.getDiametr());

// /**
//  * 
//  * @param {string} title 
//  * @param {number} price 
//  * @param {number} amount 
//  */
// function Product(title, price, amount) {
//     this.title = title;
//     this.price = price;
//     this.amount = amount;
// }
// function ProductPrototype() {
//     this.getInfo = function () {
//         return `${this.title} costs ${this.price} uah`;
//     }
//     this.getTotal = function() {
//         return this.amount * this.price;
//     }
// }
// Product.prototype = new ProductPrototype();
// const product1 = new Product('Fruits', 50, 3);
// console.log(product1.getInfo());
// console.log(product1.getTotal());

// const title = {
//     title: 'HTML',
//     123:123
// }
// const titleEvents = {
//     showTitle() {
//         return this.title;
//     }
// }
// title.__proto__ = titleEvents;
// console.log(title.showTitle());

const colors = ['red', 'orange', 'yellow', 'green'];
console.log(colors);
console.log(colors.length);
console.log(colors[0]);

const numbers = new Array(18, 43, 65, 12);
console.log(numbers);
console.log(numbers.length);

const friendsNames = ['Vlad', 'Maksym', 'Nikita'];
friendsNames.push('Dima');
friendsNames.unshift('Ilya');
console.log(friendsNames);
const deleteLastName = friendsNames.pop();
console.log(deleteLastName);
const deleteFirstName = friendsNames.shift();
console.log(deleteFirstName);
console.log(friendsNames);
console.log(friendsNames.length);

const season = ['Winter', 'Spring', 'Summer', 'Autumn'];
season.push('Summer');
const deleteWinter1 = season.shift();
season.push('Winter');
season.unshift('Autumn');
const deleteWinter2 = season.pop();
console.log(season);
console.log(season.length);

const fruits = [];
console.log(fruits);
fruits.push('Яблуко', 'Мандарин', 'Кокос');
fruits.unshift('Манго', 'Банан');
console.log(fruits);
const deleteFruits1 = fruits.pop();
const deleteFruits2 = fruits.pop();
fruits.unshift(deleteFruits1);
fruits.unshift(deleteFruits2);
console.log(fruits);
console.log(fruits.length);