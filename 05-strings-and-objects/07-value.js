const person = {
    name: 'Ali Hossain',
    age: 30,
    profession: 'developer',
    salary: 40000,
    isMarried: true,
    favPlaces: ['rangamati', 'bandarban','khagrachari']
}
person.profession = 'musician';
person['profession'] = 'politician';
person['favPlaces'] = 'Saint Martin';
console.log(person);

const keyName = 'profession';
console.log(person[keyName]);
