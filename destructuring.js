// const product = {name: 'shirt', price: 500, quantity: 7};

// const price = product.price;

// const discount = price * 20 / 100;
// const yourPay = price - discount;
// const vatAmount = price * 7 / 100;
// const totalAmount = yourPay + vatAmount;
// console.log(totalAmount);



//Object Destructuring with Default Value
const {price, quantity, tax = 10} = {name: 'shirt', price: 500, quantity: 7};
console.log(price, quantity, tax);


//type 2
const divice ={name:'phone', brand: 'samsung', price: 15400};
const {brand}=divice;


//array destructuring
const numbers = [56, 65, 35, 56]
const [first, second] = numbers;
const [math, physics] = [90, 95]
console.log(math, physics);
