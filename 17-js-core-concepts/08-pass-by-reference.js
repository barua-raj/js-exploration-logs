// for all primitive values (always pass by value)
function multiply (x, y) {
    x = x + 5;
    y = y + 5;
    const result = x * y;
    return result;
}
const a = 5;
const b = 7;
console.log('Before the function call', a, b);
const finalResult = multiply(a, b);
console.log(finalResult);
console.log('After the function call', a, b);

// non-primitive values are passed by reference
const manik = { name: 'manik', balance: 5000 }
const roton = { name: 'roton', balance: 40000 }

function totalMoney(person1, person2) {
    person1.balance = 0;
    person2.balance = person2.balance / 2;
    const total = person1.balance + person2.balance;
    return total;
}
const totalBalance = totalMoney(manik, roton);
console.log(totalBalance);

console.log("After function call", manik, roton);