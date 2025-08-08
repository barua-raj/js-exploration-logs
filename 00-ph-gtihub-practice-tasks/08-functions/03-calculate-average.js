// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(number){
    const lengthOfNumbers = number.length;
    let sum = 0;
    for (const num of number){
        sum = sum + num;
    }
    const average = sum / lengthOfNumbers;
    return average;
}
const arrayOfNumbers = [12, 24, 10, 20, 50, 40];
const result = make_avg(arrayOfNumbers);
console.log(result);