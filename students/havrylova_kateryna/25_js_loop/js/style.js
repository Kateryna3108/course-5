// Запитай у користувача п’ятирозрядне число і визначи, 
// чи є воно паліндромом.

const userNumber = prompt("Enter five-digit number");
let isPalindrom = true;

const numArr = userNumber.split('');
console.log(numArr);

for (let i = 0; i < numArr.length / 2; i++) {
    if (numArr[i] != numArr[numArr.length - 1 - i]) {
        isPalindrom = false;
        break;
    }
}
console.log(isPalindrom);

// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// від 500 і вище - 7%.
const amount = +prompt("Enter purchase amount");
let discount = 0;

if (amount >= 200 && amount < 300) {
    discount = 3;
} else if (amount >= 300 && amount < 500) {
    discount = 5;
} else if (amount >= 500) {
    discount = 7;
}
const answerDiscount = "Your dicount is " + discount + "%";
console.log(answerDiscount);



// Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.

const userList = prompt("Enter 10 numbers through , without space. For example 1,2,43,33,59,67,53,79,85,1036");
const userListArr = userList.split(',');
console.log(userListArr)
const numberArr = new Array(10);
let positiv = 0;
let negativ = 0;
let zero = 0;
let odd = 0;
let even = 0;

for (let i = 0; i < 10; i++) {
    if (Number(userListArr[i]) > 0) {
        positiv++;
    } else if (Number(userListArr[i]) < 0) {
        negativ++;
    } else {
        zero++;
    }
    if ((Number(userListArr[i]) % 2) && !(Number(userListArr[i]) == 0)) {
        odd++;
        // console.log('odd ' + Number(userListArr[i]));
    } else if (!(Number(userListArr[i]) % 2) && !(Number(userListArr[i]) == 0)) {
        even++;
        // console.log('even ' + Number(userListArr[i]));
    }
}
const resultPositiv = 'positiv numbers: ' + positiv;
console.log(resultPositiv);
const resultNegativ = 'negativ numbers: ' + positiv;
console.log(resultNegativ);
const resultZero = 'zero: ' + zero;
console.log(resultZero);
const resultOdd = 'odd numbers: ' + odd;
console.log(resultOdd);
const resultEven = 'even numbers: ' + even;
console.log(resultEven);


// Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.
// я не зрозуміла завдання

// Запитай у користувача число і виведи всі дільники цього числа.
const number = +prompt("Enter number");
let divisors = '';
for (let i = 2; i < 10; i++) {
    if (!(number % i)) {
        divisors = divisors + i + ", ";
    }
}
const resultDivisors = divisors + ' are the divisors of number ' + number;
console.log(resultDivisors);
