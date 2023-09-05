function cart() {
    const cart = [];

    return {
        addCart(product) {
            if (!product) return;

            const indexProductSku = this.findIndexBySku(product.sku);

            if (indexProductSku !== -1) {
                this.setQty(product.sku, product.qty, indexProductSku)
            } else {
                product.id = Date.now() * ~~(Math.random() * 10);
                cart.push(product);
            }
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

        //Home work:
        removeProductBySku(sku) {
            return cart.splice(this.findIndexBySku(sku), 1);
        },

        getTotalQty() {
            return cart.reduce((acc, curQty) => {
                return acc + curQty.qty;
            }, 0);
        },

        getTotal() {
            return cart.reduce((acc, curProd) => {
                return acc + (curProd.qty * curProd.price);
            }, 0);
        },

        getProductBySku(sku) {
            return cart.find((product) => {
                return product.sku === sku;
            });
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
myCart.removeAll();
console.log(myCart.getCart());
