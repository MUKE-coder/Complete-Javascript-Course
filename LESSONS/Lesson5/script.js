// Objects
// SYNTAX
const objectName = {
  key: "value",
};

// CREATING new OBJECT
//Literal Syntax:
const student = {};

//using constructor mtd
const person = new Object({});

// Initiating an Object
const computer = {
  ram: "4GB",
};

// ACCESSING VALUES IN THE OBJECT

// 1) Dot Notation
let compRam = computer.ram;
// 2) Using square brackets
const ram = computer["ram"];

// MODIFYING THE VALUES OF THE OBJECT
computer["ram"] = " 5GB";
computer.ram = "6GB";

// ADDING MORE PROPERTIES/KEYS TO THE OBJECT

computer["hardDisk"] = " 500GB";
computer.screenSize = " 32 Inches";
computer.testKey = "Testing Key";

// DELETING A KEY FROM AN OBJECT
console.log(computer);
console.log("----------------------------------");
delete computer.testKey;
console.log(computer);

// ARRAYS
// SYNTAX
const arrayName = ["item1", "item2"];

// CREATE NEW ARRAY
// 1 Literal syntax
const items = [];

const array2 = new Array();

// INITIATING AN ARRAY WITH ITEMS
const students = ["John", "adam", "Paul"];

// ADDING AN ITEM INSIDE AN ARRAY
console.log(students);
console.log("---------------------");
students.push("Alex");
console.log(students);
console.log("---------------------");
// DELETING AN ITEM FROM AN ARRAY
students.pop();
console.log(students);

// LENGTH OF AN ARRAY
const len = students.length;

// ACCESS ITEMS IN THE ARRAY
const firtPosItem = students[0];

students[0] = "Jb";
console.log(students);
const firstItem = students[0];
const lastItem = students[students.length - 1];
console.log(firstItem);
// MODIFYING/UPDATING ARRAY ELEMENTS
