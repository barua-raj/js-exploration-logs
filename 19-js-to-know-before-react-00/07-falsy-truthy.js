const value = 0;

// if (value) {
//     console.log("Its truthy");
// }
// else {
//     console.log("It's Falsy");
// }

// value ? console.log("Truthy") : console.log("Falsy");

// const num = 5;

// const result = (num >= 10 && num < 30) ? "True" : "False";
// console.log(result);

// const isActive = false;
// console.log(!isActive);

const isActive = true;

const showUser = () => console.log("green");
const hideUser = () => console.log("red");

// isActive ? showUser() : hideUser();

isActive && showUser();
isActive || hideUser();