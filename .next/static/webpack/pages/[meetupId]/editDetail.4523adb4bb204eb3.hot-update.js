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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/meetups/NewMeetupForm */ \"./components/meetups/NewMeetupForm.js\");\n\n\nfunction editDetail() {\n    async function editMeetupHandler(enteredMeetupData) {\n        // console.log(enteredMeetupData);\n        const response = await fetch(\"/api/edit-meetup\", {\n            method: \"PUT\",\n            body: JSON.stringify(enteredMeetupData),\n            headers: {\n                \"content-type\": \"application/json\"\n            }\n        });\n        const data = await response.json();\n        console.log(data);\n        router.push(\"/\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        onEditMeetup: editMeetupHandler\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\hrncir\\\\OneDrive - TELES s.r.o\\\\Plocha\\\\React\\\\NextJsBigOne\\\\pages\\\\[meetupId]\\\\editDetail.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (editDetail);\n// export default mongoose.models.editDetail ||\n//   mongoose.model(\"editDetail\", ProductSchema);\nasync function updateMeetup(meetupData) {\n    const response = await fetch(\"/api/editMeetup\", {\n        method: \"PUT\",\n        body: JSON.stringify(meetupData),\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    });\n    const data = await response.json();\n// Handle the response data as needed\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bbWVldHVwSWRdL2VkaXREZXRhaWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBbUU7QUFFbkUsU0FBU0MsYUFBYTtJQUNwQixlQUFlQyxrQkFBa0JDLGlCQUFpQixFQUFFO1FBQ2xELGtDQUFrQztRQUNsQyxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sb0JBQW9CO1lBQy9DQyxRQUFRO1lBQ1JDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ047WUFDckJPLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1FBQ0Y7UUFFQSxNQUFNQyxPQUFPLE1BQU1QLFNBQVNRLElBQUk7UUFFaENDLFFBQVFDLEdBQUcsQ0FBQ0g7UUFFWkksT0FBT0MsSUFBSSxDQUFDO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ2hCLHlFQUFhQTtRQUNaaUIsY0FBY2Y7Ozs7OztBQUlwQjtBQUVBLCtEQUFlRCxVQUFVQSxFQUFDO0FBQzFCLCtDQUErQztBQUMvQyxpREFBaUQ7QUFFakQsZUFBZWlCLGFBQWFDLFVBQVUsRUFBRTtJQUN0QyxNQUFNZixXQUFXLE1BQU1DLE1BQU0sbUJBQW1CO1FBQzlDQyxRQUFRO1FBQ1JDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ1U7UUFDckJULFNBQVM7WUFDUCxnQkFBZ0I7UUFDbEI7SUFDRjtJQUVBLE1BQU1DLE9BQU8sTUFBTVAsU0FBU1EsSUFBSTtBQUVoQyxxQ0FBcUM7QUFDdkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cElkXS9lZGl0RGV0YWlsLmpzP2U2ZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5ld01lZXR1cEZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9OZXdNZWV0dXBGb3JtXCI7XHJcblxyXG5mdW5jdGlvbiBlZGl0RGV0YWlsKCkge1xyXG4gIGFzeW5jIGZ1bmN0aW9uIGVkaXRNZWV0dXBIYW5kbGVyKGVudGVyZWRNZWV0dXBEYXRhKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlbnRlcmVkTWVldHVwRGF0YSk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9lZGl0LW1lZXR1cFwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZW50ZXJlZE1lZXR1cERhdGEpLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TmV3TWVldHVwRm9ybVxyXG4gICAgICBvbkVkaXRNZWV0dXA9e2VkaXRNZWV0dXBIYW5kbGVyfVxyXG4gICAgICAvLyBpbml0aWFsRGF0YT17ZXhpc3RpbmdNZWV0dXBEYXRhfVxyXG4gICAgLz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBlZGl0RGV0YWlsO1xyXG4vLyBleHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbHMuZWRpdERldGFpbCB8fFxyXG4vLyAgIG1vbmdvb3NlLm1vZGVsKFwiZWRpdERldGFpbFwiLCBQcm9kdWN0U2NoZW1hKTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZU1lZXR1cChtZWV0dXBEYXRhKSB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvZWRpdE1lZXR1cFwiLCB7XHJcbiAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShtZWV0dXBEYXRhKSxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAvLyBIYW5kbGUgdGhlIHJlc3BvbnNlIGRhdGEgYXMgbmVlZGVkXHJcbn1cclxuIl0sIm5hbWVzIjpbIk5ld01lZXR1cEZvcm0iLCJlZGl0RGV0YWlsIiwiZWRpdE1lZXR1cEhhbmRsZXIiLCJlbnRlcmVkTWVldHVwRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZXIiLCJwdXNoIiwib25FZGl0TWVldHVwIiwidXBkYXRlTWVldHVwIiwibWVldHVwRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[meetupId]/editDetail.js\n"));

/***/ })

});