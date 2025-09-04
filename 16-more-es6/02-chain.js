const student = {
    name: 'Rifad',
    1: 50,
    marks: 100,
    family: {
        title: 'Chowdhury',
        // mother: {
        //     name: 'noor',
        //     age: 50
        // }
    },
    'home-address': 'ctg'
}
console.log(student.family.mother?.age);
