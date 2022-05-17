// // CALCULATE hypotunes OF A right angled TRIANGLE GIVEN area 25 and height 5
// // step is calculate the base from area

const areaOfTriangle = 10;
const height = 3;
const baseOfTriangle = 2 * height;
// calculate c from pythogorous theorem

const hypotunes = Math.sqrt(height ** 2 + baseOfTriangle ** 2);

console.log(hypotunes);
if (hypotunes > 10) {
  console.log("triangle is big");
}
if (hypotunes < 10) {
  console.log("triangle is small");
}

// PROGRAM WHERE A USER INPUT A NUMBER AND WE TELL HIM
// THE SQUARE ROOT
// step 1, store user input
const userNumber = prompt("Enter the Number you want to Calculate square root");
//step2 CONVERT the user input into a number from string
const convertedUserNumber = Number(userNumber);

//step 3 find the sqrt of the number
const squareRoot = Math.sqrt(convertedUserNumber);

//step 4, build the answer
const answer = `The square root of ${userNumber} is ${squareRoot}`;

//show the answer to the user
// we want to put the answer in the ptag of id sqrtAnswer
const sqrtAnswerTag = document.getElementById("sqrtAnswer");

// set the value of the tag to the answer
sqrtAnswerTag.innerHTML = answer;
