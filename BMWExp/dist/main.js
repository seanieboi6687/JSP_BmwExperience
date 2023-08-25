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

eval("function renderInitialView() {\n  const preMain = document.getElementById('pre-main');\n  const heading = document.createElement('h1');\n  const warning = document.createElement('p');\n  const img1 = document.createElement('img');\n  const img2 = document.createElement('img');\n  const slider = document.createElement('div');\n  const volume = document.createElement('input');\n  const enterButton = document.createElement('button');\n  img1.src = 'Assets/prescreendrl.png';\n  img1.alt = 'volume page background';\n  img1.setAttribute('id', 'pre-main-drl');\n  img2.src = 'Assets/volumeicon.png';\n  img2.alt = 'volume icon';\n  img2.setAttribute('id', 'volume-icon');\n  heading.setAttribute('class', 'head');\n  volume.setAttribute('type', 'range');\n  volume.setAttribute('min', '0');\n  volume.setAttribute('max', '100');\n  volume.setAttribute('value', '50');\n  volume.setAttribute('class', 'slider');\n  heading.textContent = 'Welcome to your BMW Ultimate Experience';\n  warning.textContent = '⚠ Please take this time to adjust your volume before moving forward ⚠';\n  preMain.appendChild(heading);\n  preMain.appendChild(slider);\n  slider.appendChild(volume);\n  preMain.appendChild(img1);\n  heading.appendChild(warning);\n  warning.appendChild(img2);\n}\nrenderInitialView();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJuYW1lcyI6WyJyZW5kZXJJbml0aWFsVmlldyIsInByZU1haW4iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaGVhZGluZyIsImNyZWF0ZUVsZW1lbnQiLCJ3YXJuaW5nIiwiaW1nMSIsImltZzIiLCJzbGlkZXIiLCJ2b2x1bWUiLCJlbnRlckJ1dHRvbiIsInNyYyIsImFsdCIsInNldEF0dHJpYnV0ZSIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2Jtd2V4cC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHJlbmRlckluaXRpYWxWaWV3KCl7XG4gICAgY29uc3QgcHJlTWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmUtbWFpbicpO1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgY29uc3Qgd2FybmluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGNvbnN0IGltZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGNvbnN0IGltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3Qgdm9sdW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGNvbnN0IGVudGVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcblxuICAgIGltZzEuc3JjID0gJ0Fzc2V0cy9wcmVzY3JlZW5kcmwucG5nJ1xuICAgIGltZzEuYWx0ID0gJ3ZvbHVtZSBwYWdlIGJhY2tncm91bmQnXG4gICAgaW1nMS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByZS1tYWluLWRybCcpXG4gICAgaW1nMi5zcmMgPSAnQXNzZXRzL3ZvbHVtZWljb24ucG5nJ1xuICAgIGltZzIuYWx0ID0gJ3ZvbHVtZSBpY29uJ1xuICAgIGltZzIuc2V0QXR0cmlidXRlKCdpZCcsICd2b2x1bWUtaWNvbicpXG4gICAgaGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2hlYWQnKVxuICAgIHZvbHVtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFuZ2UnKVxuICAgIHZvbHVtZS5zZXRBdHRyaWJ1dGUoJ21pbicsICcwJylcbiAgICB2b2x1bWUuc2V0QXR0cmlidXRlKCdtYXgnLCAnMTAwJylcbiAgICB2b2x1bWUuc2V0QXR0cmlidXRlKCd2YWx1ZScsICc1MCcpXG4gICAgdm9sdW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2xpZGVyJylcblxuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byB5b3VyIEJNVyBVbHRpbWF0ZSBFeHBlcmllbmNlJ1xuICAgIHdhcm5pbmcudGV4dENvbnRlbnQgPSAn4pqgIFBsZWFzZSB0YWtlIHRoaXMgdGltZSB0byBhZGp1c3QgeW91ciB2b2x1bWUgYmVmb3JlIG1vdmluZyBmb3J3YXJkIOKaoCdcbiAgICBwcmVNYWluLmFwcGVuZENoaWxkKGhlYWRpbmcpXG4gICAgcHJlTWFpbi5hcHBlbmRDaGlsZChzbGlkZXIpXG4gICAgc2xpZGVyLmFwcGVuZENoaWxkKHZvbHVtZSlcbiAgICBwcmVNYWluLmFwcGVuZENoaWxkKGltZzEpXG4gICAgaGVhZGluZy5hcHBlbmRDaGlsZCh3YXJuaW5nKVxuICAgIHdhcm5pbmcuYXBwZW5kQ2hpbGQoaW1nMilcblxufVxuXG5cbnJlbmRlckluaXRpYWxWaWV3KCk7Il0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxpQkFBaUJBLENBQUEsRUFBRTtFQUN4QixNQUFNQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFVBQVUsQ0FBQztFQUNuRCxNQUFNQyxPQUFPLEdBQUdGLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLElBQUksQ0FBQztFQUM1QyxNQUFNQyxPQUFPLEdBQUdKLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUMzQyxNQUFNRSxJQUFJLEdBQUdMLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLEtBQUssQ0FBQztFQUMxQyxNQUFNRyxJQUFJLEdBQUdOLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLEtBQUssQ0FBQztFQUMxQyxNQUFNSSxNQUFNLEdBQUdQLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLEtBQUssQ0FBQztFQUM1QyxNQUFNSyxNQUFNLEdBQUdSLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLE9BQU8sQ0FBQztFQUM5QyxNQUFNTSxXQUFXLEdBQUdULFFBQVEsQ0FBQ0csYUFBYSxDQUFDLFFBQVEsQ0FBQztFQUVwREUsSUFBSSxDQUFDSyxHQUFHLEdBQUcseUJBQXlCO0VBQ3BDTCxJQUFJLENBQUNNLEdBQUcsR0FBRyx3QkFBd0I7RUFDbkNOLElBQUksQ0FBQ08sWUFBWSxDQUFDLElBQUksRUFBRSxjQUFjLENBQUM7RUFDdkNOLElBQUksQ0FBQ0ksR0FBRyxHQUFHLHVCQUF1QjtFQUNsQ0osSUFBSSxDQUFDSyxHQUFHLEdBQUcsYUFBYTtFQUN4QkwsSUFBSSxDQUFDTSxZQUFZLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQztFQUN0Q1YsT0FBTyxDQUFDVSxZQUFZLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztFQUNyQ0osTUFBTSxDQUFDSSxZQUFZLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQztFQUNwQ0osTUFBTSxDQUFDSSxZQUFZLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQztFQUMvQkosTUFBTSxDQUFDSSxZQUFZLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztFQUNqQ0osTUFBTSxDQUFDSSxZQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztFQUNsQ0osTUFBTSxDQUFDSSxZQUFZLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztFQUV0Q1YsT0FBTyxDQUFDVyxXQUFXLEdBQUcseUNBQXlDO0VBQy9EVCxPQUFPLENBQUNTLFdBQVcsR0FBRyx1RUFBdUU7RUFDN0ZkLE9BQU8sQ0FBQ2UsV0FBVyxDQUFDWixPQUFPLENBQUM7RUFDNUJILE9BQU8sQ0FBQ2UsV0FBVyxDQUFDUCxNQUFNLENBQUM7RUFDM0JBLE1BQU0sQ0FBQ08sV0FBVyxDQUFDTixNQUFNLENBQUM7RUFDMUJULE9BQU8sQ0FBQ2UsV0FBVyxDQUFDVCxJQUFJLENBQUM7RUFDekJILE9BQU8sQ0FBQ1ksV0FBVyxDQUFDVixPQUFPLENBQUM7RUFDNUJBLE9BQU8sQ0FBQ1UsV0FBVyxDQUFDUixJQUFJLENBQUM7QUFFN0I7QUFHQVIsaUJBQWlCLENBQUMsQ0FBQyJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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