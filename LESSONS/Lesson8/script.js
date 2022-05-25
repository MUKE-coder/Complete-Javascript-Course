const subscribeBtn = document.querySelector(".subscribeBtn");
const notificationBox = document.querySelector(".notification-box");
// Adding an Event listener
subscribeBtn.addEventListener("click", function () {
  // 1) Change the color of the button
  if (subscribeBtn.classList.contains("grayBtn")) {
    unSubscribe();
  } else {
    subscribe();
  }

  // subscribeBtn.classList.add("grayBtn");
});

function unSubscribe() {
  subscribeBtn.classList.remove("grayBtn");
  notificationBox.classList.remove("hide");
  notificationBox.innerHTML = "You have UnSubscribed";
  setTimeout(() => {
    notificationBox.classList.add("hide");
  }, 4000);
  subscribeBtn.innerHTML = "Subscribe";
}
function subscribe() {
  subscribeBtn.classList.add("grayBtn");
  subscribeBtn.innerHTML = "Subscribed";
  notificationBox.classList.remove("hide");
  notificationBox.innerHTML = "You have Subscribed";
  setTimeout(() => {
    // console.log("I have waited 3 seconds");
    notificationBox.classList.add("hide");
  }, 4000);
}
