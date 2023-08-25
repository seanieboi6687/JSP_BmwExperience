/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("function renderInitialView() {\n  const preMain = document.getElementById('pre-main');\n  const heading = document.createElement('h1');\n  const warning = document.createElement('p');\n  const img1 = document.createElement('img');\n  const img2 = document.createElement('img');\n  const slider = document.createElement('div');\n  const volume = document.createElement('input');\n  const enterButton = document.createElement('button');\n  img1.src = 'Assets/prescreendrl.png';\n  img1.alt = 'volume page background';\n  img1.setAttribute('id', 'pre-main-drl');\n  img2.src = 'Assets/volumeicon.png';\n  img2.alt = 'volume icon';\n  img2.setAttribute('id', 'volume-icon');\n  preMain.setAttribute('class', 'pre-main');\n  heading.setAttribute('class', 'head');\n  enterButton.setAttribute('class', 'enter-button');\n  volume.setAttribute('type', 'range');\n  volume.setAttribute('min', '0');\n  volume.setAttribute('max', '100');\n  volume.setAttribute('value', '50');\n  volume.setAttribute('class', 'slider');\n  heading.textContent = 'Welcome to your BMW Ultimate Experience';\n  warning.textContent = '⚠ Please take this time to adjust your volume before moving forward ⚠';\n  enterButton.textContent = 'ENTER';\n  preMain.appendChild(heading);\n  preMain.appendChild(enterButton);\n  preMain.appendChild(slider);\n  slider.appendChild(volume);\n  preMain.appendChild(img1);\n  heading.appendChild(warning);\n  warning.appendChild(img2);\n  enterButton.addEventListener('click', function () {\n    preMain.innerHTML = '';\n    ptsView(preMain);\n  });\n  function ptsView(container) {\n    const ptsview = document.createElement('div'); // Corrected tag name to 'div'\n    const video = document.createElement('video');\n    ptsview.setAttribute('class', 'pts-to-start'); // Corrected class name\n    video.setAttribute('class', 'background-vid');\n    video.src = \"Assets/introvideo.mp4\";\n    video.alt = \"introduction video\";\n    video.playbackRate = 0.7;\n    video.autoplay = true;\n    ptsview.appendChild(video);\n    container.appendChild(ptsview); // Append ptsview to the container\n  }\n}\n\nrenderInitialView();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJuYW1lcyI6WyJyZW5kZXJJbml0aWFsVmlldyIsInByZU1haW4iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaGVhZGluZyIsImNyZWF0ZUVsZW1lbnQiLCJ3YXJuaW5nIiwiaW1nMSIsImltZzIiLCJzbGlkZXIiLCJ2b2x1bWUiLCJlbnRlckJ1dHRvbiIsInNyYyIsImFsdCIsInNldEF0dHJpYnV0ZSIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5uZXJIVE1MIiwicHRzVmlldyIsImNvbnRhaW5lciIsInB0c3ZpZXciLCJ2aWRlbyIsInBsYXliYWNrUmF0ZSIsImF1dG9wbGF5Il0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibXdleHAvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiByZW5kZXJJbml0aWFsVmlldygpe1xuICAgIGNvbnN0IHByZU1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJlLW1haW4nKTtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIGNvbnN0IHdhcm5pbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBjb25zdCBpbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBjb25zdCBpbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IHZvbHVtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBjb25zdCBlbnRlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5cbiAgICBpbWcxLnNyYyA9ICdBc3NldHMvcHJlc2NyZWVuZHJsLnBuZydcbiAgICBpbWcxLmFsdCA9ICd2b2x1bWUgcGFnZSBiYWNrZ3JvdW5kJ1xuICAgIGltZzEuc2V0QXR0cmlidXRlKCdpZCcsICdwcmUtbWFpbi1kcmwnKVxuICAgIGltZzIuc3JjID0gJ0Fzc2V0cy92b2x1bWVpY29uLnBuZydcbiAgICBpbWcyLmFsdCA9ICd2b2x1bWUgaWNvbidcbiAgICBpbWcyLnNldEF0dHJpYnV0ZSgnaWQnLCAndm9sdW1lLWljb24nKVxuICAgIHByZU1haW4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmUtbWFpbicpXG4gICAgaGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2hlYWQnKVxuICAgIGVudGVyQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZW50ZXItYnV0dG9uJylcbiAgICB2b2x1bWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhbmdlJylcbiAgICB2b2x1bWUuc2V0QXR0cmlidXRlKCdtaW4nLCAnMCcpXG4gICAgdm9sdW1lLnNldEF0dHJpYnV0ZSgnbWF4JywgJzEwMCcpXG4gICAgdm9sdW1lLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnNTAnKVxuICAgIHZvbHVtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NsaWRlcicpXG5cbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ1dlbGNvbWUgdG8geW91ciBCTVcgVWx0aW1hdGUgRXhwZXJpZW5jZSdcbiAgICB3YXJuaW5nLnRleHRDb250ZW50ID0gJ+KaoCBQbGVhc2UgdGFrZSB0aGlzIHRpbWUgdG8gYWRqdXN0IHlvdXIgdm9sdW1lIGJlZm9yZSBtb3ZpbmcgZm9yd2FyZCDimqAnXG4gICAgZW50ZXJCdXR0b24udGV4dENvbnRlbnQgPSAnRU5URVInXG4gICAgcHJlTWFpbi5hcHBlbmRDaGlsZChoZWFkaW5nKVxuICAgIHByZU1haW4uYXBwZW5kQ2hpbGQoZW50ZXJCdXR0b24pXG4gICAgcHJlTWFpbi5hcHBlbmRDaGlsZChzbGlkZXIpXG4gICAgc2xpZGVyLmFwcGVuZENoaWxkKHZvbHVtZSlcbiAgICBwcmVNYWluLmFwcGVuZENoaWxkKGltZzEpXG4gICAgaGVhZGluZy5hcHBlbmRDaGlsZCh3YXJuaW5nKVxuICAgIHdhcm5pbmcuYXBwZW5kQ2hpbGQoaW1nMilcblxuICAgIGVudGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBwcmVNYWluLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBwdHNWaWV3KHByZU1haW4pO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gcHRzVmlldyhjb250YWluZXIpIHtcbiAgICAgICAgY29uc3QgcHRzdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBDb3JyZWN0ZWQgdGFnIG5hbWUgdG8gJ2RpdidcbiAgICAgICAgY29uc3QgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICAgICAgICBwdHN2aWV3LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHRzLXRvLXN0YXJ0Jyk7IC8vIENvcnJlY3RlZCBjbGFzcyBuYW1lXG4gICAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYmFja2dyb3VuZC12aWQnKTtcbiAgICAgICAgdmlkZW8uc3JjID0gXCJBc3NldHMvaW50cm92aWRlby5tcDRcIjtcbiAgICAgICAgdmlkZW8uYWx0ID0gXCJpbnRyb2R1Y3Rpb24gdmlkZW9cIjtcblxuICAgICAgICB2aWRlby5wbGF5YmFja1JhdGUgPSAwLjdcbiAgICAgICAgdmlkZW8uYXV0b3BsYXkgPSB0cnVlO1xuXG4gICAgICAgIHB0c3ZpZXcuYXBwZW5kQ2hpbGQodmlkZW8pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHRzdmlldyk7IC8vIEFwcGVuZCBwdHN2aWV3IHRvIHRoZSBjb250YWluZXJcbiAgICB9XG59XG5cblxucmVuZGVySW5pdGlhbFZpZXcoKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsaUJBQWlCQSxDQUFB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\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibXdleHAvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;