/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/[meetupId]";
exports.ids = ["pages/[meetupId]"];
exports.modules = {

/***/ "./components/meetups/MeetupDetail.module.css":
/*!****************************************************!*\
  !*** ./components/meetups/MeetupDetail.module.css ***!
  \****************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"detail\": \"MeetupDetail_detail__HjAUt\",\n\t\"item\": \"MeetupDetail_item__nS1gI\",\n\t\"image\": \"MeetupDetail_image__zXH_M\",\n\t\"content\": \"MeetupDetail_content___I6Bb\",\n\t\"actions\": \"MeetupDetail_actions__mIhby\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsLm1vZHVsZS5jc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsLm1vZHVsZS5jc3M/MTNlZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJkZXRhaWxcIjogXCJNZWV0dXBEZXRhaWxfZGV0YWlsX19IakFVdFwiLFxuXHRcIml0ZW1cIjogXCJNZWV0dXBEZXRhaWxfaXRlbV9fblMxZ0lcIixcblx0XCJpbWFnZVwiOiBcIk1lZXR1cERldGFpbF9pbWFnZV9felhIX01cIixcblx0XCJjb250ZW50XCI6IFwiTWVldHVwRGV0YWlsX2NvbnRlbnRfX19JNkJiXCIsXG5cdFwiYWN0aW9uc1wiOiBcIk1lZXR1cERldGFpbF9hY3Rpb25zX19tSWhieVwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/meetups/MeetupDetail.module.css\n");

/***/ }),

/***/ "./components/ui/Card.module.css":
/*!***************************************!*\
  !*** ./components/ui/Card.module.css ***!
  \***************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"Card_card__73YTa\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VpL0NhcmQubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9jb21wb25lbnRzL3VpL0NhcmQubW9kdWxlLmNzcz83MDEzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNhcmRcIjogXCJDYXJkX2NhcmRfXzczWVRhXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ui/Card.module.css\n");

/***/ }),

/***/ "./components/meetups/MeetupDetail.js":
/*!********************************************!*\
  !*** ./components/meetups/MeetupDetail.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/Card */ \"./components/ui/Card.js\");\n/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MeetupDetail.module.css */ \"./components/meetups/MeetupDetail.module.css\");\n/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction MeetupDetails(props) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    function showEditHandler() {\n        router.push(props.id + \"/editDetail\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().detail),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().image),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: props.image,\n                        alt: props.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hrncir\\\\OneDrive - TELES s.r.o\\\\Plocha\\\\React\\\\NextJsBigOne\\\\components\\\\meetups\\\\MeetupDetail.js\",\n                        lineNumber: 14,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hrncir\\\\OneDrive - TELES s.r.o\\\\Plocha\\\\React\\\\NextJsBigOne\\\\components\\\\meetups\\\\MeetupDetail.js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: props.title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hrncir\\\\OneDrive - TELES s.r.o\\\\Plocha\\\\React\\\\NextJsBigOne\\\\components\\\\meetups\\\\MeetupDetail.js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"address\", {\n                    children: props.address\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hrncir\\\\OneDrive - TELES s.r.o\\\\Plocha\\\\React\\\\NextJsBigOne\\\\components\\\\meetups\\\\MeetupDetail.js\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: props.description\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hrncir\\\\OneDrive - TELES s.r.o\\\\Plocha\\\\React\\\\NextJsBigOne\\\\components\\\\meetups\\\\MeetupDetail.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().actions),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: showEditHandler,\n                        children: \"Edit Meetup\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hrncir\\\\OneDrive - TELES s.r.o\\\\Plocha\\\\React\\\\NextJsBigOne\\\\components\\\\meetups\\\\MeetupDetail.js\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hrncir\\\\OneDrive - TELES s.r.o\\\\Plocha\\\\React\\\\NextJsBigOne\\\\components\\\\meetups\\\\MeetupDetail.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\hrncir\\\\OneDrive - TELES s.r.o\\\\Plocha\\\\React\\\\NextJsBigOne\\\\components\\\\meetups\\\\MeetupDetail.js\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\hrncir\\\\OneDrive - TELES s.r.o\\\\Plocha\\\\React\\\\NextJsBigOne\\\\components\\\\meetups\\\\MeetupDetail.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MeetupDetails);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3QztBQUNWO0FBQ2tCO0FBRWhELFNBQVNHLGNBQWNDLEtBQUssRUFBRTtJQUM1QixNQUFNQyxTQUFTTCxzREFBU0E7SUFDeEIsU0FBU00sa0JBQWtCO1FBQ3pCRCxPQUFPRSxJQUFJLENBQUNILE1BQU1JLEVBQUUsR0FBRztJQUN6QjtJQUNBLHFCQUNFLDhEQUFDQztRQUFRQyxXQUFXUix3RUFBYztrQkFDaEMsNEVBQUNELGdEQUFJQTs7OEJBQ0gsOERBQUNXO29CQUFJRixXQUFXUix1RUFBYTs4QkFDM0IsNEVBQUNZO3dCQUFJQyxLQUFLWCxNQUFNUyxLQUFLO3dCQUFFRyxLQUFLWixNQUFNYSxLQUFLOzs7Ozs7Ozs7Ozs4QkFFekMsOERBQUNDOzhCQUFJZCxNQUFNYSxLQUFLOzs7Ozs7OEJBQ2hCLDhEQUFDRTs4QkFBU2YsTUFBTWUsT0FBTzs7Ozs7OzhCQUN2Qiw4REFBQ0M7OEJBQUdoQixNQUFNaUIsV0FBVzs7Ozs7OzhCQUNyQiw4REFBQ1Q7b0JBQUlGLFdBQVdSLHlFQUFlOzhCQUM3Qiw0RUFBQ3FCO3dCQUFPQyxTQUFTbEI7a0NBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzVDO0FBRUEsaUVBQWVILGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbC5qcz8zMWQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vdWkvQ2FyZFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9NZWV0dXBEZXRhaWwubW9kdWxlLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gTWVldHVwRGV0YWlscyhwcm9wcykge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGZ1bmN0aW9uIHNob3dFZGl0SGFuZGxlcigpIHtcclxuICAgIHJvdXRlci5wdXNoKHByb3BzLmlkICsgXCIvZWRpdERldGFpbFwiKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWx9PlxyXG4gICAgICA8Q2FyZD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0+XHJcbiAgICAgICAgICA8aW1nIHNyYz17cHJvcHMuaW1hZ2V9IGFsdD17cHJvcHMudGl0bGV9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGgxPntwcm9wcy50aXRsZX08L2gxPlxyXG4gICAgICAgIDxhZGRyZXNzPntwcm9wcy5hZGRyZXNzfTwvYWRkcmVzcz5cclxuICAgICAgICA8cD57cHJvcHMuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaG93RWRpdEhhbmRsZXJ9PkVkaXQgTWVldHVwPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZWV0dXBEZXRhaWxzO1xyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiQ2FyZCIsImNsYXNzZXMiLCJNZWV0dXBEZXRhaWxzIiwicHJvcHMiLCJyb3V0ZXIiLCJzaG93RWRpdEhhbmRsZXIiLCJwdXNoIiwiaWQiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGV0YWlsIiwiZGl2IiwiaW1hZ2UiLCJpbWciLCJzcmMiLCJhbHQiLCJ0aXRsZSIsImgxIiwiYWRkcmVzcyIsInAiLCJkZXNjcmlwdGlvbiIsImFjdGlvbnMiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/meetups/MeetupDetail.js\n");

/***/ }),

/***/ "./components/ui/Card.js":
/*!*******************************!*\
  !*** ./components/ui/Card.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.module.css */ \"./components/ui/Card.module.css\");\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Card(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),\n        children: props.children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\hrncir\\\\OneDrive - TELES s.r.o\\\\Plocha\\\\React\\\\NextJsBigOne\\\\components\\\\ui\\\\Card.js\",\n        lineNumber: 4,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VpL0NhcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdDO0FBRXhDLFNBQVNDLEtBQUtDLEtBQUssRUFBRTtJQUNuQixxQkFBTyw4REFBQ0M7UUFBSUMsV0FBV0osOERBQVk7a0JBQUdFLE1BQU1JLFFBQVE7Ozs7OztBQUN0RDtBQUVBLGlFQUFlTCxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL2NvbXBvbmVudHMvdWkvQ2FyZC5qcz9kMGQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc2VzIGZyb20gJy4vQ2FyZC5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gQ2FyZChwcm9wcykge1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+e3Byb3BzLmNoaWxkcmVufTwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiJdLCJuYW1lcyI6WyJjbGFzc2VzIiwiQ2FyZCIsInByb3BzIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2FyZCIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ui/Card.js\n");

/***/ }),

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/meetups/MeetupDetail */ \"./components/meetups/MeetupDetail.js\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction MeetupDetail(props) {\n    const data = {\n        image: props.meetupData.image,\n        title: props.meetupData.title,\n        address: props.meetupData.address,\n        description: props.meetupData.description,\n        id: props.meetupData.id\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (false) {}\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: props.meetupData.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hrncir\\\\OneDrive - TELES s.r.o\\\\Plocha\\\\React\\\\NextJsBigOne\\\\pages\\\\[meetupId]\\\\index.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"Description\",\n                        content: props.meetupData.description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hrncir\\\\OneDrive - TELES s.r.o\\\\Plocha\\\\React\\\\NextJsBigOne\\\\pages\\\\[meetupId]\\\\index.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\hrncir\\\\OneDrive - TELES s.r.o\\\\Plocha\\\\React\\\\NextJsBigOne\\\\pages\\\\[meetupId]\\\\index.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                image: props.meetupData.image,\n                title: props.meetupData.title,\n                address: props.meetupData.address,\n                description: props.meetupData.description,\n                id: props.meetupData.id\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hrncir\\\\OneDrive - TELES s.r.o\\\\Plocha\\\\React\\\\NextJsBigOne\\\\pages\\\\[meetupId]\\\\index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\hrncir\\\\OneDrive - TELES s.r.o\\\\Plocha\\\\React\\\\NextJsBigOne\\\\pages\\\\[meetupId]\\\\index.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\nasync function getStaticPaths() {\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_2__.MongoClient.connect(\"mongodb+srv://Karel:Karel@cluster0.kmbqjcq.mongodb.net/meetups?retryWrites=true&w=majority\");\n    const db = client.db();\n    const meetupsCollection = db.collection(\"meetups\");\n    const meetups = await meetupsCollection.find({}, {\n        _id: 1\n    }).toArray();\n    client.close();\n    return {\n        //Fallback defines way, which is IDs preloaded from BE\n        fallback: false,\n        paths: meetups.map((meetup)=>({\n                params: {\n                    meetupId: meetup._id.toString()\n                }\n            }))\n    };\n}\nasync function getStaticProps(context) {\n    // fetch data for a single meetup\n    const meetupId = context.params.meetupId;\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_2__.MongoClient.connect(\"mongodb+srv://Karel:Karel@cluster0.kmbqjcq.mongodb.net/meetups?retryWrites=true&w=majority\");\n    const db = client.db();\n    const meetupsCollection = db.collection(\"meetups\");\n    const obId = new mongodb__WEBPACK_IMPORTED_MODULE_2__.ObjectId(meetupId);\n    const selectedMeetups = await meetupsCollection.findOne({\n        _id: obId\n    });\n    client.close();\n    // fetch data for single meetup\n    return {\n        props: {\n            meetupData: {\n                id: selectedMeetups._id.toString(),\n                title: selectedMeetups.title,\n                address: selectedMeetups.address,\n                image: selectedMeetups.image,\n                description: selectedMeetups.description\n            }\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MeetupDetail);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0U7QUFDbEI7QUFDSjtBQUNmO0FBRTdCLFNBQVNNLGFBQWFDLEtBQUssRUFBRTtJQUMzQixNQUFNQyxPQUFPO1FBQ1hDLE9BQU9GLE1BQU1HLFVBQVUsQ0FBQ0QsS0FBSztRQUM3QkUsT0FBT0osTUFBTUcsVUFBVSxDQUFDQyxLQUFLO1FBQzdCQyxTQUFTTCxNQUFNRyxVQUFVLENBQUNFLE9BQU87UUFDakNDLGFBQWFOLE1BQU1HLFVBQVUsQ0FBQ0csV0FBVztRQUN6Q0MsSUFBSVAsTUFBTUcsVUFBVSxDQUFDSSxFQUFFO0lBQ3pCO0lBRUFWLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJLEtBQTZCLEVBQUUsRUFFbEM7SUFDSCxHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0QsMkNBQVFBOzswQkFDUCw4REFBQ0Usa0RBQUlBOztrQ0FDSCw4REFBQ007a0NBQU9KLE1BQU1HLFVBQVUsQ0FBQ0MsS0FBSzs7Ozs7O2tDQUM5Qiw4REFBQ1E7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVNkLE1BQU1HLFVBQVUsQ0FBQ0csV0FBVzs7Ozs7Ozs7Ozs7OzBCQUVoRSw4REFBQ2Isd0VBQWFBO2dCQUNaUyxPQUFPRixNQUFNRyxVQUFVLENBQUNELEtBQUs7Z0JBQzdCRSxPQUFPSixNQUFNRyxVQUFVLENBQUNDLEtBQUs7Z0JBQzdCQyxTQUFTTCxNQUFNRyxVQUFVLENBQUNFLE9BQU87Z0JBQ2pDQyxhQUFhTixNQUFNRyxVQUFVLENBQUNHLFdBQVc7Z0JBQ3pDQyxJQUFJUCxNQUFNRyxVQUFVLENBQUNJLEVBQUU7Ozs7Ozs7Ozs7OztBQUkvQjtBQUVPLGVBQWVRLGlCQUFpQjtJQUNyQyxNQUFNQyxTQUFTLE1BQU10Qix3REFBbUIsQ0FDdEM7SUFFRixNQUFNd0IsS0FBS0YsT0FBT0UsRUFBRTtJQUVwQixNQUFNQyxvQkFBb0JELEdBQUdFLFVBQVUsQ0FBQztJQUV4QyxNQUFNQyxVQUFVLE1BQU1GLGtCQUFrQkcsSUFBSSxDQUFDLENBQUMsR0FBRztRQUFFQyxLQUFLO0lBQUUsR0FBR0MsT0FBTztJQUVwRVIsT0FBT1MsS0FBSztJQUNaLE9BQU87UUFDTCxzREFBc0Q7UUFDdERDLFVBQVUsS0FBSztRQUNmQyxPQUFPTixRQUFRTyxHQUFHLENBQUMsQ0FBQ0MsU0FBWTtnQkFDOUJDLFFBQVE7b0JBQUVDLFVBQVVGLE9BQU9OLEdBQUcsQ0FBQ1MsUUFBUTtnQkFBRztZQUM1QztJQUNGO0FBQ0YsQ0FBQztBQUVNLGVBQWVDLGVBQWVDLE9BQU8sRUFBRTtJQUM1QyxpQ0FBaUM7SUFFakMsTUFBTUgsV0FBV0csUUFBUUosTUFBTSxDQUFDQyxRQUFRO0lBRXhDLE1BQU1mLFNBQVMsTUFBTXRCLHdEQUFtQixDQUN0QztJQUVGLE1BQU13QixLQUFLRixPQUFPRSxFQUFFO0lBRXBCLE1BQU1DLG9CQUFvQkQsR0FBR0UsVUFBVSxDQUFDO0lBRXhDLE1BQU1lLE9BQU8sSUFBSXhDLDZDQUFRQSxDQUFDb0M7SUFDMUIsTUFBTUssa0JBQWtCLE1BQU1qQixrQkFBa0JrQixPQUFPLENBQUM7UUFDdERkLEtBQUtZO0lBRVA7SUFFQW5CLE9BQU9TLEtBQUs7SUFDWiwrQkFBK0I7SUFDL0IsT0FBTztRQUNMekIsT0FBTztZQUNMRyxZQUFZO2dCQUNWSSxJQUFJNkIsZ0JBQWdCYixHQUFHLENBQUNTLFFBQVE7Z0JBQ2hDNUIsT0FBT2dDLGdCQUFnQmhDLEtBQUs7Z0JBQzVCQyxTQUFTK0IsZ0JBQWdCL0IsT0FBTztnQkFDaENILE9BQU9rQyxnQkFBZ0JsQyxLQUFLO2dCQUM1QkksYUFBYThCLGdCQUFnQjlCLFdBQVc7WUFDMUM7UUFDRjtJQUNGO0FBQ0YsQ0FBQztBQUVELGlFQUFlUCxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL3BhZ2VzL1ttZWV0dXBJZF0vaW5kZXguanM/OGZmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVldHVwRGV0YWlscyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbFwiO1xyXG5pbXBvcnQgeyBNb25nb0NsaWVudCwgT2JqZWN0SWQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5pbXBvcnQgeyBGcmFnbWVudCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbmZ1bmN0aW9uIE1lZXR1cERldGFpbChwcm9wcykge1xyXG4gIGNvbnN0IGRhdGEgPSB7XHJcbiAgICBpbWFnZTogcHJvcHMubWVldHVwRGF0YS5pbWFnZSxcclxuICAgIHRpdGxlOiBwcm9wcy5tZWV0dXBEYXRhLnRpdGxlLFxyXG4gICAgYWRkcmVzczogcHJvcHMubWVldHVwRGF0YS5hZGRyZXNzLFxyXG4gICAgZGVzY3JpcHRpb246IHByb3BzLm1lZXR1cERhdGEuZGVzY3JpcHRpb24sXHJcbiAgICBpZDogcHJvcHMubWVldHVwRGF0YS5pZCxcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJteURhdGFcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPntwcm9wcy5tZWV0dXBEYXRhLnRpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cIkRlc2NyaXB0aW9uXCIgY29udGVudD17cHJvcHMubWVldHVwRGF0YS5kZXNjcmlwdGlvbn0gLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8TWVldHVwRGV0YWlsc1xyXG4gICAgICAgIGltYWdlPXtwcm9wcy5tZWV0dXBEYXRhLmltYWdlfVxyXG4gICAgICAgIHRpdGxlPXtwcm9wcy5tZWV0dXBEYXRhLnRpdGxlfVxyXG4gICAgICAgIGFkZHJlc3M9e3Byb3BzLm1lZXR1cERhdGEuYWRkcmVzc31cclxuICAgICAgICBkZXNjcmlwdGlvbj17cHJvcHMubWVldHVwRGF0YS5kZXNjcmlwdGlvbn1cclxuICAgICAgICBpZD17cHJvcHMubWVldHVwRGF0YS5pZH1cclxuICAgICAgLz5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcbiAgICBcIm1vbmdvZGIrc3J2Oi8vS2FyZWw6S2FyZWxAY2x1c3RlcjAua21icWpjcS5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiXHJcbiAgKTtcclxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG5cclxuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpO1xyXG5cclxuICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCh7fSwgeyBfaWQ6IDEgfSkudG9BcnJheSgpO1xyXG5cclxuICBjbGllbnQuY2xvc2UoKTtcclxuICByZXR1cm4ge1xyXG4gICAgLy9GYWxsYmFjayBkZWZpbmVzIHdheSwgd2hpY2ggaXMgSURzIHByZWxvYWRlZCBmcm9tIEJFXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgICBwYXRoczogbWVldHVwcy5tYXAoKG1lZXR1cCkgPT4gKHtcclxuICAgICAgcGFyYW1zOiB7IG1lZXR1cElkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKCkgfSxcclxuICAgIH0pKSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4gIC8vIGZldGNoIGRhdGEgZm9yIGEgc2luZ2xlIG1lZXR1cFxyXG5cclxuICBjb25zdCBtZWV0dXBJZCA9IGNvbnRleHQucGFyYW1zLm1lZXR1cElkO1xyXG5cclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgXCJtb25nb2RiK3NydjovL0thcmVsOkthcmVsQGNsdXN0ZXIwLmttYnFqY3EubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxyXG4gICk7XHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuXHJcbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcclxuXHJcbiAgY29uc3Qgb2JJZCA9IG5ldyBPYmplY3RJZChtZWV0dXBJZCk7XHJcbiAgY29uc3Qgc2VsZWN0ZWRNZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZE9uZSh7XHJcbiAgICBfaWQ6IG9iSWQsXHJcbiAgICAvLyBfaWQ6IE9iamVjdElkKG1lZXR1cElkKSxcclxuICB9KTtcclxuXHJcbiAgY2xpZW50LmNsb3NlKCk7XHJcbiAgLy8gZmV0Y2ggZGF0YSBmb3Igc2luZ2xlIG1lZXR1cFxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtZWV0dXBEYXRhOiB7XHJcbiAgICAgICAgaWQ6IHNlbGVjdGVkTWVldHVwcy5faWQudG9TdHJpbmcoKSxcclxuICAgICAgICB0aXRsZTogc2VsZWN0ZWRNZWV0dXBzLnRpdGxlLFxyXG4gICAgICAgIGFkZHJlc3M6IHNlbGVjdGVkTWVldHVwcy5hZGRyZXNzLFxyXG4gICAgICAgIGltYWdlOiBzZWxlY3RlZE1lZXR1cHMuaW1hZ2UsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHNlbGVjdGVkTWVldHVwcy5kZXNjcmlwdGlvbixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVldHVwRGV0YWlsO1xyXG4iXSwibmFtZXMiOlsiTWVldHVwRGV0YWlscyIsIk1vbmdvQ2xpZW50IiwiT2JqZWN0SWQiLCJGcmFnbWVudCIsInVzZUVmZmVjdCIsIkhlYWQiLCJNZWV0dXBEZXRhaWwiLCJwcm9wcyIsImRhdGEiLCJpbWFnZSIsIm1lZXR1cERhdGEiLCJ0aXRsZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImlkIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJnZXRTdGF0aWNQYXRocyIsImNsaWVudCIsImNvbm5lY3QiLCJkYiIsIm1lZXR1cHNDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsIm1lZXR1cHMiLCJmaW5kIiwiX2lkIiwidG9BcnJheSIsImNsb3NlIiwiZmFsbGJhY2siLCJwYXRocyIsIm1hcCIsIm1lZXR1cCIsInBhcmFtcyIsIm1lZXR1cElkIiwidG9TdHJpbmciLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJvYklkIiwic2VsZWN0ZWRNZWV0dXBzIiwiZmluZE9uZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[meetupId]/index.js"));
module.exports = __webpack_exports__;

})();