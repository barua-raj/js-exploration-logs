const phones = [
    {name: 'Samsung', price: 45000, camera: '12mp', color: 'black'},
    {name: 'iPhone', price: 120000, camera: '14mp', color: 'red'},
    {name: 'Xiaomi', price: 5000, camera: '13mp', color: 'green'},
    {name: 'Walton', price: 2000, camera: '12mp', color: 'grey'},
    {name: 'HTC', price: 21000, camera: '10mp', color: 'blue'}
]
function getCheapestPhone(phones){
    let minPrice = phones[0];
    for (const phone of phones) {
        if (phone.price < minPrice.price) {
            minPrice = phone;
        }
    }
    return minPrice;
}
const price = getCheapestPhone(phones);
console.log("The cheapest phone is:", price);
