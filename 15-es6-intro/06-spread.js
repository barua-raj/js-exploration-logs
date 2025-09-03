// const number = [87, 45, 87, 98];
// console.log(number);
// console.log(...number);

// // const max = Math.max(21, 45, 43, 172, 98, 76);
// // console.log(max);

// const max = Math.max(...number);
// console.log(max);

// const first = [1, 2, 5, 3, 7];
// const second = first;
// second.push(10);
// console.log(first);

const first = [1, 2, 3, 4, 5, 6];
const second = [...first];
const third = [76,...first, 87, 90];
second.push(50);
// console.log(first);
// console.log(second);
// console.log(third);

const ages = [45, 45, 1];
const prices = [98, 65, 45];
const all = [34,...ages,45,...prices];
console.log(all);

const person = {
    name: 'mizan',
    age: 34
}
const employee = {
    designation: 'developer',...person
}
console.log(employee);


const total = (a, b, c) => a + b + c;
const result = total (3, 4, 5,);
const digits = [3, 4, 56, 54, 6];
console.log(result);
total(...digits);