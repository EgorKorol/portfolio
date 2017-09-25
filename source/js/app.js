console.log('ggg');
console.log($);


// flipper welcome page
$(document).ready(function () {
  $('.autorization-btn').bind("click", function() {
    $(this).next().toggleClass('hover');
  })
});



//hamburger transform
  // Look for .hamburger
  var hamburger = document.querySelector(".hamburger");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    hamburger.classList.add("close-button");
    // Do something else, like open/close menu
  });


//full screen menu onclick
  $(document).ready(function() {
    $('.hamburger').on('click', function() {
       $('.fsmenu').addClass('fsmenu--open');
    });
  
    $('.close-button').on('click', function() {
      $('.fsmenu').removeClass('fsmenu--open');
    });
  });