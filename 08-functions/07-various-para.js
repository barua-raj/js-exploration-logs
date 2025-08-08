// for a given string, tell me whether it has even number of characters or not

function eveSizedString(str){
    const sizeOfString = str.length;
    console.log(str, sizeOfString);
    if (sizeOfString % 2 === 0){
        console.log("Even");
        return true;
    }
    else {
        console.log('Odd');
        return false;
    }
}
eveSizedString('I am not finishing this today!');
eveSizedString('I am finishing this today');

console.log('\n');

function dobuleOrTriple(number, character){
    if (character === true) {
        const result = character * 2;
        return result;
    }
    else {
        const result = character * 3;
        return result;
    }
}
dobuleOrTriple((5, true));

function numOfElements(numbers){
    const length = numbers.length;
    console.log(length);
    return length;
}
numOfElements([12, 34, 21, 5, 90, 78, 10]);