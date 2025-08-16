const nayok = {
    name: 'Abul Hasan',
    id: 130,
    address: 'Dhaka',
    isSingle: true,
    friends: ['Mamun', 'Rahim', 'Salman', 'Amir'],
    movies: [{name: 'Number 01', year: 2010}, {name: 'King Khan', year: 2020}],
    act: function(){
        console.log('Acting like Sakib Khan');
    },
    car: {
        brand: 'BMW',
        price: 10000000,
        madeYear: 2020,
        manufacturer: {
            name: 'BMW',
            ceo: 'Unknown',
            country: 'UK'
        }
    }
}
// console.log(student.car.manufacturer.name);
nayok.act();
console.log(nayok.act);