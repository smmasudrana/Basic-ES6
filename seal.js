const employee = {
    name: 'raj rani',
    designation: 'QA',
    salary: 20000,
    experience: 2,
    age: 22,
}

Object.seal(employee);
delete employee.experience;
employee.salary = employee.salary + 5000;
employee.location = 'Dhaka';
console.log(employee);