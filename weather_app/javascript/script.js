const button = document.querySelector("button");
const body = document.querySelector("body");
const color = [
  "red",
  "blue",
  "green",
  "white",
  "yellow",
  "black",
  "pink",
  "purple",
];

body.style.background = "grey";

button.addEventListener("click", changeB);

function changeB() {
  const colorindex = parseInt(Math.random() * color.length);
  body.style.background = color[colorindex];
}
