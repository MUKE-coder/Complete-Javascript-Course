const colors = ["green", "blue", "purple", "rgb(0, 255, 251)", "#009eeb"];
const colorPallet = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
// hexColor =#B02345
// Selecting Buttons
const generateBtn = document.getElementById("generateColor");
const clipBoardBtn = document.getElementById("clipBoard");
const body = document.querySelector("body");
const hexColor = document.getElementById("hexColor");
const alert = document.getElementById("alert");
generateBtn.addEventListener("click", () => {
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode += colorPallet[generateRandomNumber()];
  }
  console.log(hexCode);
  body.style.backgroundColor = hexCode;
  hexColor.textContent = hexCode;
});

clipBoardBtn.addEventListener("click", copyToClipboard);

function generateRandomNumber() {
  const randNumber = Math.floor(Math.random() * colors.length);
  return randNumber;
}
console.log(hexColor.textContent);

function copyToClipboard() {
  const textToCopy = hexColor.textContent;
  navigator.clipboard.writeText(textToCopy).then(() => {
    alert.style.right = "10%";
    setTimeout(() => {
      alert.style.right = "-100%";
    }, 3000);
  });
}
