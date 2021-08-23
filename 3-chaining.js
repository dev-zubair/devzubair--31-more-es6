// declare variable based on the name of an object property
// object theke property ke variable hisebe ber kora
const myObject = { x: 2, y: 20, z: 600, a: 50, b: 68 };
const { a, b, x } = myObject;
// console.log(a);

//Destructuring Array - amra array theke destructure korte pari
const [p, q] = [45, 38];
// console.log(p, q);


//Chaining - Nested object destructuring
const myCompany = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    }
}
// console.log(myCompany.web.tech.third);
console.log(myCompany?.backend?.tech.third);