const number = [12, 21, 11, 45, 11, 90, 80, 23, 390, 13]

function maxNum (numbers) {
    let max = numbers[0];
    for (const num of numbers) {
        if (num > max){
            max = num;
        }
    }
    return max;
}
const result = maxNum(number);
console.log(result,"is the largest number.");
