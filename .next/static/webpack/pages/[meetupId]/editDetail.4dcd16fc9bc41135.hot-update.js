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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/meetups/NewMeetupForm */ \"./components/meetups/NewMeetupForm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction editDetail(props) {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const storedData = localStorage.getItem(\"myData\");\n        if (storedData) {\n            setData(JSON.parse(storedData));\n        }\n    }, []);\n    async function editMeetupHandler(enteredMeetupData) {\n        const response = await fetch(\"/api/edit-meetup\", {\n            method: \"PATCH\",\n            body: JSON.stringify(enteredMeetupData),\n            headers: {\n                \"content-type\": \"application/json\"\n            }\n        });\n        // if (!response.ok) {\n        //   const text = await response.text();\n        //   console.error(\"Error response:\", text);\n        //   throw new Error(\"Failed to update meetup\");\n        // }\n        const data = await response.json();\n        console.log(data);\n        router.push(\"/\");\n    }\n    const existingMeetupData = {\n        title: data.title,\n        image: data.image,\n        address: data.address,\n        description: data.description,\n        id: data.id\n    };\n    console.log(existingMeetupData.id);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        onEditMeetup: editMeetupHandler,\n        initialData: existingMeetupData\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\hrncir\\\\OneDrive - TELES s.r.o\\\\Plocha\\\\React\\\\NextJsBigOne\\\\pages\\\\[meetupId]\\\\editDetail.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(editDetail, \"LRVCm0MyF6mUS6v6gclOrtiG+1c=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (editDetail);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bbWVldHVwSWRdL2VkaXREZXRhaWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFtRTtBQUNoQjtBQUNYO0FBRXhDLFNBQVNLLFdBQVdDLEtBQUssRUFBRTs7SUFDekIsTUFBTUMsU0FBU0gsc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ0ksTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBQyxDQUFDO0lBRWxDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTVEsYUFBYUMsYUFBYUMsT0FBTyxDQUFDO1FBQ3hDLElBQUlGLFlBQVk7WUFDZEQsUUFBUUksS0FBS0MsS0FBSyxDQUFDSjtRQUNyQixDQUFDO0lBQ0gsR0FBRyxFQUFFO0lBRUwsZUFBZUssa0JBQWtCQyxpQkFBaUIsRUFBRTtRQUNsRCxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sb0JBQW9CO1lBQy9DQyxRQUFRO1lBQ1JDLE1BQU1QLEtBQUtRLFNBQVMsQ0FBQ0w7WUFDckJNLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1FBQ0Y7UUFFQSxzQkFBc0I7UUFDdEIsd0NBQXdDO1FBQ3hDLDRDQUE0QztRQUM1QyxnREFBZ0Q7UUFDaEQsSUFBSTtRQUVKLE1BQU1kLE9BQU8sTUFBTVMsU0FBU00sSUFBSTtRQUVoQ0MsUUFBUUMsR0FBRyxDQUFDakI7UUFFWkQsT0FBT21CLElBQUksQ0FBQztJQUNkO0lBRUEsTUFBTUMscUJBQXFCO1FBQ3pCQyxPQUFPcEIsS0FBS29CLEtBQUs7UUFDakJDLE9BQU9yQixLQUFLcUIsS0FBSztRQUNqQkMsU0FBU3RCLEtBQUtzQixPQUFPO1FBQ3JCQyxhQUFhdkIsS0FBS3VCLFdBQVc7UUFDN0JDLElBQUl4QixLQUFLd0IsRUFBRTtJQUNiO0lBQ0FSLFFBQVFDLEdBQUcsQ0FBQ0UsbUJBQW1CSyxFQUFFO0lBRWpDLHFCQUNFLDhEQUFDaEMseUVBQWFBO1FBQ1ppQyxjQUFjbEI7UUFDZG1CLGFBQWFQOzs7Ozs7QUFHbkI7R0FoRFN0Qjs7UUFDUUQsa0RBQVNBOzs7QUFpRDFCLCtEQUFlQyxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1ttZWV0dXBJZF0vZWRpdERldGFpbC5qcz9lNmY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXdNZWV0dXBGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21lZXR1cHMvTmV3TWVldHVwRm9ybVwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmZ1bmN0aW9uIGVkaXREZXRhaWwocHJvcHMpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJteURhdGFcIik7XHJcbiAgICBpZiAoc3RvcmVkRGF0YSkge1xyXG4gICAgICBzZXREYXRhKEpTT04ucGFyc2Uoc3RvcmVkRGF0YSkpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZWRpdE1lZXR1cEhhbmRsZXIoZW50ZXJlZE1lZXR1cERhdGEpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2VkaXQtbWVldHVwXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGVudGVyZWRNZWV0dXBEYXRhKSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgLy8gICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgLy8gICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcmVzcG9uc2U6XCIsIHRleHQpO1xyXG4gICAgLy8gICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gdXBkYXRlIG1lZXR1cFwiKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGV4aXN0aW5nTWVldHVwRGF0YSA9IHtcclxuICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxyXG4gICAgaW1hZ2U6IGRhdGEuaW1hZ2UsXHJcbiAgICBhZGRyZXNzOiBkYXRhLmFkZHJlc3MsXHJcbiAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgIGlkOiBkYXRhLmlkLFxyXG4gIH07XHJcbiAgY29uc29sZS5sb2coZXhpc3RpbmdNZWV0dXBEYXRhLmlkKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxOZXdNZWV0dXBGb3JtXHJcbiAgICAgIG9uRWRpdE1lZXR1cD17ZWRpdE1lZXR1cEhhbmRsZXJ9XHJcbiAgICAgIGluaXRpYWxEYXRhPXtleGlzdGluZ01lZXR1cERhdGF9XHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGVkaXREZXRhaWw7XHJcbiJdLCJuYW1lcyI6WyJOZXdNZWV0dXBGb3JtIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsImVkaXREZXRhaWwiLCJwcm9wcyIsInJvdXRlciIsImRhdGEiLCJzZXREYXRhIiwic3RvcmVkRGF0YSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJlZGl0TWVldHVwSGFuZGxlciIsImVudGVyZWRNZWV0dXBEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiZXhpc3RpbmdNZWV0dXBEYXRhIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImlkIiwib25FZGl0TWVldHVwIiwiaW5pdGlhbERhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[meetupId]/editDetail.js\n"));

/***/ })

});