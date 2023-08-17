'use strict';

//Easy level

// 1. Створи HTML-файл, в ньому пропиши всі можливі способи використання JS;
// 1) created a file, added 3 options for using JS

// 2. Тобі потрібно зберігати ім’я та прізвище в змінній, 
// придумай до 4-х імен змінних, що потрібні тобі для даної задачі.
//2.2.
const firstName = 'Kateryna';
const lastName = 'Havrylova';
const fullName = firstName + ' ' + lastName;
console.log(fullName);
// Також напиши до 5 неправильних імен (неправильні імена повинні бути закоментовані);

/*
const 1name = (started from integer)
const %name = (invalid symbol %)
const my-name = (invalid symbol -)
const имя = (kyrylytsa)
const name = (reserved variable)
*/

// 3. Вкажи всі можливі способи коментування коду;

//one-line comment

/*
multi-term
commentary
*/

/**
 * jsDoc - documentation - specification
 *
 * */

// 4. Які стилі написання імен змінних ти знаєш?
//4) camelCase and snake_case


//Middle level
// Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;
const userName = prompt('What is your name', '');
console.log('Hello, ' + userName);

// Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;
const userBirthYearString = prompt('What year were you born?', '');
const userBirthYearNumber = Number(userBirthYearString);
const currentYear = 2023;
const userAge = currentYear - userBirthYearNumber;
console.log('Your age is ' + userAge);

// Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата
const userSideSquareString = prompt('What is the length of a side of a square?', '');
const userSideSquareNumber = Number(userSideSquareString);
const squareArea = userSideSquareNumber ** 2;
console.log('The area of square with side ' + userSideSquareString + ' is ' + squareArea);


//Hard level
// Запитай у користувача радіус кола і виведи площу такої окружності.
const userRadiusString = prompt('What is the radius of a circle?', '');
const userRadiusNumber = Number(userRadiusString);
const PI = Math.PI;
const circleAreaLong = PI * (userRadiusNumber ** 2);
const circleArea = circleAreaLong.toFixed([2]);
console.log('The area of circle with radius ' + userRadiusNumber + ' is ' + circleArea);

// Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.
const userLenghtWayString = prompt('What is the distance in kilometers between the two cities?', '');
const userLenghtWayNumber = Number(userLenghtWayString);

const userTimeWayString = prompt('How many hours you want to get there?', '');
const userTimeWayNumber = Number(userTimeWayString);

const userSpeedLong = userLenghtWayNumber / userTimeWayNumber;
const userSpeed = userSpeedLong.toFixed([2]);
console.log('If you want to walk ' + userLenghtWayNumber + ' kilometers in ' + userTimeWayNumber + ' hours, your speed should be ' + userSpeed + ' km/h');

// Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.
const userDollarsString = prompt('How many dollars do you want to convert to euros?', '');
const userDollarsNumber = Number(userDollarsString);
const exchangeRate = 0.92;
const userEuroLong = userDollarsNumber * exchangeRate;
const userEuro = userEuroLong.toFixed([2]);
console.log('For ' + userDollarsNumber + ' dollars you can get ' + userEuro + ' euros');


