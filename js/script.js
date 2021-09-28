const text = ["Web Developer", "Freelancer"];
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

const titik = ["....", "..."];
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

  document.querySelector(".titik").textContent = c;

  if (c.length == first.length) {
    c++;
    indexA = 0;
  }
  setTimeout(run, 1000);
})();

const menuMobile = document.querySelectorAll(".sidebar ul li a");
menuMobile.forEach(function (e) {
  e.addEventListener("click", function () {
    check.classList.remove("check");
  });
});

const tambahClass = document.querySelector(".mobile-menu");
tambahClass.addEventListener("mouseover", function () {
  check.classList.add("check");
});

//membuat hilight pada setiap judul

const judul = document.querySelectorAll("#judul");
menuMobile.forEach(function (e) {
  e.addEventListener("click", function () {
    judul.forEach(function (j) {
      // console.log(j.textContent);
      j.classList.add("warna");
    });
  });
});
