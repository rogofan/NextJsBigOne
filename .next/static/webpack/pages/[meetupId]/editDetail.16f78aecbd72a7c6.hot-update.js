"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[meetupId]/editDetail",{

/***/ "./pages/[meetupId]/editDetail.js":
/*!****************************************!*\
  !*** ./pages/[meetupId]/editDetail.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/meetups/NewMeetupForm */ \"./components/meetups/NewMeetupForm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction editDetail(props) {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { data  } = router.query;\n    console.log(data + \"edit detail\");\n    async function editMeetupHandler(enteredMeetupData) {\n        // console.log(enteredMeetupData);\n        const response = await fetch(\"/api/edit-meetup\", {\n            method: \"PUT\",\n            body: JSON.stringify(enteredMeetupData),\n            headers: {\n                \"content-type\": \"application/json\"\n            }\n        });\n        const data = await response.json();\n        console.log(data);\n        router.push(\"/\");\n    }\n    const existingMeetupData = {\n        title: data\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        onEditMeetup: editMeetupHandler,\n        initialData: existingMeetupData\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\hrncir\\\\OneDrive - TELES s.r.o\\\\Plocha\\\\React\\\\NextJsBigOne\\\\pages\\\\[meetupId]\\\\editDetail.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(editDetail, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (editDetail);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bbWVldHVwSWRdL2VkaXREZXRhaWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUU7QUFDM0I7QUFFeEMsU0FBU0UsV0FBV0MsS0FBSyxFQUFFOztJQUN6QixNQUFNQyxTQUFTSCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFSSxLQUFJLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUM3QkMsUUFBUUMsR0FBRyxDQUFDSCxPQUFPO0lBRW5CLGVBQWVJLGtCQUFrQkMsaUJBQWlCLEVBQUU7UUFDbEQsa0NBQWtDO1FBQ2xDLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxvQkFBb0I7WUFDL0NDLFFBQVE7WUFDUkMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDTjtZQUNyQk8sU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7UUFDRjtRQUVBLE1BQU1aLE9BQU8sTUFBTU0sU0FBU08sSUFBSTtRQUVoQ1gsUUFBUUMsR0FBRyxDQUFDSDtRQUVaRCxPQUFPZSxJQUFJLENBQUM7SUFDZDtJQUNBLE1BQU1DLHFCQUFxQjtRQUN6QkMsT0FBT2hCO0lBQ1Q7SUFFQSxxQkFDRSw4REFBQ0wseUVBQWFBO1FBQ1pzQixjQUFjYjtRQUNkYyxhQUFhSDs7Ozs7O0FBR25CO0dBL0JTbEI7O1FBQ1FELGtEQUFTQTs7O0FBZ0MxQiwrREFBZUMsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9bbWVldHVwSWRdL2VkaXREZXRhaWwuanM/ZTZmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV3TWVldHVwRm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tZWV0dXBzL05ld01lZXR1cEZvcm1cIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5mdW5jdGlvbiBlZGl0RGV0YWlsKHByb3BzKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc29sZS5sb2coZGF0YSArIFwiZWRpdCBkZXRhaWxcIik7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGVkaXRNZWV0dXBIYW5kbGVyKGVudGVyZWRNZWV0dXBEYXRhKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlbnRlcmVkTWVldHVwRGF0YSk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9lZGl0LW1lZXR1cFwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZW50ZXJlZE1lZXR1cERhdGEpLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICB9XHJcbiAgY29uc3QgZXhpc3RpbmdNZWV0dXBEYXRhID0ge1xyXG4gICAgdGl0bGU6IGRhdGEsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxOZXdNZWV0dXBGb3JtXHJcbiAgICAgIG9uRWRpdE1lZXR1cD17ZWRpdE1lZXR1cEhhbmRsZXJ9XHJcbiAgICAgIGluaXRpYWxEYXRhPXtleGlzdGluZ01lZXR1cERhdGF9XHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGVkaXREZXRhaWw7XHJcbiJdLCJuYW1lcyI6WyJOZXdNZWV0dXBGb3JtIiwidXNlUm91dGVyIiwiZWRpdERldGFpbCIsInByb3BzIiwicm91dGVyIiwiZGF0YSIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImVkaXRNZWV0dXBIYW5kbGVyIiwiZW50ZXJlZE1lZXR1cERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwianNvbiIsInB1c2giLCJleGlzdGluZ01lZXR1cERhdGEiLCJ0aXRsZSIsIm9uRWRpdE1lZXR1cCIsImluaXRpYWxEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[meetupId]/editDetail.js\n"));

/***/ })

});