// for loop
// syntax
// for(initiation;condition; expression){
//   //
// }
for (let day = 1; day <= 7; day++) {
  // console.log(day);
}
//
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// console.log(arr.length);
// ARe used when when we know the number of iteration
for (i = 0; i <= 10; i += 3) {
  // console.log(i);
}

// console.log("print page 1");
// console.log("print page 2");
// console.log("print page 3");
// console.log("print page 4");
// console.log("print page 5");
// console.log("print page 6");
// console.log("print page 7");
// console.log("print page 8");
// console.log("print page 9");
// console.log("print page 10");
// while Loop

let num = 1;
// while (num <= 10) {
//   console.log(`print page ${num}`);
//   num++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);
while (dice !== 6) {
  console.log(dice);
  dice = Math.trunc(Math.random() * 6) + 1;
}

let day = "tuesday";

switch (day) {
  case "monday":
    console.log("Its Monday");
    console.log("Go Pitching");
    break;
  case "tuesday":
    console.log("Its Tuesday");
    console.log("Go coding");
    break;
  default:
    console.log("Invalid date");
    break;
}

// if (day == "monday") {
//   console.log("Its Monday");
//   console.log("Go Pitching");
// } else if (day == "tuesday") {
//   console.log("Its Tuesday");
//   console.log("Go Coding");
// } else if (day == "wed") {
//   console.log("Its wed");
//   console.log("Go Hunting");
// } else {
//   console.log("Invalid date");
// }
