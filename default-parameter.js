/**
 * here =0 id default parameter when you have just 1 parameter its not show undefined.
 * sum --> 0
 * substract --> 0
 * multiply --> 1
 * string --> ' '
 * array --> []
 * object --> {}
 */


//for sum
function sum (num1, num2 = 0){       
    const total = num1 + num2;
    console.log(total);
}

sum(10, )


//for multiply
function multiply(num1 = 1, num2 = 1){
    const result = num1 * num2;
    console.log(result);
}

multiply(10)


//string
function fullName(first, last = ''){
    const name = first + '' + last;
    console.log(name);
}

fullName('kamruzzaman');