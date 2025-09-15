// const person = {
//     name: "Rahim",
//     age: 24,
//     friends: ["A", "B"],
//     country: "Bangladesh",
//     family: {
//         fatherName: "Abdullah",
//         mothername: "Rahman"
//     }
// };
// const jsonData = JSON.stringify(person);
// console.log(jsonData);


// const person = {
//     name: "Rahim",
//     age: 24,
//     friends: ["A", "B"],
//     country: "Bangladesh",
//     family: {
//         fatherName: "Abdullah",
//         mothername: "Rahman"
//     }
// };

// const key = Object.keys(person);

// console.log(key);

const products = [
    {name: "iphone 16", brand: "apple", price: 3000, color: "gray"},
    {name: "redmi 11", brand: "xiaomi", price: 1000, color: "blue"},
    {name: "Ultra Pro", brand: "samsung", price: 2000, color: "black"},
    {name: "N90", brand: "nokia", price: 5000, color: "green"},
    {name: "vivo plus", brand: "vivo", price: 4000, color: "red"},
    {name: "iphone 16", brand: "apple", price: 3000, color: "gray"},
    {name: "redmi 11", brand: "xiaomi", price: 1000, color: "blue"},
    {name: "Ultra Pro", brand: "samsung", price: 2000, color: "black"},
    {name: "N90", brand: "nokia", price: 5000, color: "green"},
    {name: "vivo plus", brand: "vivo", price: 4000, color: "red"}
];

const newData = {
    name: "walton 11",
    brand: "walton",
    price: 5000,
    color: "orange"
};

const newArray = [...products, newData];
console.log(newArray);

const remainingData = products.filter(product => product.brand !== "apple");
console.log(remainingData);

