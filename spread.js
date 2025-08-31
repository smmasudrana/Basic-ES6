const numbers = [87, 64, 52]
console.log(numbers);
console.log(...numbers);

const max = Math.max(...numbers);
console.log(max);


//-----------------
const first = [1, 2, 3, 4, 5]
const second = [...first];
second.push(6)
console.log(first);
console.log(second);


//----------------
const ages = [45, 66, 66]
const price = [13, 65, 45]
const all = [...ages, 55, ...price]
console.log(all);


//-----------------
const person = {name: 'mijan', age: 25}
const employee = {designation: 'dev', ...person};
console.log(employee);


//
const total = (a, b, c, d) => a + b + c + d;
const result = total(46, 65, 15, 13);
const digit = [45, 65, 32]
total(...digit);
console.log(result);
console.log(total);