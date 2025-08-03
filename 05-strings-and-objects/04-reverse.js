const sentence = 'I am learning JAVASCRIPT for the last two months!';
// console.log(sentence);

// let reverse = '';
// for (const letter of sentence) {
    // console.log(letter);
    // reverse = letter + reverse;
// }
// console.log(reverse);

let reverse = '';
for (let i = 0; i < sentence.length; i++) {
    // console.log(i);
    // console.log(sentence[i]);
    const letter = sentence[i];
    reverse = letter + reverse;
}
console.log(reverse);



const rev = sentence.split('').reverse().join('');
console.log(rev);
