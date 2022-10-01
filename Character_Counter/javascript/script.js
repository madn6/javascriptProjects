const textareaEl = document.getElementById("textarea");
const totalcounterEl = document.getElementById("total-counter");
const remainingcounterEl = document.getElementById("Remaining-counter");

textareaEl.addEventListener("keyup", () => {
  updateCounter();
});

function updateCounter() {
  totalcounterEl.innerHTML = textareaEl.value.length;

  remainingcounterEl.innerText =
    textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}
