/**
User enters the answer
we store the answer in the variable

so we calculate the correct answer

compare the user answer with the correct answer after the user clicks on submit

if the user answer is correct, we them they win otherwise they loose
*/

// Selecting the question elements
const firstNumber = document.querySelector(".firstNumber").textContent;
const secondNumber = document.querySelector(".secondNumber").textContent;

// Computing the answer to the question
const answer = firstNumber * secondNumber;
console.log(answer);

// Store the user answer
// SELECT The submit buttopn
const submitBtn = document.getElementById("submit");
const feedback = document.getElementById("feedback");
submitBtn.addEventListener("click", function (e) {
  //  e stand for event
  // prevent the default behaviour of the form, to submit
  e.preventDefault();

  // Store user answer
  const userAnwer = document.querySelector(".answer").value;
  const successDiv = document.querySelector(".successDiv");
  const failDiv = document.querySelector(".failDiv");
  // compare user answer with our answer
  const body = document.querySelector("body");
  function reset() {
    failDiv.style.display = "none";
    successDiv.style.display = "none";
    feedback.classList.remove("success");
    feedback.classList.remove("fail");
    body.style.backgroundColor = "";
  }
  function loose() {
    feedback.classList.add("fail");
    feedback.textContent = "Answer is incorrect";
    failDiv.style.display = "block";
    body.style.backgroundColor = "black";
  }
  function win() {
    feedback.classList.add("success");
    feedback.textContent = "Answer is correct";
    // show success div
    successDiv.style.display = "block";
    body.style.backgroundColor = "yellow";
  }

  if (userAnwer == answer) {
    reset();
    win();
  } else {
    reset();
    loose();
  }
});
