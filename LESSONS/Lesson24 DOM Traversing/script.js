const component = document.querySelector(".component");
const title = component.querySelector(".componet__title");
console.log(title);

const list = document.querySelector(".list");
const listItems = list.children;
// NOTE: To convert a nodelist or HTML Collection into an array, we use array.from method
console.log(listItems);
// Converting a html collection into an arry
listItmsArray = Array.from(listItems);
console.log(listItmsArray);
listItmsArray.forEach((el) => {
  el.addEventListener("click", () => {
    alert("i am a link");
  });
});

// Select the card container
const cardContainer = document.querySelector(".cards");
const cards = cardContainer.children;

const cardsArry = Array.from(cards);
console.log(cardsArry);
//loop throough the cards array and add an eventlister
cardsArry.forEach((card) => {
  card.addEventListener("click", () => {
    alert("Open a pop up");
  });
});

const nums = [1, 2, 3, 4, 5, 6];

// Selecting
const firstCard = document.querySelector(".card");

const cardParent = firstCard.parentElement;
console.log(cardParent);
const cardParentChildren = cardParent.children;
console.log(cardParentChildren);

const firstAnchor = document.querySelector(".card a");

const anchorGrandParent = firstAnchor.closest(".cards");
console.log(anchorGrandParent);
