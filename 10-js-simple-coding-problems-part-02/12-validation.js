// number
function multiply(num1, num2){
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "Please, provide a number!";
    }
    const mul = num1 * num2;
    return mul;
}
const result = multiply(5, '8');
console.log(result);

// string
function fullName(first, last){
    if (typeof first !== 'string'){
        return "First name should be a string!";
    }
    else if (typeof last !== 'string'){
        return "Last name should be a string!";
    }
    const full = first + ' ' + last;
    return full;
}
const resultName = fullName('Rahim', 'Uddin');
console.log(resultName);

// object
const phones = {name: 'iPhone', price: 50000, model: 15, date: '10 August, 2020'};

function phonePrice(phones){
    if (typeof phones !== 'object'){
        return "Please, provide an object!";
    }
    console.log(typeof phones);
    const price = phones.price;
    return price;
}
const resultPhones = phonePrice(phones);
console.log(resultPhones);

// array

const sampleArray = [10, 20, 60, 50, 45, 90];

function numbers(number){
    if(Array.isArray(number) === false){
        return "Please, provide an array!";
    }
    const secondItem = number[1];
    return secondItem;
}
const resultArray = numbers(sampleArray);
console.log(resultArray);
