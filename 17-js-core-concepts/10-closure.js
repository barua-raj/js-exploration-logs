// function counter() {
//     let count = 0;
//     function innerFunction (){
//         console.log('Inside the inner function, someone called me!');
//     }
//     return innerFunction;
// }
// const result = counter();
// console.log(result());

function counter() {
    let count = 10;
    return function(user) {
        count = count + 1;
        console.log('Inside the inner function', user,  count);
    }
}
// const output = counter();
// output();
// output();
// output();
const rahimCounter = counter();
rahimCounter('rahim');
rahimCounter('rahim');
rahimCounter('rahim');
rahimCounter('rahim');
console.log('--------------------');
const karimCounter = counter();
karimCounter('karim');
karimCounter('karim');
karimCounter('karim');
console.log('--------------------');
rahimCounter('rahim');
console.log('--------------------');
const jabbarCounter = counter();
jabbarCounter('Steve');