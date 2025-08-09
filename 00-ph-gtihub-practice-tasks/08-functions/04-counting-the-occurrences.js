// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(character){
    let zeroCount = 0;
    // let lengthOfChar = character.length;
    for (let i = 0; i < character.length; i++){
        if (character[i] === '0'){
            zeroCount = zeroCount + 1;
        }
    }
    return zeroCount;
}
const countZero = '11100010101000';
const finalCount = count_zero(countZero);
console.log(finalCount);
