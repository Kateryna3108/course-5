//незмінні премітивні типи

//number
const num = (2, 2.5, -1, 0, -0, Infinity, -Infinity, NaN);

isNaN(NaN); //true

NaN !== NaN; //true, а всі інші значення між собою рівні!!!

console.log(NaN === NaN);
console.log(2 + '2');
console.log(isNaN(NaN));
console.log((0.1 * 10 + 0.2 * 10) / 10);
console.log(Number.MAX_SAFE_INTEGER);
console.log((2.34567456456).toFixed(2));
console.log(typeof (2.34567456456).toFixed(2));
console.log(Math.floor(2.8)); //завжди вниз
console.log(Math.round(2.2)); //математичне округлення
console.log(Math.ceil(2.2)); //завжди вверх

//Begint
//2n;

//String

const string = ("gjhg \" hjkhjkhkjh");
console.log("gjhg \" hjkhjk\n hkjh");
console.log(`
${2 + 2}
${(2 + 2).toFixed(2)}
sdf
''
sdf
" "
sdf
`);

let f = 'ssss';
f = f + 'a';

console.log(f.length, f.toLocaleUpperCase());
console.log(f.split('').reverse().join(','));

//underfined
let typeUnderfined;
console.log(typeUnderfined);
typeUnderfined = 2;
typeUnderfined = undefined;
console.log(typeUnderfined);

//
const typeNull = null;

let typeBool = true; //1
typeBool = false; //0

const typeSymbol = Symbol('sfhjgdsjfg');

//Обʼєктні типи, що змінюються
const arr = [1, 1, 1, 0, 1, 8];
arr[0] = 5;

console.log(arr);

const obj = {
    userName: "Vasja",
    age: 20,
    b: 2,
    2: 21,
};

obj.age = 30;
console.log(obj);

//приведення типів

// Number, String, Bool
console.log(String(false), Number('2'), Boolean({}), [1, 2, 34].toString());
console.log((15).toString(16));
console.log(+'34', parseInt('1.8px'), parseFloat('1.2px'), ~~(1.8));

//!!!!! неявне приведення до false
console.log(false, !!'', Boolean(''), !!0, !!-0, !!undefined, !!null, !!NaN);
console.log(!!2121, !!Infinity);


console.log(2 == '2', 2 === '2', 2 < 5, 4 > 5, 3 <= 3, 3 >= 4);
console.log('f' == 'F', 'f' === 'f');
//!= !==
const a = [];
const b = a;
console.log([] === []);
console.log(a === a);
console.log(a === b);

console.log(+false, +true, +null, true + true, [] + [], {} + {});

//
console.log(1 && 0);
console.log(1 || 0);

// const s = +prompt('age?') || 10;
const s = +prompt('age?') ?? 10;
console.log(s);


console.log(125 % 10);
console.log(~~(125 / 100) % 10);
