const phones = [
    {name: 'Samsung', price: 45000, camera: '12mp', color: 'black'},
    {name: 'iPhone', price: 120000, camera: '14mp', color: 'red'},
    {name: 'Xiaomi', price: 5000, camera: '13mp', color: 'green'},
    {name: 'Walton', price: 2000, camera: '12mp', color: 'grey'},
    {name: 'HTC', price: 21000, camera: '10mp', color: 'blue'}
]
function getHighest(phones){
    let maxPrice = phones[0];
    for (const phone of phones) {
        if (phone.price > maxPrice.price){
            maxPrice = phone;
        }
    }
    return maxPrice;
}
const result = getHighest(phones);
console.log("The most valuable phone is:", result);