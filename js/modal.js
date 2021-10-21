const detail = document.querySelectorAll(".detail");
const wraper = document.querySelector(".modal-wrapper");
const boxWrapper = document.querySelector(".box-wrapper");
detail.forEach(function (b) {
  b.addEventListener("click", function () {
    wraper.classList.toggle("open");
  });
  if (b.getAttribute("data-detail") == "mayora") {
    console.log("haloo");
  }
});

const tutup = document.querySelector("#tutup");
tutup.addEventListener("click", function () {
  wraper.classList.toggle("open");
});
