/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/aicoder.js":
/*!************************!*\
  !*** ./src/aicoder.js ***!
  \************************/
/*! exports provided: age, name, AddAge, show, a, b, c, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"age\", function() { return age; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"name\", function() { return name; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AddAge\", function() { return AddAge; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"show\", function() { return show; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return b; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"c\", function() { return c; });\nlet age = 19;\r\nlet name = 'aicoder';\r\nfunction AddAge(num) {\r\n    age += num;\r\n}\r\n\r\nfunction show() {\r\n    console.log('a :', a);\r\n    console.log('b :', b);\r\n    console.log('c :', c);\r\n    console.log('age :', age);\r\n    console.log('name :', name);\r\n}\r\nlet [a, b, c] = [1, 2, 3];\r\n\r\nlet k = 10;\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (k);  // 只有default  的时候 ， 后面才可以跟变量的名字\n\n//# sourceURL=webpack:///./src/aicoder.js?");

/***/ }),

/***/ "./src/b.js":
/*!******************!*\
  !*** ./src/b.js ***!
  \******************/
/*! exports provided: age, name, AddAge, show, a, b, c, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _aicoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aicoder */ \"./src/aicoder.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"age\", function() { return _aicoder__WEBPACK_IMPORTED_MODULE_0__[\"age\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"name\", function() { return _aicoder__WEBPACK_IMPORTED_MODULE_0__[\"name\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AddAge\", function() { return _aicoder__WEBPACK_IMPORTED_MODULE_0__[\"AddAge\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"show\", function() { return _aicoder__WEBPACK_IMPORTED_MODULE_0__[\"show\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return _aicoder__WEBPACK_IMPORTED_MODULE_0__[\"a\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return _aicoder__WEBPACK_IMPORTED_MODULE_0__[\"b\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"c\", function() { return _aicoder__WEBPACK_IMPORTED_MODULE_0__[\"c\"]; });\n\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (22);\n\n//# sourceURL=webpack:///./src/b.js?");

/***/ }),

/***/ "./src/c.js":
/*!******************!*\
  !*** ./src/c.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log('c.js 执行了');\r\n\n\n//# sourceURL=webpack:///./src/c.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _aicoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aicoder */ \"./src/aicoder.js\");\n/* harmony import */ var _b__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./b */ \"./src/b.js\");\n/* harmony import */ var _c__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./c */ \"./src/c.js\");\n/* harmony import */ var _c__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_c__WEBPACK_IMPORTED_MODULE_2__);\n\r\n// 从一个文件中导出的模块，都是同一个对象\r\n// 模块的变量是延迟执行，用到时候，才会去那具体的值\r\n\r\n// 在 Es6 中, 所有代码在解析之前会先进行import 静态解析。\r\n\r\n\r\n  //  *  代表import 里所有的东西 都要导入到 aicoder 里面去\r\n\r\n\r\n\r\nObject(_aicoder__WEBPACK_IMPORTED_MODULE_0__[\"show\"])();\r\n\r\nObject(_aicoder__WEBPACK_IMPORTED_MODULE_0__[\"AddAge\"])(10);\r\n\r\nObject(_aicoder__WEBPACK_IMPORTED_MODULE_0__[\"show\"])();\r\n\r\n_aicoder__WEBPACK_IMPORTED_MODULE_0__[\"show\"]();\r\n\r\n\r\nconsole.log('sld :', _b__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });