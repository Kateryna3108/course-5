// const numUserString = prompt("Enter number");
// const numberUser = Number(numUserString);
// const isEven = numberUser % 2;
// if (numberUser % 2) {
//     console.log('odd');

// }
// else {
//     console.log('even');
// }

// const d = 21;
// if (d % 2) {
//     console.log('1');
// }
// else {
//     console.log('2');
// }

// if (d === 2) {
//     console.log('2');
// } else if ((d > 30 && !(d % 2)) || d === 3) {
//     console.log('2sdfhdsgfj');

// } else {
//     console.log('333333');
// }

// const numString = prompt("Enter number (second exercise)");
// const number = Number(numString);
// if (number > 0) {
//     console.log('Your number more than 0');
// } else if (number < 0) {
//     console.log('Your number more than 0 ');
// } else {
//     console.log('Your number is 0');
// }

// const myAge = 30;

// switch (myAge) {
//     case 10:
//         console.log('10');
//         break;
//     case 15:
//     case 20:
//         console.log('15, 20');
//         break;
//     case 30:
//         console.log('30');
//         break;
//     case 40:
//         console.log('40');
//         break;
//     default:
//         console.log('default');

// }

// const userMonthString = +prompt("Enter some number from 1 to 12")
// const userMonth = Number(userMonthString);
// switch (userMonth) {
//     case 1:
//         console.log('January');
//         break;
//     case 2:
//         console.log('February');
//         break;
//     case 3:
//         console.log('March');
//         break;
//     case 4:
//         console.log('April');
//         break;
//     case 5:
//         console.log('May');
//         break;
//     case 6:
//         console.log('June');
//         break;
//     case 7:
//         console.log('July');
//         break;
//     case 8:
//         console.log('August');
//         break;
//     case 9:
//         console.log('September');
//         break;
//     case 10:
//         console.log('October');
//         break;
//     case 11:
//         console.log('November');
//         break;
//     case 12:
//         console.log('December');
//         break;
//     default:
//         console.log('Your number is wrong, try again');

// }

// const userMonthString = +prompt("Enter some number from 1 to 12")
// const userMonth = Number(userMonthString);
// switch (userMonth) {
//     case 1:
//         console.log('January');
//     case 2:
//         console.log('February');
//     case 3:
//         console.log('March');
//     case 4:
//         console.log('April');
//     case 5:
//         console.log('May');
//     case 6:
//         console.log('June');
//     case 7:
//         console.log('July');
//     case 8:
//         console.log('August');
//     case 9:
//         console.log('September');
//     case 10:
//         console.log('October');
//     case 11:
//         console.log('November');
//     case 12:
//         console.log('December');
//         break;
//     default:
//         console.log('Your number is wrong, try again');
// }

// const userBoolean = prompt("Enter Yes or No")
// let isTrue;
// switch (userBoolean?.toLowerCase()) {
//     case 'yes':
//         isTrue = true;
//         break;
//     case 'no':
//         isTrue = false;
//         break;
//     // default:
//     //     console.log('Your data is wrong, try again');
// }
// console.log(isTrue);


// const text = prompt("Enter Yes or No")
// let isAccsess = text === 'yes' ? '+' : text === 'no' ? '-' : undefined;

// console.log(isAccsess);

let i = 0;
const n = 10;
while (n > i++) {
    console.log(i);
    i++;
}

let j = 0;
const num = +prompt("Enter number from 1 to 10");
// const num = Number(numString);
let hash = '';

while (j < num) {
    hash = hash + "#";
    j++;
}
console.log(hash);
