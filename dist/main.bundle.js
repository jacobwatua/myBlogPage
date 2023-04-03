/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./landingPage/js/main.js":
/*!********************************!*\
  !*** ./landingPage/js/main.js ***!
  \********************************/
/***/ (() => {

eval("/**\r\n  * showOverflowingContent - function that enables a slideshow to ...\r\n  * show overflowing content by scrolling horizontally.\r\n  * @function\r\n  * @name showOverflowingContent\r\n  * @example\r\n  * showOverflowingContent();\r\n  * @returns {void}\r\n*/\r\n\r\n\r\nfunction showOverflowingContent() {\r\n    const container = document.querySelector('.slideshow-container');\r\n    const nextBtn = document.querySelector('.next-slide');\r\n    const slides = document.querySelectorAll('.slide');\r\n    let currentSlide = 0;\r\n    nextBtn.addEventListener('click', () => {\r\n      if (currentSlide < slides.length - 1) {\r\n        currentSlide++;\r\n        container.scrollLeft += container.offsetWidth;\r\n      } else {\r\n        currentSlide = 0;\r\n        container.scrollLeft = 0;\r\n      }\r\n    });\r\n    slides.forEach((slide, index) => {\r\n      slide.addEventListener('click', () => {\r\n        if (index === slides.length - 1 && currentSlide === index) {\r\n          currentSlide = 0;\r\n          container.scrollLeft = 0;\r\n        }\r\n      });\r\n    });\r\n  }\r\n\r\n\r\n\r\n/**\r\n * showPreviousOverflow - function that enables a slideshow to show previous ...\r\n * overflowing content by scrolling horizontally.\r\n * @function\r\n * @name showPreviousOverflow\r\n * @example\r\n * showPreviousOverflow();\r\n * @returns {void}\r\n*/\r\n\r\nfunction showPreviousOverflow() {\r\n  const container = document.querySelector('.slideshow-container');\r\n  const previousBtn = document.querySelector('.previous');\r\n  previousBtn.addEventListener('click', () => {\r\n    container.scrollLeft -= container.offsetWidth;\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://personalbog/./landingPage/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./landingPage/js/main.js"]();
/******/ 	
/******/ })()
;