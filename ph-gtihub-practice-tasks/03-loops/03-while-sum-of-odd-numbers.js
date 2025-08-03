// Subtask-1:

// Display sum of all the odd numbers from 81 to 131.


// Subtask-2:

// Display sum of all the even numbers from 206 to 311.

let i = 81;
let sumOdd = 0;
while (i <= 131) {
    if (i % 2 === 1) {
        sumOdd = sumOdd + i;
    }
    i++;
}
console.log("Sum of all the odd numbers from 81 to 131 is:", sumOdd);


let j = 206;
let sumEven = 0;
while (j <= 311) {
    if (j % 2 === 0) {
        sumEven = sumEven + j;
    }
    j++;
}
console.log("Sum of all the even numbers from 206 to 311 is:", sumEven);