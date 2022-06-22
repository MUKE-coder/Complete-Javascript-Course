const currentImg = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.6;
// set the first image to opacity .6
imgs[0].style.opacity = opacity;
imgs.forEach((img) => img.addEventListener("click", imgClick));

function imgClick(e) {
  // reset opacity & fadein
  imgs.forEach((img) => (img.style.opacity = 1));

  //Change the img
  currentImg.src = e.target.src;
  // add fade-In to the currentImg
  currentImg.classList.add("fade-in");
  // Remove the class after .5s

  setTimeout(() => {
    currentImg.classList.remove("fade-in");
  }, 500);
  //the opacity of the selected img
  e.target.style.opacity = opacity;
}
