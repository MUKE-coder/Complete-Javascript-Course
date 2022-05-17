// SELECTING HTML ELEMENTS
const signupBtn = document.getElementById("signupBtn");
const body = document.getElementById("body");

// EVENTS
// CLICK EVENT
signupBtn.addEventListener("click", changeBackground);

// FUNCTION
function changeBackground() {
  console.log("you have clicked me");
  body.style.backgroundColor = "red";
}
