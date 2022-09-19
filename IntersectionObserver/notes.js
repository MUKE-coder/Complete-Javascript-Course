const elementBtn = document.querySelector("#targetBtn");
// new object with screen as root element
var observer = new IntersectionObserver(
  function () {
    // callback code
  },
  { root: null }
);
// observing a target element
observer.observe(elementBtn);

// root is a parent of the target element
var observer = new IntersectionObserver(
  function () {
    // callback code
  },
  { root: document.querySelector("#parent-container") }
);

// observing a target element
observer.observe(document.querySelector("#target-container"));
