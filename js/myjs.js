const check = document.querySelector("input");
const ul = document.querySelector("ul");

check.addEventListener("click", function () {
  ul.classList.toggle("slide");
});

const text = ["Full Stack Developer"];
let count = 0;
let textindex = 0;
let curent = "";
let word = "";
(function ketik() {
  if (count == text.length) {
    count = 0;
  }
  curent = text[count];
  word = curent.slice(0, ++textindex);
  document.querySelector(".ketikan").textContent = word;
  if (word.length == curent.length) {
    count++;
    textindex = 0;
  }
  setTimeout(ketik, 300);
})();

const titik = ["come", "..."];
let coun = 0;
// let b = 0;
let indexA = 0;
let first = "";
let c = "";
(function run() {
  if ((b = titik.length)) {
    coun = 0;
  }

  first = titik[coun];
  c = first.slice(0, ++indexA);

  setTimeout(run, 1000);
})();
