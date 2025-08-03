const school = 'Nasirabad High School, Chittagong';
console.log(school);
console.log(school.toUpperCase());


const subject = 'Chemistry';
const book = 'chemistry';

if (subject.toLowerCase() === book.toLowerCase()) {
    console.log("Both are same!");
}
else {
    console.log("Both are not the same!");
}

const drink = 'water  ';
const drinkType = 'water      ';

if (drink.trim() === drinkType.trim()) {
    console.log("Both are same!");
}
else {
    console.log("Both are not same!");
}