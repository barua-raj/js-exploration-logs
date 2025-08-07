const numbers = [60, 15, 12, 63, 78, 95, 45];
numbers.sort();
console.log(numbers);

const friends = ['Sakib', 'Rakib', 'Akib', 'Alif'];
friends.sort();
console.log(friends);

const ages = [1, 5, 100, 25, 85, 12, 6];
// console.log(ages);
// ages.sort();
// console.log(ages);


const sorted_ages_asc = ages.sort(function(a, b) {return a - b});
console.log(sorted_ages_asc);

const sorted_ages_desc = ages.sort(function(a, b) {return b - a});
console.log(sorted_ages_desc);