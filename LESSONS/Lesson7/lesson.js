let text = "John Doe";
let answer1 = "It's alright";

// STRING MTHDS

// 1) LENGTH
let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = alphabets.length;

function fourChar(text) {
  length = text.length;
  if (length < 4) {
    console.log("The text must be atleast 4 characters");
  } else {
    console.log("This is Great");
  }
}
// fourChar("Muke");

let vikings = 'We are the so-called "Vikings" from the north.';

// 2) SLICE
let part = alphabets.slice(7, 13);
let part2 = alphabets.slice(-17, -7);
/**
 * If a parameter is negative, the position is counted from the end of the string.
 */
console.log(alphabets);
console.log("-----------------------------");
// console.log(part2);

let part3 = alphabets.slice(7);
// console.log(part3);
let part4 = alphabets.slice(-12);
console.log(part4);

// subString() MTHD
// extract from 7 to 13
let part5 = alphabets.substring(7, 13);
console.log(part5);
// subStr()
// extract from 7, 13 characters
let part6 = alphabets.substr(7, 13);
console.log(part6);
/**
 * Replacing String Content
The replace() method replaces a specified value with another value in a string:
 */

const stmt = "I love Python for programming";
let result = stmt.replace("/PYTHON/i", "JavaScript");
console.log(stmt);
console.log(result);

/**
 * Converting to Upper and Lower Case
A string is converted to upper case with toUpperCase():

A string is converted to lower case with toLowerCase():
 */
result = alphabets.toLowerCase();
console.log(result);
const smallCaps = "this is small caps";
result = smallCaps.toUpperCase();
console.log(result);

let text1 = "Hello";
let text2 = "World";
// let text3 = text1.concat(" ", text2);
let text3 = "Hello" + " " + "World";
console.log(text3);
/**
 * JavaScript String trim()
The trim() method removes whitespace from both sides of a string:
 */
let textWithSpacing = "      Hello World!      ";
let trimmed = textWithSpacing.trim();

let fullName = "Johnbaptist";
result = fullName.charAt(0);
console.log(result);

/**
 * JavaScript String split()
A string can be converted to an array with the split() method:
 */

const tickets = "Ordinary,VIP,Couples";
result = tickets.split(",");
console.log(result);
