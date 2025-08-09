// function inchToFeet(inch){
//     const feet = inch / 12;
//     return feet;
// }
// const shuvoFeet = inchToFeet(75);
// console.log(shuvoFeet);

// method 02

function inchToFeet(inch){
    const feet = inch / 12;
    const feetIntNumber = parseInt(feet);
    const feetRemaining = inch % 12;
    const result = feetIntNumber + ' feet ' + feetRemaining + ' inch';
    return result;
}
const result1 = inchToFeet(75);
console.log(result1);

// miles to km

function milesToKm(miles){
    const kiloMeters = miles * 1.60934;
    return kiloMeters;
}
const result2 = milesToKm(1200);
console.log(result2.toFixed(2),'km');

// km to miles

function kmToMiles(km){
    const miles = km * 0.621371;
    return miles;
}
const result3 = kmToMiles(2309);
console.log(result3.toFixed(2), 'miles');

