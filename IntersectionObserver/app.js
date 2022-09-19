// obeserver options
const observerOptions = {
  root: null,
  threshold: 0,
  rootMargin: "0px 0px -50px 0px",
};
// observer
const observer = new IntersectionObserver((entries) => {
  console.log(entries);
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

window.addEventListener("DOMContentLoaded", (event) => {
  const sections = Array.from(document.getElementsByClassName("section"));

  for (let section of sections) {
    observer.observe(section);
  }
});
