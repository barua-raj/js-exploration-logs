// find the largest number among three numbers

function maxNum (num1, num2, num3){
    if (num1 > num2 && num1 > num3){
        return num1 +" is the largest number";
    }
    else if (num2 > num1 && num2 > num3){
        return num2 + " is the largest number";
    }
    else {
        return num3 + " is the largest number";
    }
}
const result = maxNum(234,34,21);
console.log(result);

// using Math function

const result2 = Math.max(12, 32, 5, -9, 10, -12, 123, -1, 11);
console.log(result2,"is the largest number.");
