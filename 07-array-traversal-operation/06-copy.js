// let price = 25;
// let tempPrice = price;

// tempPrice = 30;

// console.log(price);
// console.log(tempPrice);

// const products = [25, 25, 25];
// const compProducts = products;
// compProducts[0] = 10;
// products[1] = 50;
// console.log(products);
// console.log(compProducts);

const products = [25, 25, 25];
const compProducts = [];

for (const pd of products) {
    compProducts.push(products);
}

compProducts[0] = 50;
products[1] = 60;

console.log(products);

console.log(compProducts);

