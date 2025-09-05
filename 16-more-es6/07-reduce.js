const numbers = [12, 34, 43, 23, 11, 7, 80];
let sum = 0;
for (const num of numbers) {
    sum = sum + num;
}
console.log(sum);

const total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(total);