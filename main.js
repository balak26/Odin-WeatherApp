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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const key = `QARTB88LAKL4DR7RPNDA87UZF`;\nconst place = \"turin\";\nconst url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?key=${key}`;\n\n(async function getWeather() {\n  try {\n    const res = await fetch(url, { mode: \"cors\" });\n    const weather = await res.json();\n\n    console.log(weather);\n  } catch (err) {\n    console.log(err);\n  }\n})();\n\n\n//# sourceURL=webpack://odin-weatherapp/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;