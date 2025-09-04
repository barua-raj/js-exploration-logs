const employee = {
    name: 'abul',
    designation: 'designer',
    salary: 20000,
    experience: 1,
    age: 22
}
// delete employee.experience;
Object.seal(employee);
employee.salary = employee.salary + 5000;
employee.location = 'Dhaka';
console.log(employee);