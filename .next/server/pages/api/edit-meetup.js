"use strict";
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
exports.id = "pages/api/edit-meetup";
exports.ids = ["pages/api/edit-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/edit-meetup.js":
/*!**********************************!*\
  !*** ./pages/api/edit-meetup.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// pages/api/editMeetup.js\n\nasync function handler(req, res) {\n    if (req.method === \"PUT\") {\n        try {\n            const { id , title , image , address , description  } = req.body;\n            const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://Karel:Karel@cluster0.kmbqjcq.mongodb.net/meetups?retryWrites=true&w=majority\");\n            const database = client.db(\"meetups\");\n            const collection = database.collection(\"meetups\");\n            const result = await collection.updateOne({\n                _id: new mongodb__WEBPACK_IMPORTED_MODULE_0__.ObjectId(id)\n            }, {\n                $set: {\n                    title,\n                    image,\n                    address,\n                    description\n                }\n            }, {\n                upsert: true\n            });\n            console.log(result);\n            // Close the connection and send the response\n            client.close();\n            res.status(200).json({\n                message: \"Meetup updated.   \" + title\n            });\n        } catch (e) {\n            console.error(e);\n            res.status(500).json({\n                message: \"Server error\",\n                error: e.message\n            });\n        }\n    } else {\n        res.status(405).json({\n            message: \"Method not allowed.\"\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZWRpdC1tZWV0dXAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsMEJBQTBCO0FBQ3NCO0FBRWhELGVBQWVFLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQy9CLElBQUlELElBQUlFLE1BQU0sS0FBSyxPQUFPO1FBQ3hCLElBQUk7WUFDRixNQUFNLEVBQUVDLEdBQUUsRUFBRUMsTUFBSyxFQUFFQyxNQUFLLEVBQUVDLFFBQU8sRUFBRUMsWUFBVyxFQUFFLEdBQUdQLElBQUlRLElBQUk7WUFFM0QsTUFBTUMsU0FBUyxNQUFNWix3REFBbUIsQ0FDdEM7WUFHRixNQUFNYyxXQUFXRixPQUFPRyxFQUFFLENBQUM7WUFDM0IsTUFBTUMsYUFBYUYsU0FBU0UsVUFBVSxDQUFDO1lBQ3ZDLE1BQU1DLFNBQVMsTUFBTUQsV0FBV0UsU0FBUyxDQUN2QztnQkFBRUMsS0FBSyxJQUFJbEIsNkNBQVFBLENBQUNLO1lBQUksR0FDeEI7Z0JBQ0VjLE1BQU07b0JBQ0piO29CQUNBQztvQkFDQUM7b0JBQ0FDO2dCQUNGO1lBQ0YsR0FDQTtnQkFBRVcsUUFBUSxJQUFJO1lBQUM7WUFHakJDLFFBQVFDLEdBQUcsQ0FBQ047WUFFWiw2Q0FBNkM7WUFDN0NMLE9BQU9ZLEtBQUs7WUFDWnBCLElBQUlxQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxTQUFTLHVCQUF1QnBCO1lBQU07UUFDL0QsRUFBRSxPQUFPcUIsR0FBRztZQUNWTixRQUFRTyxLQUFLLENBQUNEO1lBQ2R4QixJQUFJcUIsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsU0FBUztnQkFBZ0JFLE9BQU9ELEVBQUVELE9BQU87WUFBQztRQUNuRTtJQUNGLE9BQU87UUFDTHZCLElBQUlxQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBc0I7SUFDeEQsQ0FBQztBQUNIO0FBRUEsaUVBQWV6QixPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL3BhZ2VzL2FwaS9lZGl0LW1lZXR1cC5qcz81MzMzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2FwaS9lZGl0TWVldHVwLmpzXHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50LCBPYmplY3RJZCB9IGZyb20gXCJtb25nb2RiXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUFVUXCIpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgaWQsIHRpdGxlLCBpbWFnZSwgYWRkcmVzcywgZGVzY3JpcHRpb24gfSA9IHJlcS5ib2R5O1xyXG5cclxuICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcclxuICAgICAgICBcIm1vbmdvZGIrc3J2Oi8vS2FyZWw6S2FyZWxAY2x1c3RlcjAua21icWpjcS5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zdCBkYXRhYmFzZSA9IGNsaWVudC5kYihcIm1lZXR1cHNcIik7XHJcbiAgICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBkYXRhYmFzZS5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29sbGVjdGlvbi51cGRhdGVPbmUoXHJcbiAgICAgICAgeyBfaWQ6IG5ldyBPYmplY3RJZChpZCkgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAkc2V0OiB7XHJcbiAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICBpbWFnZSxcclxuICAgICAgICAgICAgYWRkcmVzcyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyB1cHNlcnQ6IHRydWUgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcbiAgICAgIC8vIENsb3NlIHRoZSBjb25uZWN0aW9uIGFuZCBzZW5kIHRoZSByZXNwb25zZVxyXG4gICAgICBjbGllbnQuY2xvc2UoKTtcclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBcIk1lZXR1cCB1cGRhdGVkLiAgIFwiICsgdGl0bGUgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogXCJTZXJ2ZXIgZXJyb3JcIiwgZXJyb3I6IGUubWVzc2FnZSB9KTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiBcIk1ldGhvZCBub3QgYWxsb3dlZC5cIiB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XHJcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsIk9iamVjdElkIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImJvZHkiLCJjbGllbnQiLCJjb25uZWN0IiwiZGF0YWJhc2UiLCJkYiIsImNvbGxlY3Rpb24iLCJyZXN1bHQiLCJ1cGRhdGVPbmUiLCJfaWQiLCIkc2V0IiwidXBzZXJ0IiwiY29uc29sZSIsImxvZyIsImNsb3NlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/edit-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/edit-meetup.js"));
module.exports = __webpack_exports__;

})();