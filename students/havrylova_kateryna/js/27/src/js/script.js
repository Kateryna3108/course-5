const obj = {
    userName: "Viktor",
    age: 15,
    // skillList: [],
    skillList: {
        css: 50,
    },
    'sdjfhk kjsdfhk': 'sdfd',
};

console.log(obj.age, obj.userName, obj["sdjfhk kjsdfhk"]);

const user = {
    firstName: "Kateryna",
    lastName: "Havrylova",
    age: 40,
    city: "Kolomyia",
    skillList: "html, css, js, java",
};

// console.log(user.skillList);

obj.age = obj.age + 20; //зміна значання властивості обʼєкта


const key = 'age';

console.log(obj[key]);  //звертаємося до значення властивості

user.skillList = user.skillList + ", newSkill";

console.log(user.skillList);

for (let key in obj) {
    console.log(key);  //виводимо властивості
}

for (let key in user) {
    console.log(user[key]); //виводимо значення властивостей
}

obj.sss = "error"; //added new властивість обʼєкта

for (let key in obj) {
    console.log(key, obj[key]);
}

// const objCopy = obj; //так не можна!!! копіює ідресу ячєйки

const objCopy = Object.assign({}, obj, { age: 300 }); //всі обʼєкти обʼєднуюится по черзі - до пустого додаємо існуючого, але це поверхневе копіювання
objCopy.age = 100;
// console.log(obj, objCopy);
// objCopy.age = 120;

const objCopySecond = {
    ...obj,
    skillList: {
        ...obj.skillList,
    }
};
objCopySecond.age = 120;
// console.log(obj, objCopySecond);

// const objCopyThird = JSON.stringify(obj);
// console.log(objCopyThird);
// console.log(typeof objCopyThird);

const objCopyThird = JSON.parse(JSON.stringify(obj));
objCopyThird.age = 300;
// console.log(obj, objCopyThird);

function copyObj(obj) {
    const newObj = {};
    for (let key in obj) {
        // if (typeof obj[key] === "object") {
        //     newObj[key] = copyObj(obj[key]);
        // } else {
        //     newObj[key] = obj[key];
        // }

        if (obj.hasOwnProperty(key)) {
            newObj[key] = (typeof obj[key] === "object") ? copyObj(obj[key]) : obj[key];
        }
    }
    return newObj;
}

// console.log(objCopy.age);
const aaa = copyObj(objCopy);

delete aaa.age;
// console.log(aaa.age);

const newUser = {
    user: "Viktor",
    age: 40,
    skillList: "HTML, CSS",
    // getAge: function () {
    //     return this.age;
    // },
    // setAge: function (age) {
    //     if ((!age && age !== 0) || typeof age !== 'number' || age < 0)
    //         return;
    //     this.age = age;
    // }



    // getAge() {
    //     return this.age;
    // },
    // setAge(age) {
    // if ((!age && age !== 0) || typeof age !== 'number' || age < 0)
    //       return;
    //       this.age = age;
    // },


    // getAge,
    // setAge,
};

function getAge() {
    return this.age;
}

function setAge(age) {
    if ((!age && age !== 0) || typeof age !== 'number' || age < 0)
        return;
    this.age = age;
}


// newUser.setAge(10);

setAge.apply(newUser, [10]);
setAge.call(newUser, 10);

console.log(newUser.age);


function createUser({ userName, age = 10 }) {
    function getAge() {
        return this.age;
    }

    function setAge(age) {
        if ((!age && age !== 0) || typeof age !== 'number' || age < 0)
            return;
        this.age = age;
    }
    return {
        userName,
        age,
        getAge,
        setAge,
    }
}

const vasya = createUser({
    userName: "Vasya",
    // age: 30,
});

const petya = createUser({
    userName: "Petya",
    age: 20,
});

// vasya.setAge(60);
petya.setAge(30);

console.log(vasya, petya);
const userName = 'sdhgfj';
const { userName: userPetya, age = 50 } = petya;

console.log(userPetya, age);
