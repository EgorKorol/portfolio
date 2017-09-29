// flipper welcome page
var flipper = document.querySelector(".flipper"),
  button = document.querySelector(".autorization-btn"),
  flipBack = document.querySelector('.nav-menu__link--flipback-js');

button.addEventListener("click", function () {
    flipper.style.transform = "rotateY(180deg)";
    button.style.cursor = "auto";
    button.classList.toggle("autorization-btn--active");
  }),

  flipBack.addEventListener("click", function (e) {
    e.preventDefault();
    flipper.style.transform = "";
    button.classList.toggle("autorization-btn--active");
  });


//hamburger transform
// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function () {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
});


//full screen menu onclick