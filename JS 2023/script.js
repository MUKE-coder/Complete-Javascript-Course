const x = 30;
const y = 40;

// if (x > 30 || y == 40) {
//   console.log("X is greater than 30");
// } else {
//   console.log("X is less than 30");
// }
// let max;
// if (x > y) {
//   max = x;
// } else {
//   max = y;
// }
let max = x > y ? x : y;
console.log(max);

const day = "Tuesday";
switch (day) {
  case "Monday":
    console.log("The day is Monday");
    break;
  case "Tuesday":
    console.log("The day is Tuesday");
    break;
  case "Wednesday":
    console.log("The day is Wednesday");

  default:
    console.log("The day is Sunday");
    break;
}
const squares = [];
// for (let student = 0; student <= 10; student++) {
//   const sq = student ** 2;
//   squares.push(sq);
// }
// console.log(squares);

let student = 0;

// while (student <= 10) {
//   const sq = student ** 2;
//   squares.push(sq);
//   student++;
// }

do {
  const sq = student ** 2;
  squares.push(sq);
  student++;
} while (student <= 10);
console.log(squares);

const person = {
  name: "John",
  age: 30,
  job: "developer",
  friends: ["John", "Ronald", "Irad"],
  bithYear: function () {
    console.log(2023);
  },
};
for (let prop in person) {
  console.log(prop, person[prop]);
}

var numbers = [1, 2, 3, 4, 5];

for (var num of numbers) {
  console.log(num);
}

const characters = "JavaScript";

for (let character of characters) {
  if (character == "S") {
    continue;
  }
  console.log(character.toUpperCase() + ",");
}
