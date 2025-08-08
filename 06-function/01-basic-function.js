function firstFunction() {
    console.log("This is a basic fumction in JS!");
}
firstFunction();

function moneyBag() {
    var money = 5000;
    console.log("I have",money,"in my moneybag!");
    console.log("I have " + money + " in my moneybag!");
}
moneyBag();
function sumOfTwo(input1, input2) {
    let sum = input1 + input2;
    console.log(sum);
    return sum;
}
const result = sumOfTwo(20, 30);
console.log(result);
