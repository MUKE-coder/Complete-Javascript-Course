import birthYear, { calcArea } from "./person.js";

const areaOfCrcle = calcArea(3);

const myAge = 2022 - birthYear;

console.log(myAge);

let text =
  '{ "employees" : [' +
  '{ "firstName":"John" , "lastName":"Doe" },' +
  '{ "firstName":"Anna" , "lastName":"Smith" },' +
  '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
const obj = JSON.parse(text);
console.log(obj);
