let person = {
  first_name: "Mukul",
  last_name: "Latiyan",

  //method
  getFunction: () => {
    return `The name of the person is
        ${person.first_name} ${person.last_name}`;
  },
  //object within object
  phone_number: {
    mobile: "12345",
    landline: "6789",
  },
};

const phoneNumber = person.phone_number.mobile;
const fullName = person.getFunction();
// console.log(fullName);
// Defining class using es6
class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }
  getDetails() {
    return `The name of the bike is ${this.name}.`;
  }
}
// Creating an Instance of Vehicle
const BMW = new Vehicle("BMW", "Benz", "20190c");
console.log(BMW.name);
