// Write a function to find the area and perimeter of a Circle
// Function `circleValues()` returns the perimeter and area of the circle provided the radius as an argument for the function call.

// 1. selecting the html elements
// const inputRadius = document.querySelector("#radius");
const solutionTag = document.getElementById("solution");
const calcBtn = document.getElementById("calcBtn");

//2. Listeners
calcBtn.addEventListener("click", function () {
  const radius = document.getElementById("radius").value;
  circleValues(radius);
  document.getElementById("radius").value = "";
});

//3. Functions
function circleValues(r) {
  // 1) area = pi*r**2
  const PI = 3.14;
  const area = PI * r ** 2;
  // 1) c = 2pi*r
  const circumfrence = Math.round(2 * PI * r);
  // const circumfrence = (2 * PI * r).toFixed(3);

  const solutionStatement = ` The Area of a circle is : ${area}, And the Circumfrence is ${circumfrence}`;
  console.log(solutionStatement);
  solutionTag.innerHTML = solutionStatement;
}
