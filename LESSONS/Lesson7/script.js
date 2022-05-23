const subscribeBtn = document.querySelector(".subscribeBtn");

// Adding an Event listener
subscribeBtn.addEventListener("click", function () {
  // 1) Change the color of the button
  if (subscribeBtn.classList.contains("grayBtn")) {
    subscribeBtn.classList.remove("grayBtn");
    subscribeBtn.innerHTML = "Subscribe";
  } else {
    subscribeBtn.classList.add("grayBtn");
    subscribeBtn.innerHTML = "Subcribed";
  }
  //

  // subscribeBtn.classList.add("grayBtn");
});
