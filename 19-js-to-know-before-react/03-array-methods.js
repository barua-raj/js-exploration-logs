const products = [
    {name: "iphone 16", brand: "apple", price: 3000, color: "gray"},
    {name: "redmi 11", brand: "xiaomi", price: 1000, color: "blue"},
    {name: "Ultra Pro", brand: "samsung", price: 2000, color: "black"},
    {name: "N90", brand: "nokia", price: 5000, color: "green"},
    {name: "vivo plus", brand: "vivo", price: 4000, color: "red"}
];
// 1.
const result = products.map(product => product.price);
console.log(result);


// 2.
const result2 = products.map(product => {
    console.log(product.price);
});

products.forEach(product => console.log(product));

const productResult = products.filter(product => product.price <= 2000);
console.log(productResult);

const productResult2 = products.find(product =>  product.price <= 2000);
console.log(productResult2);