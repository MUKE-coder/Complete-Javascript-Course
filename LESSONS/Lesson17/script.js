/**
 * JavaScript Array forEach()
The forEach() method calls a function (a callback function) once for each array element
 */
const numbers = [45, 4, 9, 16, 25];
numbers.forEach((item, index, arr) => {
  // const itemSqrt = Math.sqrt(item);
  // console.log(itemSqrt);
});
/**
 * Note that the function takes 3 arguments:

The item value
The item index
The array itself
 */

/**
 * JavaScript Array map()
The map() method creates a new array by performing a function on each array element.

The map() method does not execute the function for array elements without values.

The map() method does not change the original array.

This example multiplies each array value by 2:
 */
const numbers1 = [45, 4, 9, 16, 25];
numbers1.map((item, index, arr) => {
  const itemSqrt = Math.sqrt(item);
  console.log(itemSqrt);
});
// FILTER
const deposits = [20000, 30000, 40000, 60000, 80000];
const debtorsGreaterThan30k = deposits.filter((item, i, arr) => {
  return item > 30000;
});
console.log(debtorsGreaterThan30k);

/**
 * JavaScript Array reduce()
The reduce() method runs a function on each array element to produce (reduce it to) a single value.

The reduce() method works from left-to-right in the array. See also reduceRight().
Note that the function takes 4 arguments:

The total (the initial value / previously returned value)
The item value
The item index
The array itself
The example above does not use the index and array parameters. It can be rewritten to: 
*/
const numbersArr = [45, 4, 9, 16, 25];
let sum = numbersArr.reduce(myFunction, 0);

function myFunction(total, value, index, array) {
  return total + value;
}
console.log(sum);

// EVERY
const numbersEvery = [45, 4, 9, 16, 25];
let allOver18 = numbersEvery.every(everyFunction);

function everyFunction(value, index, array) {
  return value > 18;
}

let someOver18 = numbersEvery.some(everyFunction);
let findOver18 = numbersEvery.find(everyFunction);

const liTags = document.querySelectorAll("li");
const arrOfLiTags = Array.from(liTags);
console.log(liTags);
console.log(arrOfLiTags);
arrOfLiTags.map((item) => {
  item.style.color = "red";
});

// includes
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.includes("Mango"); // is true

const d = new Date();
console.log(d);
