// const numbers = [34, 45, 65, 23, 67];

// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     console.log(number);
// }

// for (const number of numbers) {
//     console.log(number);
// }

const products = [
    {id: 1, name: 'xioami note 13 plus phone', price: 10000},
    {id: 2, name: 'iphone 16 Pro phone', price: 20000},
    {id: 3, name: 'mac book', price: 10000},
    {id: 4, name: 'lenovo yoga', price: 10000},
    {id: 5, name: 'dell inspiron', price: 10000},
    {id: 6, name: 'samsung note 7', price: 10000},
    {id: 7, name: 'nokia old phone', price: 10000},
    {id: 8, name: 'Phone one', price: 10000},
]

function matchedProducts (products, search) {
    const matched = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;
}
const result = matchedProducts(products, 'phone');
console.log(result);
