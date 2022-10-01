const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const ques = document.getElementById("question");

const inputEl = document.getElementById("input");

const scoreEl = document.getElementById("score");

const formEl = document.getElementById("form");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

scoreEl.innerText = `score: ${score}`;

ques.innerText = `what is ${num1} multiply by ${num2} ?`;

const corAns = num1 * num2;

formEl.addEventListener("submit", () => {
  const useAns = +inputEl.value;
  if (useAns === corAns) {
    score++;
    updateLocalStroage();
  } else {
    score--;
    updateLocalStroage();
  }
});

function updateLocalStroage() {
  localStorage.setItem("score", JSON.stringify("score"));
}
