const phones = [
    { name: 'Samsung', price: 20000, camera: '12mp', color: 'black'},
    { name: 'Xiaomi', price: 18000, camera: '12mp', color: 'red'},
    { name: 'Oppo', price: 30000, camera: '12mp', color: 'green'},
    { name: 'iPhone', price: 100000, camera: '12mp', color: 'blue'},
    { name: 'Walton', price: 31000, camera: '12mp', color: 'black'},
    { name: 'HTC', price: 27000, camera: '12mp', color: 'grey'}
]

function getCheapestPhone(phones){
    let min = phones[0]
    for (const phone of phones){
        if (phone.price < min.price) {
            min = phone;
        }
    }
    return min;
}
const price = getCheapestPhone(phones);
console.log("The cheapest phone is: ", price);
