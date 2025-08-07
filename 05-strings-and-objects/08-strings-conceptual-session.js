// let firstName = 'Abul';
// firstName[0] = 'Babul'
// console.log(firstName);

// var name = 'hello'
// name = 'hi';
// console.log(name);

// var message = 'hello';
// var firstCh = message[0].toLocaleUpperCase();
// var restCh = message.slice(1);
// console.log(firstCh);
// console.log(restCh);
// console.log(firstCh.concat(restCh));

// var texts = 'I love Bangladesh';
// if (texts.includes(' ')) {
//     console.log('Found');
// }
// else {
//     console.log('Not Found');
// }


// reverse

// var texts = 'JavaScript is awesome!';
// var temp = '';
// for (var i = 0; i < texts.length; i++){
//     temp = texts[i] + temp;
// }
// console.log(temp);

// object
var person = {
    name: 'Rahim',
    age: 30,
    isStudent: true
}
// console.log(person);
// console.log(person.age);
// console.log(person['name']);
// person['age'] = 55;
// console.log(person['age']);


// // nested object
// var person2 = {
//     name: 'Rahman',
//     age: 30,
//     isStudent: true,
//     address: {
//         city: 'Dhaka',
//         country: 'Bangladesh'
//     }
// }

// console.log(person2);
// console.log(person2['address']['country']);

// // delete object key
// delete person2.age;
// console.log(person2);

// loop inside objects

for (var key in person) {
    console.log(key);
    console.log(key + ':', person[key]);
}