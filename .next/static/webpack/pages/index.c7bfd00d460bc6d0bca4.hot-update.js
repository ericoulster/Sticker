"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.scss */ \"./styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/KyleWFontenot/Software/Sticker/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n // import SymbolForm from '../components/SymbolForm/SymbolForm.js'\n\n\n\nfunction Home() {\n  _s();\n\n  var firstSymbolRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var secondSymbolRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n\n  var formSubmit = function formSubmit(e) {\n    e.preventDefault();\n    alert(\"\".concat(firstSymbolRef.current.value, \" and \").concat(secondSymbolRef.current.value));\n  };\n\n  var handleInput = function handleInput(e) {\n    return e.value.toUpperCase();\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"link\", {\n        rel: \"preconnect\",\n        href: \"https://fonts.googleapis.com\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"link\", {\n        rel: \"preconnect\",\n        href: \"https://fonts.gstatic.com\",\n        crossOrigin: \"anonymous\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"link\", {\n        href: \"https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n      children: \"This is a test\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"form\", {\n      className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().symbolform),\n      onSubmit: formSubmit,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"label\", {\n        htmlFor: \"first\",\n        children: \"First Symbol\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", {\n        type: \"text\",\n        maxLength: \"4\",\n        name: \"first\",\n        ref: firstSymbolRef,\n        id: \"first\",\n        onChange: handleInput\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"label\", {\n        htmlFor: \"second\",\n        children: \"Second Symbol\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", {\n        type: \"text\",\n        maxLength: \"4\",\n        name: \"second\",\n        ref: secondSymbolRef,\n        id: \"second\",\n        onChange: handleInput\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", {\n        type: \"submit\",\n        onSubmit: formSubmit,\n        style: {\n          gridColumn: 'span 2'\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"+wB1qVudLa0/JwCeJ6dbdFPiMGY=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBQ0E7O0FBR2UsU0FBU0ksSUFBVCxHQUFnQjtBQUFBOztBQUM3QixNQUFNQyxjQUFjLEdBQUdMLDZDQUFNLENBQUMsSUFBRCxDQUE3QjtBQUNFLE1BQU1NLGVBQWUsR0FBR04sNkNBQU0sQ0FBQyxJQUFELENBQTlCOztBQUVBLE1BQU1PLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLENBQUQsRUFBTztBQUN4QkEsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FDLElBQUFBLEtBQUssV0FBSUwsY0FBYyxDQUFDTSxPQUFmLENBQXVCQyxLQUEzQixrQkFBd0NOLGVBQWUsQ0FBQ0ssT0FBaEIsQ0FBd0JDLEtBQWhFLEVBQUw7QUFDRCxHQUhEOztBQUtBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNMLENBQUQsRUFBTztBQUN6QixXQUFPQSxDQUFDLENBQUNJLEtBQUYsQ0FBUUUsV0FBUixFQUFQO0FBQ0QsR0FGRDs7QUFJRixzQkFDRTtBQUFLLGFBQVMsRUFBRVgsMkVBQWhCO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQXVCLFlBQUksRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQXVCLFlBQUksRUFBQywyQkFBNUI7QUFBd0QsbUJBQVcsRUFBQztBQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFNLFlBQUksRUFBQyw2RUFBWDtBQUF5RixXQUFHLEVBQUM7QUFBN0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQU9FO0FBQU0sZUFBUyxFQUFFQSw0RUFBakI7QUFBb0MsY0FBUSxFQUFFSSxVQUE5QztBQUFBLDhCQUNBO0FBQU8sZUFBTyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUVBO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBb0IsaUJBQVMsRUFBQyxHQUE5QjtBQUFrQyxZQUFJLEVBQUMsT0FBdkM7QUFBK0MsV0FBRyxFQUFFRixjQUFwRDtBQUFvRSxVQUFFLEVBQUMsT0FBdkU7QUFBK0UsZ0JBQVEsRUFBRVE7QUFBekY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZBLGVBSUE7QUFBTyxlQUFPLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpBLGVBS0E7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixpQkFBUyxFQUFDLEdBQTdCO0FBQWlDLFlBQUksRUFBQyxRQUF0QztBQUErQyxXQUFHLEVBQUVQLGVBQXBEO0FBQXFFLFVBQUUsRUFBQyxRQUF4RTtBQUFpRixnQkFBUSxFQUFFTztBQUEzRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEEsZUFPQTtBQUFPLFlBQUksRUFBQyxRQUFaO0FBQXFCLGdCQUFRLEVBQUVOLFVBQS9CO0FBQTJDLGFBQUssRUFBRTtBQUFDVSxVQUFBQSxVQUFVLEVBQUU7QUFBYjtBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQkQ7O0dBaEN1QmI7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSZWZ9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG4vLyBpbXBvcnQgU3ltYm9sRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL1N5bWJvbEZvcm0vU3ltYm9sRm9ybS5qcydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLnNjc3MnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgZmlyc3RTeW1ib2xSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3Qgc2Vjb25kU3ltYm9sUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gICAgY29uc3QgZm9ybVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBhbGVydChgJHtmaXJzdFN5bWJvbFJlZi5jdXJyZW50LnZhbHVlfSBhbmQgJHtzZWNvbmRTeW1ib2xSZWYuY3VycmVudC52YWx1ZX1gKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVJbnB1dCA9IChlKSA9PiB7XG4gICAgICByZXR1cm4gZS52YWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIiAvPlxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiIC8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU92ZXJwYXNzOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxwPlRoaXMgaXMgYSB0ZXN0PC9wPlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuc3ltYm9sZm9ybX0gb25TdWJtaXQ9e2Zvcm1TdWJtaXR9PlxuICAgIFx0XHQ8bGFiZWwgaHRtbEZvcj1cImZpcnN0XCI+Rmlyc3QgU3ltYm9sPC9sYWJlbD5cbiAgICBcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgIG1heExlbmd0aD1cIjRcIiBuYW1lPVwiZmlyc3RcIiByZWY9e2ZpcnN0U3ltYm9sUmVmfSBpZD1cImZpcnN0XCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0fS8+XG5cbiAgICBcdFx0PGxhYmVsIGh0bWxGb3I9XCJzZWNvbmRcIj5TZWNvbmQgU3ltYm9sPC9sYWJlbD5cbiAgICBcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF4TGVuZ3RoPVwiNFwiIG5hbWU9XCJzZWNvbmRcIiByZWY9e3NlY29uZFN5bWJvbFJlZn0gaWQ9XCJzZWNvbmRcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXR9Lz5cblxuICAgIFx0XHQ8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIG9uU3VibWl0PXtmb3JtU3VibWl0fSBzdHlsZT17e2dyaWRDb2x1bW46ICdzcGFuIDInfX0vPlxuICAgIFx0PC9mb3JtPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlUmVmIiwiSGVhZCIsIkltYWdlIiwic3R5bGVzIiwiSG9tZSIsImZpcnN0U3ltYm9sUmVmIiwic2Vjb25kU3ltYm9sUmVmIiwiZm9ybVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0IiwiY3VycmVudCIsInZhbHVlIiwiaGFuZGxlSW5wdXQiLCJ0b1VwcGVyQ2FzZSIsImNvbnRhaW5lciIsInN5bWJvbGZvcm0iLCJncmlkQ29sdW1uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});