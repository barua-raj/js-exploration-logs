const abulAge = 30;
const babulAge = 22;
if (abulAge > babulAge){
    console.log("Abul will get the prize!");
}
else {
    console.log("Bablu will get the prize!");
    
}

// find the largest number

function maxNum(num1, num2) {
    
    if (num1 > num2){
        return num1 + " is the largest number.";
    }
    else {
        return num2 + " is the lowest number.";
    }
}
const result = maxNum(45, 65);
console.log(result);
