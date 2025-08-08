// create a function that will return sum of even numbers only in an array

// function sumOfEven(numbers){
//     const evens = [];
//     for (const num of numbers){
//         if (num % 2 ===0){
//             console.log(num);
//             // sum = sum + num;
//             evens.push(num);
//         }
//     }
//     return evens;
//     // console.log(sum);
// }
// const numbers = [10, 23, 43, 22, 65, 12, 18];
// const even = sumOfEven(numbers);
// console.log("Sum of even numbers in an array:", even);

// // console.log(sum);

// function sumOfEven(numbers){
//     let sum = 0;
//     for (const number of numbers){
//         if (number % 2 === 0){
//             console.log(number);
//             sum = sum + number;
//         }
//     }
//     return sum;
// }
// const numbers = [10, 23, 43, 22, 65, 12, 18];
// const sum = sumOfEven(numbers);
// console.log("Sum of even numbers in an array:", sum);


function sumOfEven(numbers){
    let sum = 0;
    for (const number of numbers){
        if (number % 2 === 0){
            sum = sum + number;
        }
    }
    return sum;
}
const num = [10, 20, 11, 13, 30, 43];
const result = sumOfEven(num);
console.log("Sum of even numbers in an array:", result);
