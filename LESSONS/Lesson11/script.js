// We want to recieve data from the browser and we store it in variables
// -username , email and profession

// 1) Recieving data and storing it in Variables
const userNameInput = prompt("What is your Full name?");
const emailInput = prompt("Please Enter email");
const professionInput = prompt("What is your Profession");

// We want to send the data to HTML
// Select HTML ELEMENTS and sending data to html
document.querySelector(".name").textContent = userNameInput;
document.querySelector(".email").textContent = emailInput;
document.querySelector(".profession").textContent = professionInput;
