"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[meetupId]",{

/***/ "./components/meetups/MeetupDetail.js":
/*!********************************************!*\
  !*** ./components/meetups/MeetupDetail.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/Card */ \"./components/ui/Card.js\");\n/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MeetupDetail.module.css */ \"./components/meetups/MeetupDetail.module.css\");\n/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction MeetupDetails(props) {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    function showEditHandler() {\n        console.log(props.id + \" ediDetail\");\n        router.push(props.id + \"/editDetail\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().detail),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().image),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: props.image,\n                        alt: props.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hrncir\\\\OneDrive - TELES s.r.o\\\\Plocha\\\\React\\\\NextJsBigOne\\\\components\\\\meetups\\\\MeetupDetail.js\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hrncir\\\\OneDrive - TELES s.r.o\\\\Plocha\\\\React\\\\NextJsBigOne\\\\components\\\\meetups\\\\MeetupDetail.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: props.title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hrncir\\\\OneDrive - TELES s.r.o\\\\Plocha\\\\React\\\\NextJsBigOne\\\\components\\\\meetups\\\\MeetupDetail.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"address\", {\n                    children: props.address\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hrncir\\\\OneDrive - TELES s.r.o\\\\Plocha\\\\React\\\\NextJsBigOne\\\\components\\\\meetups\\\\MeetupDetail.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: props.description\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hrncir\\\\OneDrive - TELES s.r.o\\\\Plocha\\\\React\\\\NextJsBigOne\\\\components\\\\meetups\\\\MeetupDetail.js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().actions),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: showEditHandler,\n                        children: \"Edit Meetup\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hrncir\\\\OneDrive - TELES s.r.o\\\\Plocha\\\\React\\\\NextJsBigOne\\\\components\\\\meetups\\\\MeetupDetail.js\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hrncir\\\\OneDrive - TELES s.r.o\\\\Plocha\\\\React\\\\NextJsBigOne\\\\components\\\\meetups\\\\MeetupDetail.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\hrncir\\\\OneDrive - TELES s.r.o\\\\Plocha\\\\React\\\\NextJsBigOne\\\\components\\\\meetups\\\\MeetupDetail.js\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\hrncir\\\\OneDrive - TELES s.r.o\\\\Plocha\\\\React\\\\NextJsBigOne\\\\components\\\\meetups\\\\MeetupDetail.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_s(MeetupDetails, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = MeetupDetails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetails);\nvar _c;\n$RefreshReg$(_c, \"MeetupDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0M7QUFDVjtBQUNrQjtBQUVoRCxTQUFTRyxjQUFjQyxLQUFLLEVBQUU7O0lBQzVCLE1BQU1DLFNBQVNMLHNEQUFTQTtJQUN4QixTQUFTTSxrQkFBa0I7UUFDekJDLFFBQVFDLEdBQUcsQ0FBQ0osTUFBTUssRUFBRSxHQUFHO1FBRXZCSixPQUFPSyxJQUFJLENBQUNOLE1BQU1LLEVBQUUsR0FBRztJQUN6QjtJQUNBLHFCQUNFLDhEQUFDRTtRQUFRQyxXQUFXVix3RUFBYztrQkFDaEMsNEVBQUNELGdEQUFJQTs7OEJBQ0gsOERBQUNhO29CQUFJRixXQUFXVix1RUFBYTs4QkFDM0IsNEVBQUNjO3dCQUFJQyxLQUFLYixNQUFNVyxLQUFLO3dCQUFFRyxLQUFLZCxNQUFNZSxLQUFLOzs7Ozs7Ozs7Ozs4QkFFekMsOERBQUNDOzhCQUFJaEIsTUFBTWUsS0FBSzs7Ozs7OzhCQUNoQiw4REFBQ0U7OEJBQVNqQixNQUFNaUIsT0FBTzs7Ozs7OzhCQUN2Qiw4REFBQ0M7OEJBQUdsQixNQUFNbUIsV0FBVzs7Ozs7OzhCQUNyQiw4REFBQ1Q7b0JBQUlGLFdBQVdWLHlFQUFlOzhCQUM3Qiw0RUFBQ3VCO3dCQUFPQyxTQUFTcEI7a0NBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzVDO0dBdEJTSDs7UUFDUUgsa0RBQVNBOzs7S0FEakJHO0FBd0JULCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWwuanM/MzFkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL3VpL0NhcmRcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vTWVldHVwRGV0YWlsLm1vZHVsZS5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIE1lZXR1cERldGFpbHMocHJvcHMpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBmdW5jdGlvbiBzaG93RWRpdEhhbmRsZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9wcy5pZCArIFwiIGVkaURldGFpbFwiKTtcclxuXHJcbiAgICByb3V0ZXIucHVzaChwcm9wcy5pZCArIFwiL2VkaXREZXRhaWxcIik7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsfT5cclxuICAgICAgPENhcmQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9PlxyXG4gICAgICAgICAgPGltZyBzcmM9e3Byb3BzLmltYWdlfSBhbHQ9e3Byb3BzLnRpdGxlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxoMT57cHJvcHMudGl0bGV9PC9oMT5cclxuICAgICAgICA8YWRkcmVzcz57cHJvcHMuYWRkcmVzc308L2FkZHJlc3M+XHJcbiAgICAgICAgPHA+e3Byb3BzLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2hvd0VkaXRIYW5kbGVyfT5FZGl0IE1lZXR1cDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVldHVwRGV0YWlscztcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkNhcmQiLCJjbGFzc2VzIiwiTWVldHVwRGV0YWlscyIsInByb3BzIiwicm91dGVyIiwic2hvd0VkaXRIYW5kbGVyIiwiY29uc29sZSIsImxvZyIsImlkIiwicHVzaCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkZXRhaWwiLCJkaXYiLCJpbWFnZSIsImltZyIsInNyYyIsImFsdCIsInRpdGxlIiwiaDEiLCJhZGRyZXNzIiwicCIsImRlc2NyaXB0aW9uIiwiYWN0aW9ucyIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/meetups/MeetupDetail.js\n"));

/***/ })

});