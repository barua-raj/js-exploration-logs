function sum (num1, num2 = 0) {
    const total = num1 + num2;
    console.log(num1, num2, total);
}
sum (25, 10);

function multiply (num1 = 0, num2 = 0) {
    const result = num1 * num2;
    console.log(result);
}
multiply(20);

function fullName (firstName, lastName = 1) {
    const name = firstName + ' ' + lastName;
    console.log(name);
}
fullName('Rahim');