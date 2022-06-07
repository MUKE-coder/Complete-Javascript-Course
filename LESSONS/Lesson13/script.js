// Creating Elements
// creates a new div referenced in the variable 'div'
const div = document.createElement("div");

div.style.cssText = "color: white; background: blue; height:300px";
console.log(div);
// attributes include : id, class,href,value,src,type
div.setAttribute("id", "theDiv");
{
  /* <a href="https://www.google.com">Visit Google</a> */
}

// create an anchor tag element
const googleLink = document.createElement("a");

// Create an attribute href
googleLink.setAttribute("href", "https://www.google.com");
googleLink.textContent = "Visit Google";
console.log(googleLink);

// get the value of an Attribute
const href = googleLink.getAttribute("href");
console.log(href);
const theDiv = div.getAttribute("id");
console.log(theDiv);

// Delete an Attribute
div.removeAttribute("id");
console.log(theDiv);

div.classList.add("new");
// adds class "new" to your new div

div.classList.remove("new");
// removes "new" class from div

div.classList.toggle("active");
// if div doesn't have class "active" then add it, or if
// it does, then remove it

div.textContent = "Hello World!";
// creates a text node containing "Hello World!" and
// inserts it in div

div.innerHTML = "<span class='spanEle'>Hello World!</span>";
// renders the HTML inside div
console.log(div);

// your JavaScript file
const container = document.querySelector("#container");

// creat the div
const content = document.createElement("div");

// add content class to the div
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

// add a div to the container
container.appendChild(content);
container.innerHTML =
  "<div class='content'>This is the glorious text-content!</div>";

// EVENTS
function alertSomeMessage() {
  alert("Hellow world");
}
const btn = document.querySelector("#btn");
btn.addEventListener("click", alertSomeMessage);

// ARROW FUNCTIONS
// function alertSomeMessage() {
// alert("Hellow world");
// }
let alertSomeMessage = () => alert("Hellow world");
