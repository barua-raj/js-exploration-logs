const name = 'Tom';
if (true) {
    const data = 34;
    console.log("Inside the if block", data, name);   
    doMath(2, 4);
}
// console.log(data);

// while (true) {

// }

// for (const num of [1, 2, 3, 4]) {

// }
// function scope or local scope
function doMath(a, b) {
    console.log(a, b);
    const sum = a + b;
    const total = sum + 10;
    function doubleIt(x) {
        return x * 2;
    }
    console.log(doubleIt(30));
}
// console.log(a, b);
