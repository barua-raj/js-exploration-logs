let money;
// console.log(money);

function total(a, b) {
    // console.log('Value of parameters', a, b);
    const sum = a + b;
    // console.log('total is', sum);
    
}
// total(1);
const result = total(3, 4);
// console.log('value of called function is', result);

function total2(a, b) {
    // console.log('Value of parameters', a, b);
    if (a == undefined || b == undefined) {
        return;
    }
    if (a && b) {
        const sum = a + b;
        return sum;
    }
}
const result2 = total2(1);
// console.log('result', result2);


const phone = {
    brand: 'samsung',
    price: 34000
}
// console.log(phone.price);
// console.log(phone.color);

const bags = ['sonali', 'rupali', 'jaam'];
// console.log(bags[3]);

delete bags[1];
// console.log(bags[0]);

console.log(typeof undefined);
console.log(typeof null);



