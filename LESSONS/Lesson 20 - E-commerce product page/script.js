// select the displayed Image
const displayedImage = document.getElementById("displayedImage");
console.log(displayedImage.src);
// Select the images
const images = document.querySelectorAll(".image img");
console.log(images);
images.forEach((image) => {
  image.addEventListener("click", displayAsMainImage);
});
function displayAsMainImage(e) {
  images.forEach((image) => image.classList.remove("active"));
  displayedImage.src = e.target.src;
  e.target.classList.add("active");
}
