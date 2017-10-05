// fsmenu

var hamburger = document.querySelector(".hamburger"),
fsmenu = document.querySelector(".fsmenu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  fsmenu.classList.toggle("fsmenu--open");
});