// type coercion : converts type

// console.log(2 == 2);
// console.log(2 == '2');
// console.log(2 === 12);
// console.log(2 === 1);
// console.log(true == 1);
// console.log(false == 0);
// console.log(true == '1'); // true (1) == '1'  -->  1 == 1
// console.log(false == '0'); // false (0) == '0'  --> 0 == 0
// console.log(null == undefined);
// console.log(NaN == NaN);
// console.log(NaN === NaN);
// console.log([] == '');
// console.log([4] == '4'); // first it converts the [4] to .toString(), it becomes 4, then converts '4' into number 4, so true
console.log({} == {}); // for non-primitive, it will check not only value, but also check the reference
console.log([] == []); // same as {} == {} as described above

const a = [2, 3, 4, 5];
const b = a;
console.log(a == b);

