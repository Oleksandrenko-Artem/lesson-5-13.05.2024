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

const userAge = prompt('Скільки вам років?')
if (userAge <= 13) {
    alert('Ви ще маленький і не зможете подивитись кіно!')
} else {
    alert('Вам достатньо років і ви можете купляти квиток.')
}

const firstNumber = prompt('Введіть перше число.')
const secondNumber = prompt('Введіть друге число.')
if (Number(firstNumber) > Number(secondNumber)) {
    alert('Перше число більше.')
} else if (Number(firstNumber) === Number(secondNumber)) {
    alert('Числа однакові.')
} else {
    alert('Друге число більше.')
}

const accessPassword = 'password123'
const userPassword = prompt('Введіть пароль користувача.')
if (userPassword === accessPassword) {
    alert('Пароль підійшов!')
} else {
    alert('Невірний пароль!')
}

const number = prompt('Введіть число.')
if (Number(number) > 0) {
    alert('Позитивне число.')
} else if (Number(number) === 0) {
    alert('Нейтральне число.')
} else {
    alert('Негативне число.')
}