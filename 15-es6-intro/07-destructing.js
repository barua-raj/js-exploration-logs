const {price, quantity, tax=0} = {
    name: 'shirt',
    price: '500',
    quantity: 10
}
console.log(price, quantity, tax);

// const price = product.price;
// const discount = product.price * 20/100;
// const yourPay = product.price - discount;
// const vatAmount = product.price * 7/100;
// const totalAmount = yourPay + vatAmount;


// const discount = price * 20/100;
// const yourPay = price - discount;
// const vatAmount = price * 7/100;
// const totalAmount = yourPay + vatAmount;

const device = {
    name: 'phone',
    brand: 'vivo',
    price: 1000
}
const {brand} = device;




const number = [1, 2, 3];
const [first, second] = number;
console.log(second);

const [math, physics] = [23, 45];
console.log(physics);
