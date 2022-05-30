const loginBtn = document.getElementById("login");
const form = document.getElementById("loginForm");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".closeBtn");
console.log(overlay);
loginBtn.addEventListener("click", function () {
  // Show the form
  form.classList.add("show");
  // Show the overlay
  overlay.style.display = "block";
});
closeBtn.addEventListener("click", function () {
  // Hide the form
  form.classList.remove("show");
  // Hide the overlay
  overlay.style.display = "none";
});
