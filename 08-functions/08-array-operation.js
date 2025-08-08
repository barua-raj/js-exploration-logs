// write a function to get sum of all numbers in an array

function sumOfNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number;
    }
    return sum;
}
const nums = [23, 21, 45, 4, 7, 90];
const sum = sumOfNumbers(nums);
console.log("Sum of numbers is:", sum);