let sum = 0;
for (let i = 1; i <= 30; i++) {
    if (i % 5 === 0 && i % 3 ===0) {
        sum = sum + i;
    }
}
console.log("Total of divisible by 5 and divisible by 3:", sum);