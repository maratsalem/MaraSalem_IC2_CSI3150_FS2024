const revealA = document.getElementById("reveal-a");
const revealB = document.getElementById("reveal-b");
const revealC = document.getElementById("reveal-c");

const hideA = document.getElementById("hide-btn-a");
const hideB = document.getElementById("hide-btn-b");
const hideC = document.getElementById("hide-btn-c");

const divA = document.getElementById("image-result-a");
const divB = document.getElementById("image-result-b");
const divC = document.getElementById("image-result-c");

function hideDiv(div) {
  div.style.visibility = "hidden";
}

function revealDiv(div) {
  div.style.visibility = "visible";
}

revealA.addEventListener("click", function () {
  revealDiv(divA);
});

revealB.addEventListener("click", function () {
  revealDiv(divB);
});

revealC.addEventListener("click", function () {
  revealDiv(divC);
});

hideA.addEventListener("click", function () {
  hideDiv(divA);
});

hideB.addEventListener("click", function () {
  hideDiv(divB);
});

hideC.addEventListener("click", function () {
  hideDiv(divC);
});
