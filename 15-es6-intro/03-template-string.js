// const poem = 'amar naam ali \n' + 
// 'ami khai bali \n' + 
// 'amar naam ali';
// console.log(poem);

const poem = `amar naam ali
ami khai bali
amar naam ali`
console.log(poem);

function sum (num1, num2) {
    const result = num1 + num2;
    // console.log('Sum of ' + num1 + ' and ' + num2 + ' is:',result);
    const output = `Sum of ${num1} and ${num2} is: ${result}`;
    console.log(output);
}
sum(10, 25);

const price = 50;
const discountPrice = `Discount price of ${price} after 20% discount is ${price * 0.8}`;
console.log(discountPrice);