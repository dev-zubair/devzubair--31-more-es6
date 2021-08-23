// 1. let and const
const wife = 'Parul Akther';
let phone = '01619141476';
const myBaby = 'Fatima Tuz Zahra';
phone = '01715009322';
console.log(phone);

// 2. Default Parameter


// 3. Template String
const myLife = `My wife name is ${wife} and ${myBaby} is my daughter`;
console.log(myLife);

// 4. Arrow Function
const square = x => x * x;
console.log(square(8));

// Wathout Arrow function
function square1(x) {
    return x * x;
}
console.log(square1(5));