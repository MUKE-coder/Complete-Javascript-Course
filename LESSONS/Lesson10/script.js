// Proble statement
// 1) if we click on Make square btn, the rectangle turns into a square
// 2) if we click on Make circle btn, the rectangle turns into a circle
// 3)if we click make a triangle btn , the rectangle turns into triangle
// SECLECTION
const makeSquareBtn = document.getElementById("makeSquare");
const makeCircleBtn = document.getElementById("makeCircle");
const makeTriangleBtn = document.getElementById("makeTriangle");
const bounceBtn = document.getElementById("bounce");

const rectangle = document.querySelector(".rectangle");

console.log(bounceBtn);

// EVENT LISTENERS
makeSquareBtn.addEventListener("click", makeAsquare);
makeCircleBtn.addEventListener("click", makeCircle);
makeTriangleBtn.addEventListener("click", makeTriangle);
bounceBtn.addEventListener("click", bounce);
// CALLBACK FUNCTIONS
// make a square function
function makeAsquare() {
  reset();
  rectangle.classList.toggle("square");
  if (rectangle.classList.contains("square")) {
    rectangle.textContent = "I am a Square";
  } else {
    rectangle.textContent = "I am a Rectangle";
  }
}
// reset Function
function reset() {
  rectangle.classList.remove("square", "circle", "bounce", "triangle");
}
// make a circle function
function makeCircle() {
  reset();
  makeAsquare();
  rectangle.classList.toggle("circle");
  if (rectangle.classList.contains("circle")) {
    rectangle.textContent = "I am a Square";
  } else {
    rectangle.textContent = "I am a Rectangle";
  }
}
function makeTriangle() {
  reset();
  rectangle.classList.toggle("triangle");
  if (rectangle.classList.contains("triangle")) {
    rectangle.textContent = "I am a Triangle";
  } else {
    rectangle.textContent = "I am a Rectangle";
  }
}
function bounce() {
  // removes all previous classes
  makeCircle();
  rectangle.classList.toggle("bounce");
  if (rectangle.classList.contains("bounce")) {
    rectangle.textContent = "I am bouncing";
  } else {
    rectangle.textContent = "I am a Rectangle";
  }
}
