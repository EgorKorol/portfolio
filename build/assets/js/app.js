/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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

/***/ })
/******/ ]);