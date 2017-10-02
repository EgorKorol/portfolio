"use strict"

var flipper = document.querySelector(".flipper"),
  button = document.querySelector(".autorization-btn"),
  flipBack = document.querySelector('.nav-menu__link--flipback-js');
  console.log('button');

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