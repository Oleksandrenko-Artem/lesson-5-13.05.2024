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

const price = 100;
const inputUserAge = prompt('Введіть свій вік.');
const userAge = Number(inputUserAge);
const sale = (userAge < 18 || userAge > 65) ? 10 : 0;
const summaCheck = price - (price * sale / 100);
alert(summaCheck);

const inputNumber = prompt('Введіть число, щоб знайти його модуль.');
const number = Number(inputNumber);
const module = (number >= 0) ? number : -number;
alert(module);

const userInput1 = prompt('Введіть першу довжину сторони прямокутника.');
const userInput2 = prompt('Введіть другу довжину сторону прямокутника.');
const rectangleWidth = (userInput1 === userInput2) ? 'Квадрат' : 'Прямокутник';
alert(rectangleWidth);