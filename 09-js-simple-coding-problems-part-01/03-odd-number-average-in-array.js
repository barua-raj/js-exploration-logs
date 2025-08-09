// Calculate the average of the odd numbers in an array

function oddNumberAverage(numbers){
    let sum = 0;
    let numberLength = 0;
    for(const number of numbers) {
        if (number % 2 === 1){
            sum = sum + number;
            numberLength = numberLength + 1;
        }
    }
    const average = sum / numberLength;
    return average;
}
const arrayNumber = [42, 13, 58, 65, 81, 96, 7];
const result = oddNumberAverage(arrayNumber);
console.log("Average of the odd numbers of the array is:", result);


// function oddNumberAverage(numbers){
//     const oddNumbers = [];
//     for (const number of numbers) {
//         if (number % 2 === 1){
//             oddNumbers.push(number);
//         }
//     }
//     let sum = 0;
//     for (const num of oddNumbers){
//         sum = sum + num;
//     }
//     const count = oddNumbers.length;
//     const average = sum / count;
//     return average;
// }
// const arrayNumbers = [42, 13, 58, 65, 81, 96, 7];
// const result = oddNumberAverage(arrayNumbers);
// console.log("Average of the odd numbers of the array is:", result);
