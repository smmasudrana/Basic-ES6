const employee = {
    name: 'raj rani',
    designation: 'QA',
    salary: 20000,
    experience: 2,
    age: 22,
};

for(const key in employee){
    const value = employee[key];
    console.log(key, value);
}

//----------------------
const key = Object.keys(employee);
for(const key of keys){
    const value = employee[key];
}