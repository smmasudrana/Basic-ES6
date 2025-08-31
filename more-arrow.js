const getTax = (amount, taxRate) => amount* taxRate /100;
const add = (p, q) => p + q;

//single parameter.
const getSquare = (x) => x * x;
const getHalf = num => num / 2;

console.log(getSquare(8));
console.log(getHalf(18));

//-----------------
const firstElement = nums => nums[0];
console.log(firstElement([5, 65, 78, 68]))

const logIt = () => console.log(78);
logIt();


//anonymous function
document.getElementById('btn').addEventListener('click', () =>{
    
})

document.getElementById('btn-click').addEventListener('click', event => {

})
