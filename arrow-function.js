//function declaration.
function add(num1, num2){
    return num1 + num2;
}

//function expression.
const addition = function(num1, num2){
    return num1 + num2;
}

const result = addition(13, 52)
console.log(result);


//Arrow function
const add2 = (num1, num2) => num1 + num2;
const total = add2(15, 12)
console.log(total);

//multiply
const multiply = (a, b) => a*b;
const mult = multiply(5, 7);
console.log(mult);

//compare with arrow funtion
const isFirstBig = (x , y) => x > y;
const isBig = isFirstBig(20, 15);
console.log(isBig);


//multi line arrow function.
const doMath = (x, y) => {
    const makeDouble = x * 2;
    const againDouble = y * 2;
    const result = makeDouble + againDouble;
    return result;
}

const multiLine = doMath(4, 5);
console.log(multiLine);