class Support {
   name;
   address = 'BD';
   constructor(name, address) {
      this.name = name;
      this.address = address;
   }
   role = 'Support Web Dev';
   startSession() {
      console.log(this.name, 'Start a support Session');
   }
}

const aamir = new Support('Aamir Khan', 'BD');
const salman = new Support('Solaiman Khan', 'Dubai');
const sharuk = new Support('SRK Khan', 'Dubai');
const akshay = new Support('Akshay Kumar', 'Dubai');
aamir.startSession();
salman.startSession();
console.log(aamir, salman, sharuk, akshay);
// console.log(salman);