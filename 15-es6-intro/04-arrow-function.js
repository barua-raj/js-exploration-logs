// function declaration
function add(num1, num2){
    console.log(num1, num2);
    return num1 + num2;
}
add(5, 10);

// function expression
const addition = function(num1, num2){
    return num1, num2;
}
const result = addition(10, 20);
console.log(result);

// arrow function (implicit)
const sum = (num1, num2) => num1 + num2;
const sumResult = sum(10, 20);
console.log(sumResult);

const multiply = (a, b) => a * b;
const multiplyResult = multiply(2, 5);
console.log(multiplyResult);

const sumAll = (a, b, c, d, e) => a + b + c + d + e;
const finalSumAll = sumAll(5, 10, 5, 10, 20);
console.log(finalSumAll);

const biggestNumber = (x, y) => x > y;
const finalBiggestNumber = biggestNumber(10, 50);
console.log(finalBiggestNumber);


// multi-line arrow function
const doMath = (x, y) => {
    const temp1 = x * 10;
    const temp2 = y * 10;
    const result = temp1 + temp2;
    return result;
}
const doMathResult = doMath(5, 2);
console.log(doMathResult);