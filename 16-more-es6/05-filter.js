// const numbers = [1, 10, 5, 40, 50];
// const result = numbers.filter(num => num > 10);
// console.log(result);
// const evenNumber = numbers.filter(num => {
//     if (num % 2 === 0) {
//         console.log(num);
//     }
// })

const numbers = [1, 10, 5, 40, 50];
const evenNumber = numbers.find(num => {
    if (num % 2 === 0) {
        console.log(num);
        return num;
    }
})