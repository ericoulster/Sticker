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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.scss */ \"./styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/KyleWFontenot/Software/Sticker/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n // import SymbolForm from '../components/SymbolForm/SymbolForm.js'\n\n\n\nfunction Home() {\n  _s();\n\n  var firstSymbolRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var secondSymbolRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n\n  var formSubmit = function formSubmit(e) {\n    e.preventDefault();\n    alert(\"\".concat(firstSymbolRef.current.value, \" and \").concat(secondSymbolRef.current.value));\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"link\", {\n        rel: \"preconnect\",\n        href: \"https://fonts.googleapis.com\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"link\", {\n        rel: \"preconnect\",\n        href: \"https://fonts.gstatic.com\",\n        crossOrigin: \"anonymous\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"link\", {\n        href: \"https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n      children: \"This is a test\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"form\", {\n      className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().symbolform),\n      onSubmit: formSubmit,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"label\", {\n        htmlFor: \"first\",\n        children: \"First Symbol\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", {\n        type: \"text\",\n        maxLength: \"4\",\n        name: \"first\",\n        ref: firstSymbol,\n        id: \"first\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"label\", {\n        htmlFor: \"second\",\n        children: \"Second Symbol\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", {\n        type: \"text\",\n        maxLength: \"4\",\n        name: \"second\",\n        ref: secondSymbol,\n        id: \"second\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", {\n        type: \"submit\",\n        onSubmit: formSubmit,\n        style: {\n          gridColumn: 'span 2'\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"+wB1qVudLa0/JwCeJ6dbdFPiMGY=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBQ0E7O0FBR2UsU0FBU0ksSUFBVCxHQUFnQjtBQUFBOztBQUM3QixNQUFNQyxjQUFjLEdBQUdMLDZDQUFNLENBQUMsSUFBRCxDQUE3QjtBQUNFLE1BQU1NLGVBQWUsR0FBR04sNkNBQU0sQ0FBQyxJQUFELENBQTlCOztBQUNBLE1BQU1PLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLENBQUQsRUFBTztBQUN4QkEsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FDLElBQUFBLEtBQUssV0FBSUwsY0FBYyxDQUFDTSxPQUFmLENBQXVCQyxLQUEzQixrQkFBd0NOLGVBQWUsQ0FBQ0ssT0FBaEIsQ0FBd0JDLEtBQWhFLEVBQUw7QUFDRCxHQUhEOztBQUtGLHNCQUNFO0FBQUssYUFBUyxFQUFFVCwyRUFBaEI7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQU0sV0FBRyxFQUFDLFlBQVY7QUFBdUIsWUFBSSxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sV0FBRyxFQUFDLFlBQVY7QUFBdUIsWUFBSSxFQUFDLDJCQUE1QjtBQUF3RCxtQkFBVyxFQUFDO0FBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQU0sWUFBSSxFQUFDLDZFQUFYO0FBQXlGLFdBQUcsRUFBQztBQUE3RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBT0U7QUFBTSxlQUFTLEVBQUVBLDRFQUFqQjtBQUFvQyxjQUFRLEVBQUVJLFVBQTlDO0FBQUEsOEJBQ0E7QUFBTyxlQUFPLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBRUE7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFvQixpQkFBUyxFQUFDLEdBQTlCO0FBQWtDLFlBQUksRUFBQyxPQUF2QztBQUErQyxXQUFHLEVBQUVRLFdBQXBEO0FBQWlFLFVBQUUsRUFBQztBQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkEsZUFJQTtBQUFPLGVBQU8sRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkEsZUFLQTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGlCQUFTLEVBQUMsR0FBN0I7QUFBaUMsWUFBSSxFQUFDLFFBQXRDO0FBQStDLFdBQUcsRUFBRUMsWUFBcEQ7QUFBa0UsVUFBRSxFQUFDO0FBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMQSxlQU9BO0FBQU8sWUFBSSxFQUFDLFFBQVo7QUFBcUIsZ0JBQVEsRUFBRVQsVUFBL0I7QUFBMkMsYUFBSyxFQUFFO0FBQUNVLFVBQUFBLFVBQVUsRUFBRTtBQUFiO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1CRDs7R0EzQnVCYjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJlZn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbi8vIGltcG9ydCBTeW1ib2xGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvU3ltYm9sRm9ybS9TeW1ib2xGb3JtLmpzJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuc2NzcydcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBmaXJzdFN5bWJvbFJlZiA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBzZWNvbmRTeW1ib2xSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgZm9ybVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBhbGVydChgJHtmaXJzdFN5bWJvbFJlZi5jdXJyZW50LnZhbHVlfSBhbmQgJHtzZWNvbmRTeW1ib2xSZWYuY3VycmVudC52YWx1ZX1gKTtcbiAgICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIiAvPlxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PdmVycGFzczp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8cD5UaGlzIGlzIGEgdGVzdDwvcD5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLnN5bWJvbGZvcm19IG9uU3VibWl0PXtmb3JtU3VibWl0fT5cbiAgICBcdFx0PGxhYmVsIGh0bWxGb3I9XCJmaXJzdFwiPkZpcnN0IFN5bWJvbDwvbGFiZWw+XG4gICAgXHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiICBtYXhMZW5ndGg9XCI0XCIgbmFtZT1cImZpcnN0XCIgcmVmPXtmaXJzdFN5bWJvbH0gaWQ9XCJmaXJzdFwiIC8+XG5cbiAgICBcdFx0PGxhYmVsIGh0bWxGb3I9XCJzZWNvbmRcIj5TZWNvbmQgU3ltYm9sPC9sYWJlbD5cbiAgICBcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF4TGVuZ3RoPVwiNFwiIG5hbWU9XCJzZWNvbmRcIiByZWY9e3NlY29uZFN5bWJvbH0gaWQ9XCJzZWNvbmRcIiAvPlxuXG4gICAgXHRcdDxpbnB1dCB0eXBlPVwic3VibWl0XCIgb25TdWJtaXQ9e2Zvcm1TdWJtaXR9IHN0eWxlPXt7Z3JpZENvbHVtbjogJ3NwYW4gMid9fS8+XG4gICAgXHQ8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJIZWFkIiwiSW1hZ2UiLCJzdHlsZXMiLCJIb21lIiwiZmlyc3RTeW1ib2xSZWYiLCJzZWNvbmRTeW1ib2xSZWYiLCJmb3JtU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWxlcnQiLCJjdXJyZW50IiwidmFsdWUiLCJjb250YWluZXIiLCJzeW1ib2xmb3JtIiwiZmlyc3RTeW1ib2wiLCJzZWNvbmRTeW1ib2wiLCJncmlkQ29sdW1uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});