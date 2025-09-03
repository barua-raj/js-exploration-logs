// 20% discount
const getTax = (amount, taxRate) => amount * taxRate/100;

// single parameter
const getSquare = (a) => a * a;
console.log(getSquare(8));

const getHalf = number => number / 2;
console.log(getHalf(7));

const firstElement = nums => nums[0];
console.log(firstElement([5, 10, 25, 35]));

// no parameter
const logIt = () => console.log(50);
logIt();
console.log(logIt());

// anonymous function
document.getElementById('').addEventListener('click', () => {

})

document.getElementById('btn-click').addEventListener('click', event => {

})