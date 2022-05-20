// ARRAY METHODS

/* toString() Method
Converting Arrays to Strings
The JavaScript method toString() converts an array to a string of (comma separated) array values.
*/
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let result = fruits.toString();
console.log(result);

/*join() Method
The join() method also joins all array elements into a string.
It behaves just like toString(), but in addition you can specify the separator:
*/
result = fruits.join(" 🤣 ");
console.log(result);

/*
Popping and Pushing
When you work with arrays, it is easy to remove elements and add new elements.

This is what popping and pushing is:

Popping items out of an array, or pushing items into an array.
 */

/** The pop() method
 * The pop() method removes the last element from an array:
 */
fruits.pop();
console.log(fruits);
/** The push() method
 * The push() method adds a new element to an array (at the end):
 */
fruits.push("Kiwi");
console.log(fruits);
/**
 * Shifting Elements
Shifting is equivalent to popping, but working on the first element instead of the last.
 The shift() method removes the first array element and "shifts" all other elements to a lower index.
*/
fruits.shift();
/**
 * The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
 */
fruits.unshift("Lemon");
console.log(fruits);

/**
 * JavaScript Array length
The length property provides an easy way to append a new element to an array:
 */
const fruitLen = fruits.length;
console.log(fruitLen);
fruits[fruitLen] = 10;
console.log(fruits);
// DELETING ARRAY ELEMENTS
// delete fruits[4];
console.log(fruits);
/*
Warning !
Array elements can be deleted using the JavaScript operator delete.

Using delete leaves undefined holes in the array.

Use pop() or shift() instead.
*/

/*
Merging (Concatenating) Arrays
The concat() method creates a new array by merging (concatenating) existing arrays:
*/
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);
/**
 * Splicing and Slicing Arrays
The splice() method adds new items to an array.

The slice() method slices out a piece of an array.
The splice() method can be used to add new items to an array:
 */
console.log(fruits);
console.log(".....................................");
fruits.splice(2, 0, "Ovacado", "Berries");
console.log(fruits);
/**
 * The first parameter (2) defines the position where new elements should be added (spliced in).

The second parameter (0) defines how many elements should be removed.

The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

The splice() method returns an array with the deleted items:

 */
/**
 * Using splice() to Remove Elements
With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:
 */
fruits.splice(2, 1);
console.log(fruits);
/**
 * The first parameter (0) defines the position where an element(s) should be removed.

The second parameter (1) defines how many elements should be removed.
 */
const newArray = fruits.slice(1);
console.log(fruits);
console.log("------------------------");
console.log(newArray);
/**
 * Sorting an Array
The sort() method sorts an array alphabetically:
 */
fruits.sort();
// Revering an array
fruits.reverse();

// SORTING NUMERIC VALUES
const points = [40, 100, 1, 5, 25, 10];
// ascending order
result = points.sort(function (a, b) {
  return a - b;
});
// descending order
result = points.sort(function (a, b) {
  return b - a;
});
console.log(result);

// FINDING A MAX NUMBER IN THE ARRAY
function myArrayMax(array) {
  return Math.max.apply(null, array);
}
function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}
result = myArrayMin([1, 6, 8, 91]);
console.log(result);
