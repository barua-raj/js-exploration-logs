// condition ? do when true : do when false

let age = 8;
age > 18 ? console.log("Vote") : console.log("No Vote");

let price = 100;
const isLeader = false;

if (isLeader === true){
    price = 50;
}
else {
    price = price + 10;
}
console.log(price);

price = isLeader === true ? 25 : price + 100;
console.log(price);