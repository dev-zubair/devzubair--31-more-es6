// const fish = { id: 59, name: 'King Hilsha', price: 9000, phone: '8080568454', address: 'Paddar par', dress: 'silver' };

// const phone = fish.phone;
// const name = fish.name;
// const price = fish.price;
// const address = fish.address;

/* const { phone, name, price, address } = fish;

console.log(phone, name);
console.log(phone);
console.log(phone, phone);
console.log(phone);
console.log(phone, price);
console.log(phone);
console.log(phone, price);
console.log(phone);
console.log(phone, address); */

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
// const work = company.web.work;
// const framework = company.web.framework;

const { food } = myCompany.ceo;
const { work, framework } = myCompany.web;
const { second, third } = myCompany.web.tech;
console.log(food, work, framework, second, third);
