// if the year is divisible by 4, then the year is leap year

function isLeapYear(year){
    let result;
    if(year % 100 !== 0 && year % 4 === 0){
        result = year + ' is a leap year!'
    }
    else if(year % 100 === 0 && year % 400 === 0){
        result = year + ' is a leap year!'
    }
    else {
        result = year + ' is not a leap year!'
    }
    return result;
}
const result = isLeapYear(2052);
console.log(result);