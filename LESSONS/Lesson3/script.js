function nameOfTheFunction(parameter1, parameter2, parameter3) {
  // code to be executed
}

function greetAperson() {
  console.log("Hello good morning Mr James");
}

// function analogy
function makeRolex(chapati, eggs) {
  const rolex = chapati + eggs;
  return rolex;
}

console.log();

let x = 5;

greetAperson();

function sendGreetings() {
  greetAperson();
}
// sendGreetings();

// RULES
// if the ur sales exceede 30,000 yu get a commision of 10k, if it above 50k you get 10% of the sales

function calculateCommision() {
  const jbSales = 60000;
  const samSales = 25000;
  let jbCommission = 0;
  // Let is mutable, it can change the value

  if (jbSales <= 30000) {
    jbCommission = 10000;
  } else if (jbSales > 50000) {
    jbCommission = "You have alot of commision";
  }

  console.log(jbCommission);
}
// invoking/calling the function
calculateCommision();

// Calculate the REA OF A CIRCLE
const PI = 3.14;
const radiusOfCircle = 15;

calculateAreaOfCircle();
calculateAreaOfCircle(20);
calculateAreaOfCircle(30);

function calculateAreaOfCircle(radius = 1) {
  const areaOfCircle = PI * radius ** 2;
  console.log(areaOfCircle);
}

calculateCircOfCircle();

// calculate Circumference of circle

function calculateCircOfCircle() {
  const circumferenceOfCircle = 2 * PI * radiusOfCircle;
  console.log(circumferenceOfCircle);
}
