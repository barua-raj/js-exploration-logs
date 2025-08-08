function evenOdd(number){
    if (number % 2 === 0){
        return true;
    }
    else {
        return false;
    }
}
const result = evenOdd(13);
const result2 = evenOdd(12);
console.log(result, result2);

console.log(evenOdd(100));
console.log(evenOdd(99));

