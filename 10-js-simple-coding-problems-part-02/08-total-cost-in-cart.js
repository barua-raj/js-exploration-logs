// const products = [
//     {name: 'shampoo', price: 250},
//     {name: 'chiruni', price: 200},
//     {name: 'tel', price: 100},
//     {name: 'shampoo', price: 250},
// ]
// function totalCost(products){
//     let total = 0;
//     for (const product of products) {
//         total = total + product.price;
//     }
//     return total;
// }
// const total = totalCost(products);
// console.log("Total cost is:", total,"Taka");

const products = [
     {name: 'shampoo', price: 30, quantity: 3},
     {name: 'chiruni', price: 70, quantity: 2},
     {name: 'tel', price: 80, quantity: 4},
     {name: 'saban', price: 50, quantity: 5},
]
function totalCostCart(products){
    // console.log(products);
    let total = 0;
    for (const product of products) {
        const itemCost = product.price * product.quantity;
        total = total + itemCost;
        // console.log(total);
    }
    return total;
}
const result = totalCostCart(products);
console.log("Total cost:", result,"Taka");
