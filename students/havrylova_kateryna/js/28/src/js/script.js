const arr = [100, 32, 1, 25, 3, 5, 585]; //додали значення
const arr1 = Array(10); //створили массив з 100 значеннями

arr[1] = 10;

console.log(arr[1], arr1);

console.log(arr.length, arr[arr.length - 1], arr.at());

// arr.length = 10;
// arr.length = 0;

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// const userLenght = +prompt("Enter number");
// const arrUser = Array(userLenght);
// for (let i = 0; i < userLenght; i++) {
//     arrUser[i] = i + 1;
// }

// console.log(arrUser);


// for (const value of arr) {
//     console.log(value);
// }

// for (let key in arr) {
//     console.log(arr[key]);
// }

console.log(arr.push(55, 1, 5, 9), arr.length);

arr.push(55); //add last element to array
arr.pop(); //delete last element to array

console.log(arr.push(55, 1, 5, 9), arr.length);
console.log(arr.pop());
const test = arr.pop();

arr.shift(); //delete first element to array
arr.unshift(123); //add first element to array

console.log(arr.unshift(123), arr.length);


console.log(arr);

const d = [1, 2, 5, 2, 5, 1, 87, 54, 34, 1, 78, 99, 1, 23, 64, 16, 76, 32, 7, 59];
const oddArr = [];
const evenArr = [];

for (const value of d) {
    if (value % 2 == 0) {
        evenArr.push(value);
        for (let i = 0; i < evenArr.length; i++) {
            for (let j = i + 1; j < evenArr.length; j++) {
                if (evenArr[i] == evenArr[j]) {
                    evenArr.pop();
                }
            }
        }
    }
    else {
        oddArr.push(value);
        for (let i = 0; i < oddArr.length; i++) {
            for (let j = i + 1; j < oddArr.length; j++) {
                if (oddArr[i] == oddArr[j]) {
                    oddArr.pop();
                }
            }
        }
    }
}

console.log(evenArr, oddArr);

const newArr = [];
const tmpArr = [];

for (const value of d) {
    if (!tmpArr[value]) {
        newArr.push(value);
        tmpArr[value] = true;
    }
}
console.log(newArr);

const copyArr = [...d];

const copyArr1 = d.concat(); //copy array
const copyArr2 = d.concat('d'); //copy array + new element

copyArr[0] = 1111;
console.log(copyArr, d);

const copyArr3 = d.slice(); //copy array 
const copyArr4 = d.slice(5, 10); //copy array from 5 to (10-1) elements
console.log(copyArr3, copyArr4);


console.log(d.includes(54, 5)); //boolean - is or isn't this value in array from index 5

console.log(d.indexOf(54, 2)); //index of value (search from index 2)
console.log(d[d.indexOf(54)]); //value by index 


/**
 * 
 * @param {Array | String} data 
 * @param {Number | String} findData 
 * @returns {Array}
 */

function getIndexOf(data = [], findData) {
    const findIndex = [];
    let index = data.indexOf(findData);

    while (index !== -1) {
        findIndex.push(index);

        index = data.indexOf(findData, index + 1);
    }

    return findIndex;
}

// console.log(getIndexOf(d, 1));
// console.log(getIndexOf('sfdsdhfgjhsgfsagfhagsd', 's'));

// d.splice(0, 0, 33333); //add first element 
// d.splice(0, 1, 33333); //change first element
// d.splice(0, 5, 333, 333, 333); //delete elements from 0 to 5 (without 5) and add three 333 as first elements
// d.splice(5, 0, 333); //insert 333 in the place of index 5
// console.log(d);
// console.log(d.splice(0, 5, 333));

function spliceIndexOfArray(
    data = [], indexArray = [], replaceArray = [], isMutation = false
) {
    if (isMutation) data = [...data];
    const defaultReplace = 0;
    let i = 0;

    for (const value of indexArray) {
        console.log(value);
        data.splice(value, 1, replaceArray[i] ?? defaultReplace); //del by index
        i++;
    }

    console.log("&&&&", replaceArray.slice(i), indexArray.at(-1), indexArray);

    if (isMutation) return data;
}
console.log(spliceIndexOfArray(d, getIndexOf(d, 1), [22, 22, 22, 22, 22, 22, 22], true));
console.log(d);

const number = [1, 2, 3, 4, 5];

const [first, second, , , , , sss = 55] = number;

console.log(first, second, sss);

const [first1, second1, ...other] = number;

console.log(first1, second1, other);
