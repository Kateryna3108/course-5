const numbers = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// numbers.forEach((number, index, arr) => {
//     console.log(number, index, arr);
// });

const users = [
    {
        user: "Kolya",
        age: 16,
        id: 0
    },
    {
        user: "Vasya",
        age: 20,
        id: 1
    },
    {
        user: "Kolya",
        age: 25,
        id: 3
    },
    {
        user: "Viktor",
        age: 15,
        id: 2
    },
    {
        user: "Vasya",
        age: 30,
        id: 4
    },
];

const a = users.find((user/*, index, arr*/) => {
    console.log(user);
    return user.user.toLocaleLowerCase() === 'vasya';
});

console.log(a);

//спочатку відфільтрували обʼєкти (їх посилання), а потім витягли map копії обʼєктів
const b = users.filter((user) => {
    return user.user.toLocaleLowerCase() === 'vasya';
}).map((user) => Object.assign({}, user)) //({...user}));
b[0].age = 0;

console.log(b, users);

function getDataById(arr, id) {
    if (!arr && !id) return;
    return arr.find((item) => item.id === id);
}

console.log(getDataById(users, 4));

function getUseByAge(arr, age) {
    if (!arr && !age) return [];
    return arr.filter((user) => user.age >= age);
}

console.log(getUseByAge(users, 100));


// const cart = [
//     {
//         id: 0,
//         name: 'Product 1',
//         qty: 2,
//         price: 150,
//     },
//     {
//         id: 1,
//         name: 'Product 2',
//         qty: 1,
//         price: 50,
//     },
//     {
//         id: 2,
//         name: 'Product 3',
//         qty: 5,
//         price: 10,
//     }
// ];

console.log(numbers);
// console.log(numbers.reduce((accumulator, currentValue) => {
//     console.log(accumulator, currentValue);
//     return accumulator + currentValue;
// }, 0))

// const total = cart.reduce((acc, curVal) => {
//     return acc + (curVal.price * curVal.qty);
// }, 0);

// console.log(total);

function cart() {
    const cart = [];

    return {
        addCart(product) {
            if (!product) return;

            const indexProductSku = this.findIndexBySku(product.sku);

            if (indexProductSku !== -1) {
                this.setQty(product.sku, product.qty, indexProductSku)
                // cart[indexProductSku].qty = cart[indexProductSku].qty + product.qty;
            } else {
                product.id = Date.now() * ~~(Math.random() * 10);
                cart.push(product);
            }
            // console.log(cart);
        },

        findIndexBySku(sku) {
            return cart.map((product) => product.sku).indexOf(sku);
        },

        getCart() {
            return cart.map((product) => ({ ...product }));
        },

        setQty(sku, qty, index) {
            const indexProductSku = index ?? this.findIndexBySku(sku);
            if (indexProductSku != -1) {
                cart[indexProductSku].qty = cart[indexProductSku].qty + qty;
            }
        },

        removeProductBySku(sku) {
            console.log("deleted product by sku:");
            return cart.splice(this.findIndexBySku(sku), 1);
        },

        getTotalQty() {
            const totalQty = cart.reduce((acc, curQty) => {
                return acc + curQty.qty;
            }, 0);
            return totalQty;
        },

        getTotal() {
            const totalPrice = cart.reduce((acc, curProd) => {
                return acc + (curProd.qty * curProd.price);
            }, 0);
            return totalPrice;
        },
        getProductBySku(sku) {
            //find
            const p = cart.find((product) => {
                return product.sku === sku;
            });
            return p;
        },

        removeAll() {
            cart.length = 0;
        }
    };
};

const myCart = cart();

myCart.addCart({
    sku: 124,
    name: 'Product 1',
    qty: 5,
    price: 15,
});
myCart.addCart({
    sku: 124,
    name: 'Product 1',
    qty: 1,
    price: 15,
});

myCart.addCart({
    sku: 125,
    name: 'Product 2',
    qty: 1,
    price: 15,
});
myCart.addCart({
    sku: 125,
    name: 'Product 2',
    qty: 4,
    price: 15,
});

myCart.addCart({
    sku: 126,
    name: 'Product 3',
    qty: 1,
    price: 10,
});

myCart.addCart({
    sku: 127,
    name: 'Product 4',
    qty: 3,
    price: 20,
});

myCart.addCart({
    sku: 128,
    name: 'Product 5',
    qty: 2,
    price: 25,
});

// myCart.setQty(124, 2);
// myCart.getCart()[0].price = 0;

myCart.removeProductBySku(125);
console.log("deleted product by sku 125:");
console.log(myCart.getCart());


myCart.addCart({
    sku: 125,
    name: 'Product 2',
    qty: 1,
    price: 15,
});

myCart.addCart({
    sku: 125,
    name: 'Product 2',
    qty: 4,
    price: 15,
});

console.log("The total quantity is: " + myCart.getTotalQty());
console.log("The total cost of cart is: " + myCart.getTotal());
console.log(myCart.getProductBySku(125));
