    // method 01
// const numbers = [25, 5, 10, 30];
// const doubledNumber = [];
// for (const num of numbers) {
//     const result = num * 2;
//     doubledNumber.push(result);
// }
// console.log(numbers);
// console.log(doubledNumber);

    // method 02
// const numbers = [25, 5, 10, 30];
// const doubleIt = x => x * 2;
// const doubledNumber = numbers.map(doubleIt);
// console.log(doubledNumber);

    // method 03
// const numbers = [25, 5, 10, 30];
// const doubledNumber = numbers.map(x => x * 2);
// const fiveTimes = numbers.map(x => x * 5);
// console.log(doubledNumber);
// console.log(fiveTimes);

//     // method 04
// const numbers = [25, 15, 65, 100];
// const square = numbers.map(num => num * num);
// console.log(square);

// mapping in strings

// const friends = ['karim', 'rahim', 'abul', 'babul', 'rahmat'];
// const nameLength = friends.map(name => name.length);
// console.log(nameLength);

const numbers = [25, 5, 10, 30];
const friends = ['karim', 'rahim', 'abul', 'babul', 'rahmat'];
const firstLetter = friends.map(letter => letter[0].toUpperCase());
const result = numbers.map((num, index) =>{
    console.log(num * index);
    return index;
    
})
console.log(firstLetter);