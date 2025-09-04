const student = {
    name: 'Rifad',
    1: 50,
    marks: 100,
    'home-address': 'ctg'
}
const studentName = student.name;
const studenTOne = student['1'];
console.log(student['home-address']);

for (const key in student) {
    const value = student[key];
}

const propName = 'marks';
console.log(student[propName]);
