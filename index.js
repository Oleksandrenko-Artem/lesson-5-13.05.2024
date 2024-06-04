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

const message=` Введи мову, якою хочеш спілкуватися:
1) українська - ua
2) англійська - en
3) польска - pl
4) іспанська - es
5) французька - fr
`;

const lang = prompt(message);

switch (lang) {
    case 'ua':
    case '1':
    case 'українська':
        alert('привіт');
        break;
    case 'en':
    case '2':
    case 'англійська':
        alert('hi');
        break;
    case 'pl':
    case '3':
    case 'польська':
        alert('cześć');
        break;
    case 'es':
    case '4':
    case 'іспанська':
        alert('hola');
        break;
    case 'fr':
    case '5':
    case 'французька':
        alert('bonjour');
        break;
    default:
        alert('Мова не підтримується.');
        break;
}
if (lang === 'ua' || lang === '1' || lang === 'українська') {
    alert('привіт');
} else if(lang === 'en' || lang === '2' || lang === 'англійська') {
    alert('hi');
} else if (lang === 'pl' || lang === '3' || lang === 'польська') {
    alert('cześć');
} else if (lang === 'es' || lang === '4' || lang === 'іспанська') {
    alert('hola');
} else if (lang === 'fr' || lang === '5' || lang === 'французька') {
    alert('bonjour');
} else {
    alert('Ви нічого не ввели.');
}

switch (confirm('Ви хочете покинути сайт?')) {
    case true:
        alert('Допобачення!');
        break;
    case false:
        alert('Ми раді, що ви лишаєтесь з нами!');
        break;
}

confirm('Ви хочете покинути сайт?')
    ? alert('Допобачення!')
    : alert('Ми раді, що ви лишаєтесь з нами!');
    
switch (confirm('Введіть число від 1 до 7.')) {
    case '1':
        alert('Monday');
        break;
    case '2':
        alert('Tuesday');
        break;
    case '3':
        alert('Wednesday');
        break;
    case '4':
        alert('Thursday');
        break;
    case '5':
        alert('Friday');
        break;
    case '6':
        alert('Saturday');
        break;
    case '7':
        alert('Sunday');
        break;
    default:
        alert('Треба було вводити числа від 1 до 7!');
        break;
}

switch (confirm('Введіть ще раз числа від 1 до 7.')) {
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
        alert('Робочі дні тижня.');
        break;
    case '6':
    case '7':
        alert('Вихіднф дні тижня.');
        break;
    default:
        alert('Не має такого дня тижня!');
        break;
}

const firstNumber = prompt('Введи перше число.');
const secondNumber = prompt('Введи друге число.');

const number1 = Number(firstNumber);
const number2 = Number(secondNumber);

const operator = prompt('Введи дію: +, -, *, /, % ');

switch (operator) {
    case '+':
        const result1 = number1 + number2;
        alert(number1 + ' + ' + number2 + ' = ' + result1);
        break;
    case '-':
        const result2 = number1 - number2;
        alert(number1 + ' - ' + number2 + ' = ' + result2);
        break;
    case '*':
        const result3 = number1 * number2;
        alert(number1 + ' * ' + number2 + ' = ' + result3);
        break;
    case '/':
        const result4 = number1 / number2;
        alert(number1 + ' / ' + number2 + ' = ' + result4);
        break;
    case '%':
        const result5 = number1 % number2;
        alert(number1 + ' % ' + number2 + ' = ' + result5);
        break;
    default:
        alert('Такої дії не існує!');
        break;
}