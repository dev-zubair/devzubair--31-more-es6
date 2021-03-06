const numbers = [5, 13, 7, 41, 30, 5, 2, 19];

const bigNumbers = numbers.filter(number => number > 20);
// console.log(bigNumbers);
const smallNumbers = numbers.filter(number => number < 10);
// console.log(smallNumbers);


const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];
const expensiveProduct = products.filter(product => product.price > 100);
console.log(expensiveProduct);

const colors = products.filter(product => product.color == 'pink');
console.log(colors);

const searchProduct = products.find(product => product.color == 'white');
console.log(searchProduct);