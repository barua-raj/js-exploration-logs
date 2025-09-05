const students = [
    { id: 1, name: 'abul', marks: 50 },
    { id: 2, name: 'nabul', marks: 55 },
    { id: 3, name: 'kabul', marks: 95 },
    { id: 4, name: 'dabul', marks: 15 }
]
// map
const names = students.map(student => student.name);
console.log(names);
const marks = students.map(student => student.marks - 10);
console.log(marks);
// filter
const marksGreaterThanFifty = students.filter(student => student.marks > 50);
console.log(marksGreaterThanFifty);
// find
const firstGoodStudent = students.find(student => student.marks > 50);
console.log(firstGoodStudent);
