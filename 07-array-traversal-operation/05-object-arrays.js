const numbers = [1, 2, 3, , 43, 34, 65, 98];
const players = [{}, {}, {}];
const employees = [
    {name: 'Abul', designation: 'Content Developer', salary: 25000},
    {name: 'Babul', designation: 'Developer', salary: 29000},
    {name: 'Abdul Karim', designation: 'Software Engineer', salary: 35000}
]
// console.log(employees[1].designation);
// console.log(employees[2].name);

for (const employee of employees) {
    console.log(employee.name);
}

for (const emp of employees) {
    console.log(emp.name, emp.salary);
}

for (const empTemp of employees) {
    const person = empTemp;
    const personInfo = person.name + ': ' + person.salary;
    console.log(personInfo);
}

const examMarks = [
    [98, 87, 45, 96, 12],
    [52, 63, 95, 12, 52],
    [12, 65, 32, 78, 25],
    [14, 32, 96, 47, 85]
]
// console.log(examMarks[2]);
// console.log(examMarks[1][3]);

examMarks[2][4] = 100;
console.log(examMarks);




