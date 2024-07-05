/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Libre Franklin", sans-serif;
}
html,
body {
  /* height: 100%; */
}
body {
  display: flex;
  flex-direction: row;
}
.main {
  height: 70vmax;
}
.menu {
  padding-left: 10px;
  width: 35vh;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-right: 1px solid transparent;
  height: 70vmax;
  background-color: #fcfaf8;
}
.menu h2 {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
}
.imgholderAdd,
.imgholderStar,
.imgholderAll {
  padding-right: 6px;
}
.todaySortButton,
.addButton,
.allTasksButton,
.addButton2 {
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
  cursor: pointer;
}
.starImage,
.addImage,
.allTasksImage {
  width: 27px;
  height: 27px;
}
.addImage2 {
  width: 19px;
  height: 19px;
}
.allTasksImage {
  width: 23px;
  height: 23px;
}
.menu button,
.addButton2 {
  border: 1px solid transparent;
  border-radius: 10px;
  background-color: transparent;
  text-align: left !important;
  font-size: 16px;
  padding: 6px 10px;
  margin-right: 10px;
  color: #363432;
}
.menu button:hover {
  background-color: #b9bc9b;
  color: #f6f9f6;
}
/* Greeting */
.greeting {
  padding: 10px 15px;
}

/* Dialog */
.addTaskDialogHTML {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10vh;
  width: 470px;
  height: 410px;
  border: 2px solid transparent;
  border-radius: 10px;
}
.addTaskDialogHTML div {
  display: flex;
  flex-direction: column;
}
.closeDialogDiv {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}
.closeDialog {
  margin-top: 10px;
  margin-right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.closeDialogImg {
  width: 26px;
  height: 26px;
}
.addTaskFormHTML {
  margin: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.singleFormQuestion input,
.singleFormQuestion select {
  margin-top: 6px;
  height: 25px;
}
.submitAddTaskFormHTML {
  margin-top: 12px;
  height: 27px;
}
::backdrop {
  background-color: gray;
  opacity: 0.5;
}
/* Tasks/Todos  */
.taskHolder {
  padding: 10px 15px;
}
.singleDateDOM {
  margin-bottom: 15px;
  margin-top: 25x;
}
.toDoCard {
  border-bottom: 1px solid #363432;
  width: 65vw;
  margin-bottom: 15px;
}
.firstLineDiv,
.taskCheckBoxDiv,
.editDeleteDiv {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.firstLineDiv {
  margin: 10px;
  justify-content: space-between;
}
.taskCheckBoxDiv,
.editDeleteDiv {
  gap: 10px;
}
.taskDescriptionDOM {
  margin: 10px;
}
.taskDeleteButton,
.taskEditButton {
  visibility: hidden;
  border: none;
  background-color: transparent;
}
.toDoCard:hover .taskDeleteButton,
.toDoCard:hover .taskEditButton {
  visibility: visible;
  border: none;
  background-color: transparent;
}
.editTaskButtonImg {
  width: 19px;
  height: 19px;
}
.deleteTaskButtonImg {
  width: 20px;
  height: 20px;
}
.priorityDiv {
  border-radius: 5px;
  width: 140px;
  height: 30px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.priorityImg {
  width: 20px;
  height: 20px;
}
.priorityText {
  font-size: 13px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;EACV,yCAAyC;AAC3C;AACA;;EAEE,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,cAAc;AAChB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,mCAAmC;EACnC,cAAc;EACd,yBAAyB;AAC3B;AACA;EACE,iBAAiB;EACjB,oBAAoB;EACpB,kBAAkB;AACpB;AACA;;;EAGE,kBAAkB;AACpB;AACA;;;;EAIE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,mBAAmB;EACnB,eAAe;AACjB;AACA;;;EAGE,WAAW;EACX,YAAY;AACd;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;;EAEE,6BAA6B;EAC7B,mBAAmB;EACnB,6BAA6B;EAC7B,2BAA2B;EAC3B,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,cAAc;AAChB;AACA;EACE,yBAAyB;EACzB,cAAc;AAChB;AACA,aAAa;AACb;EACE,kBAAkB;AACpB;;AAEA,WAAW;AACX;EACE,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,qBAAqB;AACvB;AACA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,6BAA6B;EAC7B,YAAY;EACZ,eAAe;AACjB;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;AACA;;EAEE,eAAe;EACf,YAAY;AACd;AACA;EACE,gBAAgB;EAChB,YAAY;AACd;AACA;EACE,sBAAsB;EACtB,YAAY;AACd;AACA,iBAAiB;AACjB;EACE,kBAAkB;AACpB;AACA;EACE,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,gCAAgC;EAChC,WAAW;EACX,mBAAmB;AACrB;AACA;;;EAGE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,YAAY;EACZ,8BAA8B;AAChC;AACA;;EAEE,SAAS;AACX;AACA;EACE,YAAY;AACd;AACA;;EAEE,kBAAkB;EAClB,YAAY;EACZ,6BAA6B;AAC/B;AACA;;EAEE,mBAAmB;EACnB,YAAY;EACZ,6BAA6B;AAC/B;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,eAAe;AACjB","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: \"Libre Franklin\", sans-serif;\r\n}\r\nhtml,\r\nbody {\r\n  /* height: 100%; */\r\n}\r\nbody {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n.main {\r\n  height: 70vmax;\r\n}\r\n.menu {\r\n  padding-left: 10px;\r\n  width: 35vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 12px;\r\n  border-right: 1px solid transparent;\r\n  height: 70vmax;\r\n  background-color: #fcfaf8;\r\n}\r\n.menu h2 {\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  padding-left: 10px;\r\n}\r\n.imgholderAdd,\r\n.imgholderStar,\r\n.imgholderAll {\r\n  padding-right: 6px;\r\n}\r\n.todaySortButton,\r\n.addButton,\r\n.allTasksButton,\r\n.addButton2 {\r\n  display: flex;\r\n  flex-direction: row;\r\n  /* justify-content: center; */\r\n  align-items: center;\r\n  cursor: pointer;\r\n}\r\n.starImage,\r\n.addImage,\r\n.allTasksImage {\r\n  width: 27px;\r\n  height: 27px;\r\n}\r\n.addImage2 {\r\n  width: 19px;\r\n  height: 19px;\r\n}\r\n.allTasksImage {\r\n  width: 23px;\r\n  height: 23px;\r\n}\r\n.menu button,\r\n.addButton2 {\r\n  border: 1px solid transparent;\r\n  border-radius: 10px;\r\n  background-color: transparent;\r\n  text-align: left !important;\r\n  font-size: 16px;\r\n  padding: 6px 10px;\r\n  margin-right: 10px;\r\n  color: #363432;\r\n}\r\n.menu button:hover {\r\n  background-color: #b9bc9b;\r\n  color: #f6f9f6;\r\n}\r\n/* Greeting */\r\n.greeting {\r\n  padding: 10px 15px;\r\n}\r\n\r\n/* Dialog */\r\n.addTaskDialogHTML {\r\n  position: absolute;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 10vh;\r\n  width: 470px;\r\n  height: 410px;\r\n  border: 2px solid transparent;\r\n  border-radius: 10px;\r\n}\r\n.addTaskDialogHTML div {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.closeDialogDiv {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: flex-end;\r\n}\r\n.closeDialog {\r\n  margin-top: 10px;\r\n  margin-right: 10px;\r\n  background-color: transparent;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n.closeDialogImg {\r\n  width: 26px;\r\n  height: 26px;\r\n}\r\n.addTaskFormHTML {\r\n  margin: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n.singleFormQuestion input,\r\n.singleFormQuestion select {\r\n  margin-top: 6px;\r\n  height: 25px;\r\n}\r\n.submitAddTaskFormHTML {\r\n  margin-top: 12px;\r\n  height: 27px;\r\n}\r\n::backdrop {\r\n  background-color: gray;\r\n  opacity: 0.5;\r\n}\r\n/* Tasks/Todos  */\r\n.taskHolder {\r\n  padding: 10px 15px;\r\n}\r\n.singleDateDOM {\r\n  margin-bottom: 15px;\r\n  margin-top: 25x;\r\n}\r\n.toDoCard {\r\n  border-bottom: 1px solid #363432;\r\n  width: 65vw;\r\n  margin-bottom: 15px;\r\n}\r\n.firstLineDiv,\r\n.taskCheckBoxDiv,\r\n.editDeleteDiv {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\r\n.firstLineDiv {\r\n  margin: 10px;\r\n  justify-content: space-between;\r\n}\r\n.taskCheckBoxDiv,\r\n.editDeleteDiv {\r\n  gap: 10px;\r\n}\r\n.taskDescriptionDOM {\r\n  margin: 10px;\r\n}\r\n.taskDeleteButton,\r\n.taskEditButton {\r\n  visibility: hidden;\r\n  border: none;\r\n  background-color: transparent;\r\n}\r\n.toDoCard:hover .taskDeleteButton,\r\n.toDoCard:hover .taskEditButton {\r\n  visibility: visible;\r\n  border: none;\r\n  background-color: transparent;\r\n}\r\n.editTaskButtonImg {\r\n  width: 19px;\r\n  height: 19px;\r\n}\r\n.deleteTaskButtonImg {\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n.priorityDiv {\r\n  border-radius: 5px;\r\n  width: 140px;\r\n  height: 30px;\r\n  margin-bottom: 10px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.priorityImg {\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n.priorityText {\r\n  font-size: 13px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addImagesToButtons: () => (/* binding */ addImagesToButtons)
/* harmony export */ });
/* harmony import */ var _img_star_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/star.png */ "./src/img/star.png");
/* harmony import */ var _img_plus4_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/plus4.png */ "./src/img/plus4.png");
/* harmony import */ var _img_plus5_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/plus5.png */ "./src/img/plus5.png");
/* harmony import */ var _img_allTasks_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/allTasks.png */ "./src/img/allTasks.png");





function addImagesToButtons() {
  // Add add img to Add 1 button
  const imgholderAdd = document.querySelector(".imgholderAdd");
  const addImage = document.createElement("img");
  addImage.classList.add("addImage");
  addImage.src = _img_plus4_png__WEBPACK_IMPORTED_MODULE_1__;
  imgholderAdd.appendChild(addImage);

  // Add add img to Add 2 button
  const imgholderAdd2 = document.querySelector(".imgholderAdd2");
  const addImage2 = document.createElement("img");
  addImage2.classList.add("addImage2");
  addImage2.src = _img_plus5_png__WEBPACK_IMPORTED_MODULE_2__;
  imgholderAdd2.appendChild(addImage2);

  // Add star img to Today button
  const imgholderStar = document.querySelector(".imgholderStar");
  const starImage = document.createElement("img");
  starImage.classList.add("starImage");
  starImage.src = _img_star_png__WEBPACK_IMPORTED_MODULE_0__;
  imgholderStar.appendChild(starImage);

  // Add 'all' img to All button
  const imgholderAll = document.querySelector(".imgholderAll");
  const allTasksImage = document.createElement("img");
  allTasksImage.classList.add("allTasksImage");
  allTasksImage.src = _img_allTasks_png__WEBPACK_IMPORTED_MODULE_3__;
  imgholderAll.appendChild(allTasksImage);
}


/***/ }),

/***/ "./src/defaultTask.js":
/*!****************************!*\
  !*** ./src/defaultTask.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDefaultTask: () => (/* binding */ addDefaultTask)
/* harmony export */ });
/* harmony import */ var _newToDo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newToDo.js */ "./src/newToDo.js");
/* harmony import */ var _greetings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./greetings.js */ "./src/greetings.js");
/* harmony import */ var _taskDOM_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskDOM.js */ "./src/taskDOM.js");




function addDefaultTask() {
  const todayDate = (0,_greetings_js__WEBPACK_IMPORTED_MODULE_1__.getTodayDate)();
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  if (tasks.length === 0) {
    const defaultTask = (0,_newToDo_js__WEBPACK_IMPORTED_MODULE_0__.populateStorage)(
      "Add your first task",
      "Do it by clicking on Add Task in menu section",
      todayDate,
      "High",
      false
    );

    (0,_taskDOM_js__WEBPACK_IMPORTED_MODULE_2__.showTaskOnScreen)((0,_taskDOM_js__WEBPACK_IMPORTED_MODULE_2__.groupTasksByDate)());
  }
}


/***/ }),

/***/ "./src/dialog.js":
/*!***********************!*\
  !*** ./src/dialog.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAddTaskDialog: () => (/* binding */ createAddTaskDialog)
/* harmony export */ });
/* harmony import */ var _newToDo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newToDo.js */ "./src/newToDo.js");
/* harmony import */ var _taskDOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskDOM.js */ "./src/taskDOM.js");
/* harmony import */ var _greetings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./greetings.js */ "./src/greetings.js");
/* harmony import */ var _img_close_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/close.png */ "./src/img/close.png");






function createAddTaskDialog(contentBox, addTodoButton) {
  const { addTaskDialogHTML, addTaskFormHTML, taskInputs } =
    createAddTaskDialogDOM(contentBox);

  // Event listener for addTodoButton
  addTodoButton.addEventListener("click", () => {
    addTaskDialogHTML.showModal();
  });

  // Add event listener for form submission
  addTaskFormHTML.addEventListener("submit", (event) => {
    event.preventDefault();

    const newTask = (0,_newToDo_js__WEBPACK_IMPORTED_MODULE_0__.populateStorage)(
      taskInputs.taskNameInput.value,
      taskInputs.taskDescriptionInput.value,
      taskInputs.taskDueDateInput.value,
      taskInputs.taskPriorityInput.value,
      false
    );

    console.log("New Task Added:", newTask);

    // Clear the form inputs after submission
    taskInputs.taskNameInput.value = "";
    taskInputs.taskDescriptionInput.value = "";
    taskInputs.taskDueDateInput.value = (0,_greetings_js__WEBPACK_IMPORTED_MODULE_2__.getTodayDate)(); // Reset to today's date
    taskInputs.taskPriorityInput.value = "high"; // Reset to default priority

    // Show the task on the screen
    (0,_taskDOM_js__WEBPACK_IMPORTED_MODULE_1__.showTaskOnScreen)((0,_taskDOM_js__WEBPACK_IMPORTED_MODULE_1__.groupTasksByDate)());

    addTaskDialogHTML.close();
  });

  return addTaskDialogHTML;
}

function createAddTaskDialogDOM(contentBox) {
  // Dialog settings
  const addTaskDialogHTML = document.createElement("dialog");
  addTaskDialogHTML.classList.add("addTaskDialogHTML");

  const closeDialog = document.createElement("button");
  closeDialog.classList.add("closeDialog");
  const closeDialogImg = document.createElement("img");
  closeDialogImg.classList.add("closeDialogImg");
  closeDialogImg.src = _img_close_png__WEBPACK_IMPORTED_MODULE_3__;

  const closeDialogDiv = document.createElement("div");
  closeDialogDiv.classList.add("closeDialogDiv");

  closeDialog.appendChild(closeDialogImg);

  closeDialog.addEventListener("click", () => {
    addTaskDialogHTML.close();
  });

  closeDialogDiv.appendChild(closeDialog);
  addTaskDialogHTML.appendChild(closeDialogDiv);
  contentBox.appendChild(addTaskDialogHTML);

  const { addTaskFormHTML, taskInputs } = createAddTaskForm();

  // Append the form to the dialog
  addTaskDialogHTML.appendChild(addTaskFormHTML);

  return { addTaskDialogHTML, addTaskFormHTML, taskInputs };
}

function createAddTaskForm() {
  // Create a Form
  const addTaskFormHTML = document.createElement("form");
  addTaskFormHTML.classList.add("addTaskFormHTML");

  // Task Name
  const taskName = document.createElement("div");
  taskName.classList.add("singleFormQuestion");

  const taskNameLabel = document.createElement("label");
  taskNameLabel.htmlFor = "TaskName";
  taskNameLabel.textContent = "Task Name";

  const taskNameInput = document.createElement("input");
  taskNameInput.type = "text";
  taskNameInput.name = "TaskName";
  taskNameInput.id = "TaskName";

  taskName.appendChild(taskNameLabel);
  taskName.appendChild(taskNameInput);

  // Task Description
  const taskDescription = document.createElement("div");
  taskDescription.classList.add("singleFormQuestion");

  const taskDescriptionLabel = document.createElement("label");
  taskDescriptionLabel.htmlFor = "taskDescription";
  taskDescriptionLabel.textContent = "Task Description";

  const taskDescriptionInput = document.createElement("input");
  taskDescriptionInput.type = "text";
  taskDescriptionInput.name = "taskDescription";
  taskDescriptionInput.id = "taskDescription";

  taskDescription.appendChild(taskDescriptionLabel);
  taskDescription.appendChild(taskDescriptionInput);

  // Task Due Date
  const taskDueDate = document.createElement("div");
  taskDueDate.classList.add("singleFormQuestion");

  const taskDueDateLabel = document.createElement("label");
  taskDueDateLabel.htmlFor = "taskDueDate";
  taskDueDateLabel.textContent = "Task Due Date";

  const taskDueDateInput = document.createElement("input");
  taskDueDateInput.type = "date";
  const todayDate = (0,_greetings_js__WEBPACK_IMPORTED_MODULE_2__.getTodayDate)();
  taskDueDateInput.value = todayDate;
  taskDueDateInput.name = "taskDueDate";
  taskDueDateInput.id = "taskDueDate";

  taskDueDate.appendChild(taskDueDateLabel);
  taskDueDate.appendChild(taskDueDateInput);

  // Priority
  const taskPriority = document.createElement("div");
  taskPriority.classList.add("singleFormQuestion");

  const taskPriorityLabel = document.createElement("label");
  taskPriorityLabel.htmlFor = "taskPriority";
  taskPriorityLabel.textContent = "Task Priority";

  const taskPriorityInput = document.createElement("select");
  taskPriorityInput.name = "taskPriority";
  taskPriorityInput.id = "taskPriority";

  const priorities = ["High", "Medium", "Low"];
  priorities.forEach((priority) => {
    const option = document.createElement("option");
    option.value = priority.toLowerCase();
    option.textContent = priority;
    taskPriorityInput.appendChild(option);
  });

  taskPriorityInput.value = "high"; // Set default priority to High

  taskPriority.appendChild(taskPriorityLabel);
  taskPriority.appendChild(taskPriorityInput);

  // Submit button
  const submitAddTaskFormHTML = document.createElement("button");
  submitAddTaskFormHTML.classList.add("submitAddTaskFormHTML");
  submitAddTaskFormHTML.type = "submit";
  submitAddTaskFormHTML.textContent = "Submit";

  // Append form elements to the form
  addTaskFormHTML.appendChild(taskName);
  addTaskFormHTML.appendChild(taskDescription);
  addTaskFormHTML.appendChild(taskDueDate);
  addTaskFormHTML.appendChild(taskPriority);
  addTaskFormHTML.appendChild(submitAddTaskFormHTML);

  const taskInputs = {
    taskNameInput,
    taskDescriptionInput,
    taskDueDateInput,
    taskPriorityInput,
  };

  return { addTaskFormHTML, taskInputs };
}


/***/ }),

/***/ "./src/domElements.js":
/*!****************************!*\
  !*** ./src/domElements.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTodoButton: () => (/* binding */ addTodoButton),
/* harmony export */   addTodoButton2: () => (/* binding */ addTodoButton2),
/* harmony export */   allTasksButton: () => (/* binding */ allTasksButton),
/* harmony export */   checkBoxM: () => (/* binding */ checkBoxM),
/* harmony export */   contentBox: () => (/* binding */ contentBox),
/* harmony export */   todaySortButton: () => (/* binding */ todaySortButton)
/* harmony export */ });
const contentBox = document.querySelector("#content");
const addTodoButton = document.querySelector(".addButton");
const addTodoButton2 = document.querySelector(".addButton2");
const todaySortButton = document.querySelector(".todaySortButton");
const allTasksButton = document.querySelector(".allTasksButton");
const checkBoxM = document.querySelectorAll("#doneStatus");


/***/ }),

/***/ "./src/doneTask.js":
/*!*************************!*\
  !*** ./src/doneTask.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   markTaskCompletion: () => (/* binding */ markTaskCompletion)
/* harmony export */ });
/* harmony import */ var _newToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newToDo */ "./src/newToDo.js");


function markTaskCompletion(index) {
  // Toggle the completed property of the corresponding task
  // todos[index].completed = !todos[index].completed;

  const taskNameDOM = document.querySelectorAll(".taskNameDOM");
  const taskDescriptionDOM = document.querySelectorAll(".taskDescriptionDOM");

  taskNameDOM.forEach((name, i) => {
    if (i === index) {
      // "none" ? "block" : "none";
      name.style.textDecoration =
        name.style.textDecoration === "line-through" ? "none" : "line-through";
    }
  });

  taskDescriptionDOM.forEach((description, i) => {
    if (i === index) {
      description.style.textDecoration =
        description.style.textDecoration === "line-through"
          ? "none"
          : "line-through";
    }
  });
}


/***/ }),

/***/ "./src/editTask.js":
/*!*************************!*\
  !*** ./src/editTask.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createEditTaskDialogDOM: () => (/* binding */ createEditTaskDialogDOM)
/* harmony export */ });
/* harmony import */ var _img_close_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/close.png */ "./src/img/close.png");
/* harmony import */ var _newToDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newToDo */ "./src/newToDo.js");
/* harmony import */ var _taskDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskDOM */ "./src/taskDOM.js");





function createEditTaskDialogDOM(contentBox, taskId) {
  // Find the task by ID
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const task = tasks.find((t) => t.id === taskId);

  // Dialog settings
  const editTaskDialogHTML = document.createElement("dialog");
  editTaskDialogHTML.classList.add("addTaskDialogHTML");

  const closeDialog = document.createElement("button");
  closeDialog.classList.add("closeDialog");
  const closeDialogImg = document.createElement("img");
  closeDialogImg.classList.add("closeDialogImg");
  closeDialogImg.src = _img_close_png__WEBPACK_IMPORTED_MODULE_0__;

  const closeDialogDiv = document.createElement("div");
  closeDialogDiv.classList.add("closeDialogDiv");

  closeDialog.appendChild(closeDialogImg);

  closeDialog.addEventListener("click", () => {
    editTaskDialogHTML.close();
  });

  closeDialogDiv.appendChild(closeDialog);
  editTaskDialogHTML.appendChild(closeDialogDiv);
  contentBox.appendChild(editTaskDialogHTML);

  const { addTaskFormHTML, taskInputs } = createEditTaskForm(
    task,
    editTaskDialogHTML
  );

  // Append the form to the dialog
  editTaskDialogHTML.appendChild(addTaskFormHTML);

  return { editTaskDialogHTML, addTaskFormHTML, taskInputs };
}

function createEditTaskForm(task, dialog) {
  // Create a Form
  const addTaskFormHTML = document.createElement("form");
  addTaskFormHTML.classList.add("addTaskFormHTML");

  // Task Name
  const taskName = document.createElement("div");
  taskName.classList.add("singleFormQuestion");

  const taskNameLabel = document.createElement("label");
  taskNameLabel.htmlFor = "TaskName";
  taskNameLabel.textContent = "Task Name";

  const taskNameInput = document.createElement("input");
  taskNameInput.type = "text";
  taskNameInput.name = "TaskName";
  taskNameInput.id = "TaskName";
  taskNameInput.value = task.name || ""; // Ensure default value is an empty string

  taskName.appendChild(taskNameLabel);
  taskName.appendChild(taskNameInput);

  // Task Description
  const taskDescription = document.createElement("div");
  taskDescription.classList.add("singleFormQuestion");

  const taskDescriptionLabel = document.createElement("label");
  taskDescriptionLabel.htmlFor = "taskDescription";
  taskDescriptionLabel.textContent = "Task Description";

  const taskDescriptionInput = document.createElement("input");
  taskDescriptionInput.type = "text";
  taskDescriptionInput.name = "taskDescription";
  taskDescriptionInput.id = "taskDescription";
  taskDescriptionInput.value = task.description || ""; // Ensure default value is an empty string

  taskDescription.appendChild(taskDescriptionLabel);
  taskDescription.appendChild(taskDescriptionInput);

  // Task Due Date
  const taskDueDate = document.createElement("div");
  taskDueDate.classList.add("singleFormQuestion");

  const taskDueDateLabel = document.createElement("label");
  taskDueDateLabel.htmlFor = "taskDueDate";
  taskDueDateLabel.textContent = "Task Due Date";

  const taskDueDateInput = document.createElement("input");
  taskDueDateInput.type = "date";
  taskDueDateInput.value = task.dueDate || ""; // Ensure default value is an empty string
  taskDueDateInput.name = "taskDueDate";
  taskDueDateInput.id = "taskDueDate";

  taskDueDate.appendChild(taskDueDateLabel);
  taskDueDate.appendChild(taskDueDateInput);

  // Priority
  const taskPriority = document.createElement("div");
  taskPriority.classList.add("singleFormQuestion");

  const taskPriorityLabel = document.createElement("label");
  taskPriorityLabel.htmlFor = "taskPriority";
  taskPriorityLabel.textContent = "Task Priority";

  const taskPriorityInput = document.createElement("select");
  taskPriorityInput.name = "taskPriority";
  taskPriorityInput.id = "taskPriority";

  const priorities = ["High", "Medium", "Low"];
  priorities.forEach((priority) => {
    const option = document.createElement("option");
    option.value = priority.toLowerCase();
    option.textContent = priority;
    if (
      task.priority &&
      task.priority.toLowerCase() === priority.toLowerCase()
    ) {
      option.selected = true; // Ensure the current priority is selected
    }
    taskPriorityInput.appendChild(option);
  });

  taskPriority.appendChild(taskPriorityLabel);
  taskPriority.appendChild(taskPriorityInput);

  // Submit button
  const submitAddTaskFormHTML = document.createElement("button");
  submitAddTaskFormHTML.classList.add("submitAddTaskFormHTML");
  submitAddTaskFormHTML.type = "submit";
  submitAddTaskFormHTML.textContent = "Save";

  // Append form elements to the form
  addTaskFormHTML.appendChild(taskName);
  addTaskFormHTML.appendChild(taskDescription);
  addTaskFormHTML.appendChild(taskDueDate);
  addTaskFormHTML.appendChild(taskPriority);
  addTaskFormHTML.appendChild(submitAddTaskFormHTML);

  const taskInputs = {
    taskNameInput,
    taskDescriptionInput,
    taskDueDateInput,
    taskPriorityInput,
  };

  addTaskFormHTML.addEventListener("submit", (event) => {
    // Remove the task from the DOM
    // dateHeader.removeChild(toDoCard);
    event.preventDefault();

    // const { editTaskDialogHTML, addTaskFormHTML, taskInputs } =
    //   editTaskDialogHTML(contentBox);

    // Find the index of the task in the localStorage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = tasks.filter((t) => t.id !== task.id);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    const newTask = (0,_newToDo__WEBPACK_IMPORTED_MODULE_1__.populateStorage)(
      taskInputs.taskNameInput.value,
      taskInputs.taskDescriptionInput.value,
      taskInputs.taskDueDateInput.value,
      taskInputs.taskPriorityInput.value,
      false
    );
    console.log("New Task Added:", newTask);

    // //div that will include the tasks (mainly)
    // const taskHolder = document.createElement("div");
    // taskHolder.classList.add("taskHolder");

    //To show the task on the screen
    // groupTasksByDate();
    (0,_taskDOM__WEBPACK_IMPORTED_MODULE_2__.showTaskOnScreen)((0,_taskDOM__WEBPACK_IMPORTED_MODULE_2__.groupTasksByDate)());

    dialog.close();
  });

  return { addTaskFormHTML, taskInputs };
}


/***/ }),

/***/ "./src/eventListeners.js":
/*!*******************************!*\
  !*** ./src/eventListeners.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addCheckboxListeners: () => (/* binding */ addCheckboxListeners),
/* harmony export */   setupEventListeners: () => (/* binding */ setupEventListeners)
/* harmony export */ });
/* harmony import */ var _taskDOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskDOM.js */ "./src/taskDOM.js");
/* harmony import */ var _doneTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doneTask.js */ "./src/doneTask.js");
/* harmony import */ var _todayTask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todayTask.js */ "./src/todayTask.js");
/* harmony import */ var _domElements_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domElements.js */ "./src/domElements.js");
/* harmony import */ var _dialog_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog.js */ "./src/dialog.js");







function setupEventListeners() {
  const addTaskDialogHTML = (0,_dialog_js__WEBPACK_IMPORTED_MODULE_4__.createAddTaskDialog)(_domElements_js__WEBPACK_IMPORTED_MODULE_3__.contentBox, _domElements_js__WEBPACK_IMPORTED_MODULE_3__.addTodoButton);

  _domElements_js__WEBPACK_IMPORTED_MODULE_3__.addTodoButton.addEventListener("click", () => {
    addTaskDialogHTML.showModal();
  });

  _domElements_js__WEBPACK_IMPORTED_MODULE_3__.addTodoButton2.addEventListener("click", () => {
    addTaskDialogHTML.showModal();
  });

  _domElements_js__WEBPACK_IMPORTED_MODULE_3__.todaySortButton.addEventListener("click", () => {
    (0,_taskDOM_js__WEBPACK_IMPORTED_MODULE_0__.showTaskOnScreen)((0,_todayTask_js__WEBPACK_IMPORTED_MODULE_2__.showTodayTask)());
  });

  _domElements_js__WEBPACK_IMPORTED_MODULE_3__.allTasksButton.addEventListener("click", () => {
    (0,_taskDOM_js__WEBPACK_IMPORTED_MODULE_0__.groupTasksByDate)();
    (0,_taskDOM_js__WEBPACK_IMPORTED_MODULE_0__.showTaskOnScreen)((0,_taskDOM_js__WEBPACK_IMPORTED_MODULE_0__.groupTasksByDate)());
    console.log("All tasks are shown"); //debugging
  });
}

function addCheckboxListeners() {
  const checkBoxM = document.querySelectorAll(
    ".taskCheckBoxDiv input[type='checkbox']"
  );

  checkBoxM.forEach((checkBox, index) => {
    checkBox.addEventListener("change", () => {
      (0,_doneTask_js__WEBPACK_IMPORTED_MODULE_1__.markTaskCompletion)(index);
    });
  });
}


/***/ }),

/***/ "./src/greetings.js":
/*!**************************!*\
  !*** ./src/greetings.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTodayDate: () => (/* binding */ getTodayDate),
/* harmony export */   getTomorrowDate: () => (/* binding */ getTomorrowDate),
/* harmony export */   greetFunction: () => (/* binding */ greetFunction)
/* harmony export */ });
/* harmony import */ var _domElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements.js */ "./src/domElements.js");


function greetFunction() {
  const greeting = document.createElement("div");
  greeting.classList.add("greeting");

  const greetingText = document.createElement("h2");

  const currentHour = new Date().getHours();
  greetingText.textContent = getGreetingMessage(currentHour);

  greeting.appendChild(greetingText);
  _domElements_js__WEBPACK_IMPORTED_MODULE_0__.contentBox.appendChild(greeting);
}

function getGreetingMessage(hour) {
  if (hour < 12) {
    return "Good Morning!";
  } else if (hour < 17) {
    return "Good Afternoon!";
  } else {
    return "Good Evening!";
  }
}

function getTodayDate() {
  return formatDate(new Date());
}

function getTomorrowDate() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return formatDate(tomorrow);
}

function formatDate(date) {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
}


/***/ }),

/***/ "./src/newToDo.js":
/*!************************!*\
  !*** ./src/newToDo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populateStorage: () => (/* binding */ populateStorage)
/* harmony export */ });
// export const todos = [];

// export function createTask(
//   name,
//   description,
//   dueDate,
//   priority,
//   completed = false
// ) {
//   const task = {
//     id: Date.now().toString(), // identifier for each task
//     name,
//     description,
//     dueDate,
//     priority,
//     completed,
//   };
//   todos.push(task);
//   return task;
// }

function populateStorage(
  name,
  description,
  dueDate,
  priority,
  completed = false
) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const newTask = {
    id: Date.now().toString(),
    name,
    description,
    dueDate,
    priority,
    completed,
  };
  tasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}


/***/ }),

/***/ "./src/taskDOM.js":
/*!************************!*\
  !*** ./src/taskDOM.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   groupTasksByDate: () => (/* binding */ groupTasksByDate),
/* harmony export */   showTaskOnScreen: () => (/* binding */ showTaskOnScreen)
/* harmony export */ });
/* harmony import */ var _domElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements.js */ "./src/domElements.js");
/* harmony import */ var _img_delete2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/delete2.png */ "./src/img/delete2.png");
/* harmony import */ var _img_edit_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/edit.png */ "./src/img/edit.png");
/* harmony import */ var _img_highPriority_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/highPriority.png */ "./src/img/highPriority.png");
/* harmony import */ var _img_mediumPriority_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/mediumPriority.png */ "./src/img/mediumPriority.png");
/* harmony import */ var _img_lowPriority_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/lowPriority.png */ "./src/img/lowPriority.png");
/* harmony import */ var _greetings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./greetings.js */ "./src/greetings.js");
/* harmony import */ var _editTask_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editTask.js */ "./src/editTask.js");









function groupTasksByDate() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const groupedTasks = tasks.reduce((acc, task) => {
    if (!acc[task.dueDate]) {
      acc[task.dueDate] = [];
    }
    acc[task.dueDate].push(task);
    return acc;
  }, {});
  return groupedTasks;
}

function showTaskOnScreen(groupedBy) {
  let taskHolder = document.querySelector(".taskHolder");

  if (!taskHolder) {
    taskHolder = document.createElement("div");
    taskHolder.classList.add("taskHolder");
    _domElements_js__WEBPACK_IMPORTED_MODULE_0__.contentBox.appendChild(taskHolder);
  }

  // Clear taskHolder content before using again
  taskHolder.innerHTML = "";

  const groupedTasks = groupedBy || groupTasksByDate();

  Object.keys(groupedTasks).forEach((dueDate) => {
    const { dateHeader } = addTodayDateOnScreen(dueDate);

    groupedTasks[dueDate].forEach((task) => {
      const toDoCard = document.createElement("div");
      toDoCard.classList.add("toDoCard");

      // Add checkbox
      const taskCheckBoxDiv = document.createElement("div");
      taskCheckBoxDiv.classList.add("taskCheckBoxDiv");
      const taskCheckBox = document.createElement("input");
      taskCheckBox.type = "checkbox";
      taskCheckBox.checked = task.completed;
      taskCheckBox.dataset.taskId = task.id;
      taskCheckBoxDiv.appendChild(taskCheckBox);

      // Add the name of the task
      const taskNameDOM = document.createElement("p");
      taskNameDOM.textContent = task.name;
      taskNameDOM.classList.add("taskNameDOM");
      taskCheckBoxDiv.appendChild(taskNameDOM);

      // Add the edit button with value "edit"
      const taskEditButton = document.createElement("button");
      taskEditButton.classList.add("taskEditButton");
      const editTaskButtonImg = document.createElement("img");
      editTaskButtonImg.classList.add("editTaskButtonImg");
      editTaskButtonImg.src = _img_edit_png__WEBPACK_IMPORTED_MODULE_2__;
      taskEditButton.appendChild(editTaskButtonImg);

      // Add the delete button
      const taskDeleteButton = document.createElement("button");
      taskDeleteButton.classList.add("taskDeleteButton");
      const deleteTaskButtonImg = document.createElement("img");
      deleteTaskButtonImg.classList.add("deleteTaskButtonImg");
      deleteTaskButtonImg.src = _img_delete2_png__WEBPACK_IMPORTED_MODULE_1__;
      taskDeleteButton.appendChild(deleteTaskButtonImg);

      // DIV for edit and delete button
      const editDeleteDiv = document.createElement("div");
      editDeleteDiv.classList.add("editDeleteDiv");
      editDeleteDiv.appendChild(taskEditButton);
      editDeleteDiv.appendChild(taskDeleteButton);

      // First line div
      const firstLineDiv = document.createElement("div");
      firstLineDiv.classList.add("firstLineDiv");
      firstLineDiv.appendChild(taskCheckBoxDiv);
      firstLineDiv.appendChild(editDeleteDiv);
      toDoCard.appendChild(firstLineDiv);

      // Add the description of the task
      const taskDescriptionDOM = document.createElement("p"); // Second line of the todo card
      taskDescriptionDOM.textContent = task.description;
      taskDescriptionDOM.classList.add("taskDescriptionDOM");
      toDoCard.appendChild(taskDescriptionDOM);

      dateHeader.appendChild(toDoCard);

      // Third line div that will have priority
      const thirdLineDiv = document.createElement("div");
      thirdLineDiv.classList.add("priorityDiv");

      // High priority img
      const highPriorityImg = document.createElement("img");
      highPriorityImg.classList.add("priorityImg");
      highPriorityImg.src = _img_highPriority_png__WEBPACK_IMPORTED_MODULE_3__;
      const highPriorityText = document.createElement("span");
      highPriorityText.textContent = "High Priority";
      highPriorityText.classList.add("priorityText");

      // Medium priority img
      const mediumPriorityImg = document.createElement("img");
      mediumPriorityImg.classList.add("priorityImg");
      mediumPriorityImg.src = _img_mediumPriority_png__WEBPACK_IMPORTED_MODULE_4__;
      const mediumPriorityText = document.createElement("span");
      mediumPriorityText.textContent = "Medium Priority";
      mediumPriorityText.classList.add("priorityText");

      // Low priority img
      const lowPriorityImg = document.createElement("img");
      lowPriorityImg.classList.add("priorityImg");
      lowPriorityImg.src = _img_lowPriority_png__WEBPACK_IMPORTED_MODULE_5__;
      const lowPriorityText = document.createElement("span");
      lowPriorityText.textContent = "Low Priority";
      lowPriorityText.classList.add("priorityText");

      // Check and append based on task priority
      if (task.priority == "high" || task.priority == "High") {
        thirdLineDiv.style.backgroundColor = "#fddfdf";
        thirdLineDiv.appendChild(highPriorityImg);
        thirdLineDiv.appendChild(highPriorityText);
      } else if (task.priority == "medium" || task.priority == "Medium") {
        thirdLineDiv.style.backgroundColor = "#ffffc9";
        thirdLineDiv.appendChild(mediumPriorityImg);
        thirdLineDiv.appendChild(mediumPriorityText);
      } else if (task.priority == "low" || task.priority == "Low") {
        thirdLineDiv.style.backgroundColor = "#e0ffe0";
        thirdLineDiv.appendChild(lowPriorityImg);
        thirdLineDiv.appendChild(lowPriorityText);
      }

      toDoCard.appendChild(thirdLineDiv);

      // Event listener for a taskDeleteButton
      taskDeleteButton.addEventListener("click", () => {
        // Remove the task from the DOM
        dateHeader.removeChild(toDoCard);

        // Remove the task from local storage
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const updatedTasks = tasks.filter((t) => t.id !== task.id);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));

        // Refresh the task list on screen
        showTaskOnScreen();
      });

      taskEditButton.addEventListener("click", () => {
        const { editTaskDialogHTML } = (0,_editTask_js__WEBPACK_IMPORTED_MODULE_7__.createEditTaskDialogDOM)(
          _domElements_js__WEBPACK_IMPORTED_MODULE_0__.contentBox,
          task.id
        );
        editTaskDialogHTML.showModal();
      });

      // Add event listener to the checkbox
      taskCheckBox.addEventListener("change", function () {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const taskToUpdate = tasks.find((t) => t.id === task.id);
        taskToUpdate.completed = this.checked;

        localStorage.setItem("tasks", JSON.stringify(tasks));

        taskNameDOM.style.textDecoration = taskToUpdate.completed
          ? "line-through"
          : "none";
        taskDescriptionDOM.style.textDecoration = taskToUpdate.completed
          ? "line-through"
          : "none";
      });
    });

    taskHolder.appendChild(dateHeader);
  });
}

function addTodayDateOnScreen(dueDate) {
  const dateHeader = document.createElement("div");
  dateHeader.classList.add("singleDateHolder");

  // Date adding
  const singleDateDOM = document.createElement("p");
  singleDateDOM.classList.add("singleDateDOM");
  const todayDate = (0,_greetings_js__WEBPACK_IMPORTED_MODULE_6__.getTodayDate)();
  const tomorrowDate = (0,_greetings_js__WEBPACK_IMPORTED_MODULE_6__.getTomorrowDate)();

  if (dueDate === todayDate) {
    singleDateDOM.textContent = "Today, " + dueDate;
  } else if (dueDate === tomorrowDate) {
    singleDateDOM.textContent = "Tomorrow, " + dueDate;
  } else {
    singleDateDOM.textContent = dueDate;
  }
  dateHeader.appendChild(singleDateDOM);

  return { dateHeader };
}


/***/ }),

/***/ "./src/todayTask.js":
/*!**************************!*\
  !*** ./src/todayTask.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showTodayTask: () => (/* binding */ showTodayTask)
/* harmony export */ });
/* harmony import */ var _greetings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./greetings.js */ "./src/greetings.js");


function showTodayTask() {
  const todayDate = (0,_greetings_js__WEBPACK_IMPORTED_MODULE_0__.getTodayDate)();
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  console.log("Today tasks are shown?"); //debugging

  const todayGroupedTasks = tasks.reduce((acc, task) => {
    if (task.dueDate === todayDate) {
      if (!acc[task.dueDate]) {
        acc[task.dueDate] = [];
      }
      acc[task.dueDate].push(task);
    }
    return acc;
  }, {});
  return todayGroupedTasks;
}


/***/ }),

/***/ "./src/img/allTasks.png":
/*!******************************!*\
  !*** ./src/img/allTasks.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca6667b6fe699e060b54.png";

/***/ }),

/***/ "./src/img/close.png":
/*!***************************!*\
  !*** ./src/img/close.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6f145cc686016babcf8d.png";

/***/ }),

/***/ "./src/img/delete2.png":
/*!*****************************!*\
  !*** ./src/img/delete2.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "45e3c3f522a230810480.png";

/***/ }),

/***/ "./src/img/edit.png":
/*!**************************!*\
  !*** ./src/img/edit.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f79017318869ff4bee36.png";

/***/ }),

/***/ "./src/img/highPriority.png":
/*!**********************************!*\
  !*** ./src/img/highPriority.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e0e6abbc50c6b1e13db3.png";

/***/ }),

/***/ "./src/img/lowPriority.png":
/*!*********************************!*\
  !*** ./src/img/lowPriority.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b16274dfe47d96b9f382.png";

/***/ }),

/***/ "./src/img/mediumPriority.png":
/*!************************************!*\
  !*** ./src/img/mediumPriority.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "33ea1e19248e113c73cf.png";

/***/ }),

/***/ "./src/img/plus4.png":
/*!***************************!*\
  !*** ./src/img/plus4.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "28b95bffac8bf9935702.png";

/***/ }),

/***/ "./src/img/plus5.png":
/*!***************************!*\
  !*** ./src/img/plus5.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "81a1c5e274351abce4a7.png";

/***/ }),

/***/ "./src/img/star.png":
/*!**************************!*\
  !*** ./src/img/star.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a8afc1285338319746a9.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");
/* harmony import */ var _greetings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./greetings.js */ "./src/greetings.js");
/* harmony import */ var _defaultTask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaultTask.js */ "./src/defaultTask.js");
/* harmony import */ var _eventListeners_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eventListeners.js */ "./src/eventListeners.js");
/* harmony import */ var _taskDOM_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./taskDOM.js */ "./src/taskDOM.js");








(0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.addImagesToButtons)();

// Initialize the greeting
(0,_greetings_js__WEBPACK_IMPORTED_MODULE_2__.greetFunction)();

// Adds default task
(0,_defaultTask_js__WEBPACK_IMPORTED_MODULE_3__.addDefaultTask)();

(0,_eventListeners_js__WEBPACK_IMPORTED_MODULE_4__.setupEventListeners)();
(0,_eventListeners_js__WEBPACK_IMPORTED_MODULE_4__.addCheckboxListeners)();

(0,_taskDOM_js__WEBPACK_IMPORTED_MODULE_5__.showTaskOnScreen)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLE9BQU8sWUFBWSxNQUFNLFFBQVEsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sT0FBTyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLFVBQVUsS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxNQUFNLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxZQUFZLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLE9BQU8sVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sWUFBWSxXQUFXLFlBQVksTUFBTSxNQUFNLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLDZCQUE2Qiw2QkFBNkIsZ0JBQWdCLGlCQUFpQixrREFBa0QsS0FBSyxtQkFBbUIsdUJBQXVCLE9BQU8sVUFBVSxvQkFBb0IsMEJBQTBCLEtBQUssV0FBVyxxQkFBcUIsS0FBSyxXQUFXLHlCQUF5QixrQkFBa0Isb0JBQW9CLDZCQUE2QixnQkFBZ0IsMENBQTBDLHFCQUFxQixnQ0FBZ0MsS0FBSyxjQUFjLHdCQUF3QiwyQkFBMkIseUJBQXlCLEtBQUssd0RBQXdELHlCQUF5QixLQUFLLHlFQUF5RSxvQkFBb0IsMEJBQTBCLGtDQUFrQyw0QkFBNEIsc0JBQXNCLEtBQUssaURBQWlELGtCQUFrQixtQkFBbUIsS0FBSyxnQkFBZ0Isa0JBQWtCLG1CQUFtQixLQUFLLG9CQUFvQixrQkFBa0IsbUJBQW1CLEtBQUssa0NBQWtDLG9DQUFvQywwQkFBMEIsb0NBQW9DLGtDQUFrQyxzQkFBc0Isd0JBQXdCLHlCQUF5QixxQkFBcUIsS0FBSyx3QkFBd0IsZ0NBQWdDLHFCQUFxQixLQUFLLGlDQUFpQyx5QkFBeUIsS0FBSyw0Q0FBNEMseUJBQXlCLHdCQUF3Qix5QkFBeUIsdUJBQXVCLG1CQUFtQixvQkFBb0Isb0NBQW9DLDBCQUEwQixLQUFLLDRCQUE0QixvQkFBb0IsNkJBQTZCLEtBQUsscUJBQXFCLG9CQUFvQiwwQkFBMEIsNEJBQTRCLEtBQUssa0JBQWtCLHVCQUF1Qix5QkFBeUIsb0NBQW9DLG1CQUFtQixzQkFBc0IsS0FBSyxxQkFBcUIsa0JBQWtCLG1CQUFtQixLQUFLLHNCQUFzQixtQkFBbUIsb0JBQW9CLDZCQUE2QixnQkFBZ0IsS0FBSyw4REFBOEQsc0JBQXNCLG1CQUFtQixLQUFLLDRCQUE0Qix1QkFBdUIsbUJBQW1CLEtBQUssZ0JBQWdCLDZCQUE2QixtQkFBbUIsS0FBSyx1Q0FBdUMseUJBQXlCLEtBQUssb0JBQW9CLDBCQUEwQixzQkFBc0IsS0FBSyxlQUFlLHVDQUF1QyxrQkFBa0IsMEJBQTBCLEtBQUssMkRBQTJELG9CQUFvQiwwQkFBMEIsMEJBQTBCLEtBQUssbUJBQW1CLG1CQUFtQixxQ0FBcUMsS0FBSyx5Q0FBeUMsZ0JBQWdCLEtBQUsseUJBQXlCLG1CQUFtQixLQUFLLDJDQUEyQyx5QkFBeUIsbUJBQW1CLG9DQUFvQyxLQUFLLDJFQUEyRSwwQkFBMEIsbUJBQW1CLG9DQUFvQyxLQUFLLHdCQUF3QixrQkFBa0IsbUJBQW1CLEtBQUssMEJBQTBCLGtCQUFrQixtQkFBbUIsS0FBSyxrQkFBa0IseUJBQXlCLG1CQUFtQixtQkFBbUIsMEJBQTBCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEtBQUssa0JBQWtCLGtCQUFrQixtQkFBbUIsS0FBSyxtQkFBbUIsc0JBQXNCLEtBQUssdUJBQXVCO0FBQzE2SztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQzdNMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7QUFDckMsaUJBQWlCLHVHQUFhO0FBQzlCLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDeEJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JrQztBQUNBO0FBQ0M7QUFDUTtBQUMzQztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMkNBQUc7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDJDQUFJO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwwQ0FBSTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsOENBQVM7QUFDL0I7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakMrQztBQUNEO0FBQ29CO0FBQ2xFO0FBQ087QUFDUCxvQkFBb0IsMkRBQVk7QUFDaEM7QUFDQTtBQUNBLHdCQUF3Qiw0REFBZTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNkRBQWdCLENBQUMsNkRBQWdCO0FBQ3JDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQitDO0FBQ0M7QUFDRjtBQUNFO0FBQ1o7QUFDcEM7QUFDTztBQUNQLFVBQVUsaURBQWlEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0REFBZTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsMkRBQVksSUFBSTtBQUN4RCxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBLElBQUksNkRBQWdCLENBQUMsNkRBQWdCO0FBQ3JDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMkNBQUs7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSw4QkFBOEI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMkRBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pMTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMMkI7QUFDbEM7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Qm9DO0FBQ1E7QUFDQztBQUNBO0FBQzdDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMkNBQUs7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSw4QkFBOEI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxrREFBa0Q7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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dEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDeUI7QUFDQztBQUNHO0FBQ1E7QUFDQztBQUNYO0FBQ2hEO0FBQ0EsMkRBQWtCO0FBQ2xCO0FBQ0E7QUFDQSw0REFBYTtBQUNiO0FBQ0E7QUFDQSwrREFBYztBQUNkO0FBQ0EsdUVBQW1CO0FBQ25CLHdFQUFvQjtBQUNwQjtBQUNBLDZEQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovLzE0LS0tdG8tZG8tYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8xNC0tLXRvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vMTQtLS10by1kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8xNC0tLXRvLWRvLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly8xNC0tLXRvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8xNC0tLXRvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vMTQtLS10by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vMTQtLS10by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vMTQtLS10by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8xNC0tLXRvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLzE0LS0tdG8tZG8tYXBwLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly8xNC0tLXRvLWRvLWFwcC8uL3NyYy9kZWZhdWx0VGFzay5qcyIsIndlYnBhY2s6Ly8xNC0tLXRvLWRvLWFwcC8uL3NyYy9kaWFsb2cuanMiLCJ3ZWJwYWNrOi8vMTQtLS10by1kby1hcHAvLi9zcmMvZG9tRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vMTQtLS10by1kby1hcHAvLi9zcmMvZG9uZVRhc2suanMiLCJ3ZWJwYWNrOi8vMTQtLS10by1kby1hcHAvLi9zcmMvZWRpdFRhc2suanMiLCJ3ZWJwYWNrOi8vMTQtLS10by1kby1hcHAvLi9zcmMvZXZlbnRMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vMTQtLS10by1kby1hcHAvLi9zcmMvZ3JlZXRpbmdzLmpzIiwid2VicGFjazovLzE0LS0tdG8tZG8tYXBwLy4vc3JjL25ld1RvRG8uanMiLCJ3ZWJwYWNrOi8vMTQtLS10by1kby1hcHAvLi9zcmMvdGFza0RPTS5qcyIsIndlYnBhY2s6Ly8xNC0tLXRvLWRvLWFwcC8uL3NyYy90b2RheVRhc2suanMiLCJ3ZWJwYWNrOi8vMTQtLS10by1kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vMTQtLS10by1kby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vMTQtLS10by1kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLzE0LS0tdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vMTQtLS10by1kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8xNC0tLXRvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLzE0LS0tdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLzE0LS0tdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly8xNC0tLXRvLWRvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LWZhbWlseTogXCJMaWJyZSBGcmFua2xpblwiLCBzYW5zLXNlcmlmO1xyXG59XHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gIC8qIGhlaWdodDogMTAwJTsgKi9cclxufVxyXG5ib2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuLm1haW4ge1xyXG4gIGhlaWdodDogNzB2bWF4O1xyXG59XHJcbi5tZW51IHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgd2lkdGg6IDM1dmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTJweDtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBoZWlnaHQ6IDcwdm1heDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmYWY4O1xyXG59XHJcbi5tZW51IGgyIHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuLmltZ2hvbGRlckFkZCxcclxuLmltZ2hvbGRlclN0YXIsXHJcbi5pbWdob2xkZXJBbGwge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDZweDtcclxufVxyXG4udG9kYXlTb3J0QnV0dG9uLFxyXG4uYWRkQnV0dG9uLFxyXG4uYWxsVGFza3NCdXR0b24sXHJcbi5hZGRCdXR0b24yIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnN0YXJJbWFnZSxcclxuLmFkZEltYWdlLFxyXG4uYWxsVGFza3NJbWFnZSB7XHJcbiAgd2lkdGg6IDI3cHg7XHJcbiAgaGVpZ2h0OiAyN3B4O1xyXG59XHJcbi5hZGRJbWFnZTIge1xyXG4gIHdpZHRoOiAxOXB4O1xyXG4gIGhlaWdodDogMTlweDtcclxufVxyXG4uYWxsVGFza3NJbWFnZSB7XHJcbiAgd2lkdGg6IDIzcHg7XHJcbiAgaGVpZ2h0OiAyM3B4O1xyXG59XHJcbi5tZW51IGJ1dHRvbixcclxuLmFkZEJ1dHRvbjIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nOiA2cHggMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgY29sb3I6ICMzNjM0MzI7XHJcbn1cclxuLm1lbnUgYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjliYzliO1xyXG4gIGNvbG9yOiAjZjZmOWY2O1xyXG59XHJcbi8qIEdyZWV0aW5nICovXHJcbi5ncmVldGluZyB7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4O1xyXG59XHJcblxyXG4vKiBEaWFsb2cgKi9cclxuLmFkZFRhc2tEaWFsb2dIVE1MIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDEwdmg7XHJcbiAgd2lkdGg6IDQ3MHB4O1xyXG4gIGhlaWdodDogNDEwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uYWRkVGFza0RpYWxvZ0hUTUwgZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLmNsb3NlRGlhbG9nRGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcbi5jbG9zZURpYWxvZyB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY2xvc2VEaWFsb2dJbWcge1xyXG4gIHdpZHRoOiAyNnB4O1xyXG4gIGhlaWdodDogMjZweDtcclxufVxyXG4uYWRkVGFza0Zvcm1IVE1MIHtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTBweDtcclxufVxyXG4uc2luZ2xlRm9ybVF1ZXN0aW9uIGlucHV0LFxyXG4uc2luZ2xlRm9ybVF1ZXN0aW9uIHNlbGVjdCB7XHJcbiAgbWFyZ2luLXRvcDogNnB4O1xyXG4gIGhlaWdodDogMjVweDtcclxufVxyXG4uc3VibWl0QWRkVGFza0Zvcm1IVE1MIHtcclxuICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIGhlaWdodDogMjdweDtcclxufVxyXG46OmJhY2tkcm9wIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG4vKiBUYXNrcy9Ub2RvcyAgKi9cclxuLnRhc2tIb2xkZXIge1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcclxufVxyXG4uc2luZ2xlRGF0ZURPTSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBtYXJnaW4tdG9wOiAyNXg7XHJcbn1cclxuLnRvRG9DYXJkIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzM2MzQzMjtcclxuICB3aWR0aDogNjV2dztcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi5maXJzdExpbmVEaXYsXHJcbi50YXNrQ2hlY2tCb3hEaXYsXHJcbi5lZGl0RGVsZXRlRGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uZmlyc3RMaW5lRGl2IHtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi50YXNrQ2hlY2tCb3hEaXYsXHJcbi5lZGl0RGVsZXRlRGl2IHtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuLnRhc2tEZXNjcmlwdGlvbkRPTSB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbi50YXNrRGVsZXRlQnV0dG9uLFxyXG4udGFza0VkaXRCdXR0b24ge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLnRvRG9DYXJkOmhvdmVyIC50YXNrRGVsZXRlQnV0dG9uLFxyXG4udG9Eb0NhcmQ6aG92ZXIgLnRhc2tFZGl0QnV0dG9uIHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4uZWRpdFRhc2tCdXR0b25JbWcge1xyXG4gIHdpZHRoOiAxOXB4O1xyXG4gIGhlaWdodDogMTlweDtcclxufVxyXG4uZGVsZXRlVGFza0J1dHRvbkltZyB7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcbi5wcmlvcml0eURpdiB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHdpZHRoOiAxNDBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnByaW9yaXR5SW1nIHtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuLnByaW9yaXR5VGV4dCB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtFQUNWLHlDQUF5QztBQUMzQztBQUNBOztFQUVFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxtQ0FBbUM7RUFDbkMsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7QUFDQTs7O0VBR0Usa0JBQWtCO0FBQ3BCO0FBQ0E7Ozs7RUFJRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjtBQUNBOzs7RUFHRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7O0VBRUUsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCO0FBQ0EsYUFBYTtBQUNiO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLFdBQVc7QUFDWDtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYO0FBQ0E7O0VBRUUsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDtBQUNBLGlCQUFpQjtBQUNqQjtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFDQTtFQUNFLGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCO0FBQ0E7OztFQUdFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osOEJBQThCO0FBQ2hDO0FBQ0E7O0VBRUUsU0FBUztBQUNYO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDZCQUE2QjtBQUMvQjtBQUNBOztFQUVFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGlicmUgRnJhbmtsaW5cXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcbiAgLyogaGVpZ2h0OiAxMDAlOyAqL1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbn1cXHJcXG4ubWFpbiB7XFxyXFxuICBoZWlnaHQ6IDcwdm1heDtcXHJcXG59XFxyXFxuLm1lbnUge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgd2lkdGg6IDM1dmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTJweDtcXHJcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgaGVpZ2h0OiA3MHZtYXg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmYWY4O1xcclxcbn1cXHJcXG4ubWVudSBoMiB7XFxyXFxuICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG4uaW1naG9sZGVyQWRkLFxcclxcbi5pbWdob2xkZXJTdGFyLFxcclxcbi5pbWdob2xkZXJBbGwge1xcclxcbiAgcGFkZGluZy1yaWdodDogNnB4O1xcclxcbn1cXHJcXG4udG9kYXlTb3J0QnV0dG9uLFxcclxcbi5hZGRCdXR0b24sXFxyXFxuLmFsbFRhc2tzQnV0dG9uLFxcclxcbi5hZGRCdXR0b24yIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uc3RhckltYWdlLFxcclxcbi5hZGRJbWFnZSxcXHJcXG4uYWxsVGFza3NJbWFnZSB7XFxyXFxuICB3aWR0aDogMjdweDtcXHJcXG4gIGhlaWdodDogMjdweDtcXHJcXG59XFxyXFxuLmFkZEltYWdlMiB7XFxyXFxuICB3aWR0aDogMTlweDtcXHJcXG4gIGhlaWdodDogMTlweDtcXHJcXG59XFxyXFxuLmFsbFRhc2tzSW1hZ2Uge1xcclxcbiAgd2lkdGg6IDIzcHg7XFxyXFxuICBoZWlnaHQ6IDIzcHg7XFxyXFxufVxcclxcbi5tZW51IGJ1dHRvbixcXHJcXG4uYWRkQnV0dG9uMiB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIHBhZGRpbmc6IDZweCAxMHB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgY29sb3I6ICMzNjM0MzI7XFxyXFxufVxcclxcbi5tZW51IGJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjliYzliO1xcclxcbiAgY29sb3I6ICNmNmY5ZjY7XFxyXFxufVxcclxcbi8qIEdyZWV0aW5nICovXFxyXFxuLmdyZWV0aW5nIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogRGlhbG9nICovXFxyXFxuLmFkZFRhc2tEaWFsb2dIVE1MIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgbWFyZ2luLXRvcDogMTB2aDtcXHJcXG4gIHdpZHRoOiA0NzBweDtcXHJcXG4gIGhlaWdodDogNDEwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcbi5hZGRUYXNrRGlhbG9nSFRNTCBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbi5jbG9zZURpYWxvZ0RpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuLmNsb3NlRGlhbG9nIHtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmNsb3NlRGlhbG9nSW1nIHtcXHJcXG4gIHdpZHRoOiAyNnB4O1xcclxcbiAgaGVpZ2h0OiAyNnB4O1xcclxcbn1cXHJcXG4uYWRkVGFza0Zvcm1IVE1MIHtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG4uc2luZ2xlRm9ybVF1ZXN0aW9uIGlucHV0LFxcclxcbi5zaW5nbGVGb3JtUXVlc3Rpb24gc2VsZWN0IHtcXHJcXG4gIG1hcmdpbi10b3A6IDZweDtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG59XFxyXFxuLnN1Ym1pdEFkZFRhc2tGb3JtSFRNTCB7XFxyXFxuICBtYXJnaW4tdG9wOiAxMnB4O1xcclxcbiAgaGVpZ2h0OiAyN3B4O1xcclxcbn1cXHJcXG46OmJhY2tkcm9wIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxyXFxuICBvcGFjaXR5OiAwLjU7XFxyXFxufVxcclxcbi8qIFRhc2tzL1RvZG9zICAqL1xcclxcbi50YXNrSG9sZGVyIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG59XFxyXFxuLnNpbmdsZURhdGVET00ge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG4gIG1hcmdpbi10b3A6IDI1eDtcXHJcXG59XFxyXFxuLnRvRG9DYXJkIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzYzNDMyO1xcclxcbiAgd2lkdGg6IDY1dnc7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG4uZmlyc3RMaW5lRGl2LFxcclxcbi50YXNrQ2hlY2tCb3hEaXYsXFxyXFxuLmVkaXREZWxldGVEaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uZmlyc3RMaW5lRGl2IHtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuLnRhc2tDaGVja0JveERpdixcXHJcXG4uZWRpdERlbGV0ZURpdiB7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcbi50YXNrRGVzY3JpcHRpb25ET00ge1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG4udGFza0RlbGV0ZUJ1dHRvbixcXHJcXG4udGFza0VkaXRCdXR0b24ge1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcbi50b0RvQ2FyZDpob3ZlciAudGFza0RlbGV0ZUJ1dHRvbixcXHJcXG4udG9Eb0NhcmQ6aG92ZXIgLnRhc2tFZGl0QnV0dG9uIHtcXHJcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuLmVkaXRUYXNrQnV0dG9uSW1nIHtcXHJcXG4gIHdpZHRoOiAxOXB4O1xcclxcbiAgaGVpZ2h0OiAxOXB4O1xcclxcbn1cXHJcXG4uZGVsZXRlVGFza0J1dHRvbkltZyB7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG59XFxyXFxuLnByaW9yaXR5RGl2IHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHdpZHRoOiAxNDBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4ucHJpb3JpdHlJbWcge1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxufVxcclxcbi5wcmlvcml0eVRleHQge1xcclxcbiAgZm9udC1zaXplOiAxM3B4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBzdGFyIGZyb20gXCIuL2ltZy9zdGFyLnBuZ1wiO1xyXG5pbXBvcnQgYWRkIGZyb20gXCIuL2ltZy9wbHVzNC5wbmdcIjtcclxuaW1wb3J0IGFkZDIgZnJvbSBcIi4vaW1nL3BsdXM1LnBuZ1wiO1xyXG5pbXBvcnQgYWxsUGFwZXJzIGZyb20gXCIuL2ltZy9hbGxUYXNrcy5wbmdcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRJbWFnZXNUb0J1dHRvbnMoKSB7XHJcbiAgLy8gQWRkIGFkZCBpbWcgdG8gQWRkIDEgYnV0dG9uXHJcbiAgY29uc3QgaW1naG9sZGVyQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbWdob2xkZXJBZGRcIik7XHJcbiAgY29uc3QgYWRkSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGFkZEltYWdlLmNsYXNzTGlzdC5hZGQoXCJhZGRJbWFnZVwiKTtcclxuICBhZGRJbWFnZS5zcmMgPSBhZGQ7XHJcbiAgaW1naG9sZGVyQWRkLmFwcGVuZENoaWxkKGFkZEltYWdlKTtcclxuXHJcbiAgLy8gQWRkIGFkZCBpbWcgdG8gQWRkIDIgYnV0dG9uXHJcbiAgY29uc3QgaW1naG9sZGVyQWRkMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW1naG9sZGVyQWRkMlwiKTtcclxuICBjb25zdCBhZGRJbWFnZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGFkZEltYWdlMi5jbGFzc0xpc3QuYWRkKFwiYWRkSW1hZ2UyXCIpO1xyXG4gIGFkZEltYWdlMi5zcmMgPSBhZGQyO1xyXG4gIGltZ2hvbGRlckFkZDIuYXBwZW5kQ2hpbGQoYWRkSW1hZ2UyKTtcclxuXHJcbiAgLy8gQWRkIHN0YXIgaW1nIHRvIFRvZGF5IGJ1dHRvblxyXG4gIGNvbnN0IGltZ2hvbGRlclN0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmltZ2hvbGRlclN0YXJcIik7XHJcbiAgY29uc3Qgc3RhckltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBzdGFySW1hZ2UuY2xhc3NMaXN0LmFkZChcInN0YXJJbWFnZVwiKTtcclxuICBzdGFySW1hZ2Uuc3JjID0gc3RhcjtcclxuICBpbWdob2xkZXJTdGFyLmFwcGVuZENoaWxkKHN0YXJJbWFnZSk7XHJcblxyXG4gIC8vIEFkZCAnYWxsJyBpbWcgdG8gQWxsIGJ1dHRvblxyXG4gIGNvbnN0IGltZ2hvbGRlckFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW1naG9sZGVyQWxsXCIpO1xyXG4gIGNvbnN0IGFsbFRhc2tzSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGFsbFRhc2tzSW1hZ2UuY2xhc3NMaXN0LmFkZChcImFsbFRhc2tzSW1hZ2VcIik7XHJcbiAgYWxsVGFza3NJbWFnZS5zcmMgPSBhbGxQYXBlcnM7XHJcbiAgaW1naG9sZGVyQWxsLmFwcGVuZENoaWxkKGFsbFRhc2tzSW1hZ2UpO1xyXG59XHJcbiIsImltcG9ydCB7IHBvcHVsYXRlU3RvcmFnZSB9IGZyb20gXCIuL25ld1RvRG8uanNcIjtcclxuaW1wb3J0IHsgZ2V0VG9kYXlEYXRlIH0gZnJvbSBcIi4vZ3JlZXRpbmdzLmpzXCI7XHJcbmltcG9ydCB7IHNob3dUYXNrT25TY3JlZW4sIGdyb3VwVGFza3NCeURhdGUgfSBmcm9tIFwiLi90YXNrRE9NLmpzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkRGVmYXVsdFRhc2soKSB7XHJcbiAgY29uc3QgdG9kYXlEYXRlID0gZ2V0VG9kYXlEYXRlKCk7XHJcbiAgY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpIHx8IFtdO1xyXG4gIGlmICh0YXNrcy5sZW5ndGggPT09IDApIHtcclxuICAgIGNvbnN0IGRlZmF1bHRUYXNrID0gcG9wdWxhdGVTdG9yYWdlKFxyXG4gICAgICBcIkFkZCB5b3VyIGZpcnN0IHRhc2tcIixcclxuICAgICAgXCJEbyBpdCBieSBjbGlja2luZyBvbiBBZGQgVGFzayBpbiBtZW51IHNlY3Rpb25cIixcclxuICAgICAgdG9kYXlEYXRlLFxyXG4gICAgICBcIkhpZ2hcIixcclxuICAgICAgZmFsc2VcclxuICAgICk7XHJcblxyXG4gICAgc2hvd1Rhc2tPblNjcmVlbihncm91cFRhc2tzQnlEYXRlKCkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBwb3B1bGF0ZVN0b3JhZ2UgfSBmcm9tIFwiLi9uZXdUb0RvLmpzXCI7XHJcbmltcG9ydCB7IHNob3dUYXNrT25TY3JlZW4gfSBmcm9tIFwiLi90YXNrRE9NLmpzXCI7XHJcbmltcG9ydCB7IGdldFRvZGF5RGF0ZSB9IGZyb20gXCIuL2dyZWV0aW5ncy5qc1wiO1xyXG5pbXBvcnQgeyBncm91cFRhc2tzQnlEYXRlIH0gZnJvbSBcIi4vdGFza0RPTS5qc1wiO1xyXG5pbXBvcnQgY2xvc2UgZnJvbSBcIi4vaW1nL2Nsb3NlLnBuZ1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFkZFRhc2tEaWFsb2coY29udGVudEJveCwgYWRkVG9kb0J1dHRvbikge1xyXG4gIGNvbnN0IHsgYWRkVGFza0RpYWxvZ0hUTUwsIGFkZFRhc2tGb3JtSFRNTCwgdGFza0lucHV0cyB9ID1cclxuICAgIGNyZWF0ZUFkZFRhc2tEaWFsb2dET00oY29udGVudEJveCk7XHJcblxyXG4gIC8vIEV2ZW50IGxpc3RlbmVyIGZvciBhZGRUb2RvQnV0dG9uXHJcbiAgYWRkVG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgYWRkVGFza0RpYWxvZ0hUTUwuc2hvd01vZGFsKCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIEFkZCBldmVudCBsaXN0ZW5lciBmb3IgZm9ybSBzdWJtaXNzaW9uXHJcbiAgYWRkVGFza0Zvcm1IVE1MLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IG5ld1Rhc2sgPSBwb3B1bGF0ZVN0b3JhZ2UoXHJcbiAgICAgIHRhc2tJbnB1dHMudGFza05hbWVJbnB1dC52YWx1ZSxcclxuICAgICAgdGFza0lucHV0cy50YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZSxcclxuICAgICAgdGFza0lucHV0cy50YXNrRHVlRGF0ZUlucHV0LnZhbHVlLFxyXG4gICAgICB0YXNrSW5wdXRzLnRhc2tQcmlvcml0eUlucHV0LnZhbHVlLFxyXG4gICAgICBmYWxzZVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIk5ldyBUYXNrIEFkZGVkOlwiLCBuZXdUYXNrKTtcclxuXHJcbiAgICAvLyBDbGVhciB0aGUgZm9ybSBpbnB1dHMgYWZ0ZXIgc3VibWlzc2lvblxyXG4gICAgdGFza0lucHV0cy50YXNrTmFtZUlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgIHRhc2tJbnB1dHMudGFza0Rlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgdGFza0lucHV0cy50YXNrRHVlRGF0ZUlucHV0LnZhbHVlID0gZ2V0VG9kYXlEYXRlKCk7IC8vIFJlc2V0IHRvIHRvZGF5J3MgZGF0ZVxyXG4gICAgdGFza0lucHV0cy50YXNrUHJpb3JpdHlJbnB1dC52YWx1ZSA9IFwiaGlnaFwiOyAvLyBSZXNldCB0byBkZWZhdWx0IHByaW9yaXR5XHJcblxyXG4gICAgLy8gU2hvdyB0aGUgdGFzayBvbiB0aGUgc2NyZWVuXHJcbiAgICBzaG93VGFza09uU2NyZWVuKGdyb3VwVGFza3NCeURhdGUoKSk7XHJcblxyXG4gICAgYWRkVGFza0RpYWxvZ0hUTUwuY2xvc2UoKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGFkZFRhc2tEaWFsb2dIVE1MO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBZGRUYXNrRGlhbG9nRE9NKGNvbnRlbnRCb3gpIHtcclxuICAvLyBEaWFsb2cgc2V0dGluZ3NcclxuICBjb25zdCBhZGRUYXNrRGlhbG9nSFRNTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XHJcbiAgYWRkVGFza0RpYWxvZ0hUTUwuY2xhc3NMaXN0LmFkZChcImFkZFRhc2tEaWFsb2dIVE1MXCIpO1xyXG5cclxuICBjb25zdCBjbG9zZURpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgY2xvc2VEaWFsb2cuY2xhc3NMaXN0LmFkZChcImNsb3NlRGlhbG9nXCIpO1xyXG4gIGNvbnN0IGNsb3NlRGlhbG9nSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBjbG9zZURpYWxvZ0ltZy5jbGFzc0xpc3QuYWRkKFwiY2xvc2VEaWFsb2dJbWdcIik7XHJcbiAgY2xvc2VEaWFsb2dJbWcuc3JjID0gY2xvc2U7XHJcblxyXG4gIGNvbnN0IGNsb3NlRGlhbG9nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjbG9zZURpYWxvZ0Rpdi5jbGFzc0xpc3QuYWRkKFwiY2xvc2VEaWFsb2dEaXZcIik7XHJcblxyXG4gIGNsb3NlRGlhbG9nLmFwcGVuZENoaWxkKGNsb3NlRGlhbG9nSW1nKTtcclxuXHJcbiAgY2xvc2VEaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGFkZFRhc2tEaWFsb2dIVE1MLmNsb3NlKCk7XHJcbiAgfSk7XHJcblxyXG4gIGNsb3NlRGlhbG9nRGl2LmFwcGVuZENoaWxkKGNsb3NlRGlhbG9nKTtcclxuICBhZGRUYXNrRGlhbG9nSFRNTC5hcHBlbmRDaGlsZChjbG9zZURpYWxvZ0Rpdik7XHJcbiAgY29udGVudEJveC5hcHBlbmRDaGlsZChhZGRUYXNrRGlhbG9nSFRNTCk7XHJcblxyXG4gIGNvbnN0IHsgYWRkVGFza0Zvcm1IVE1MLCB0YXNrSW5wdXRzIH0gPSBjcmVhdGVBZGRUYXNrRm9ybSgpO1xyXG5cclxuICAvLyBBcHBlbmQgdGhlIGZvcm0gdG8gdGhlIGRpYWxvZ1xyXG4gIGFkZFRhc2tEaWFsb2dIVE1MLmFwcGVuZENoaWxkKGFkZFRhc2tGb3JtSFRNTCk7XHJcblxyXG4gIHJldHVybiB7IGFkZFRhc2tEaWFsb2dIVE1MLCBhZGRUYXNrRm9ybUhUTUwsIHRhc2tJbnB1dHMgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQWRkVGFza0Zvcm0oKSB7XHJcbiAgLy8gQ3JlYXRlIGEgRm9ybVxyXG4gIGNvbnN0IGFkZFRhc2tGb3JtSFRNTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gIGFkZFRhc2tGb3JtSFRNTC5jbGFzc0xpc3QuYWRkKFwiYWRkVGFza0Zvcm1IVE1MXCIpO1xyXG5cclxuICAvLyBUYXNrIE5hbWVcclxuICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdGFza05hbWUuY2xhc3NMaXN0LmFkZChcInNpbmdsZUZvcm1RdWVzdGlvblwiKTtcclxuXHJcbiAgY29uc3QgdGFza05hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICB0YXNrTmFtZUxhYmVsLmh0bWxGb3IgPSBcIlRhc2tOYW1lXCI7XHJcbiAgdGFza05hbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiVGFzayBOYW1lXCI7XHJcblxyXG4gIGNvbnN0IHRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgdGFza05hbWVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgdGFza05hbWVJbnB1dC5uYW1lID0gXCJUYXNrTmFtZVwiO1xyXG4gIHRhc2tOYW1lSW5wdXQuaWQgPSBcIlRhc2tOYW1lXCI7XHJcblxyXG4gIHRhc2tOYW1lLmFwcGVuZENoaWxkKHRhc2tOYW1lTGFiZWwpO1xyXG4gIHRhc2tOYW1lLmFwcGVuZENoaWxkKHRhc2tOYW1lSW5wdXQpO1xyXG5cclxuICAvLyBUYXNrIERlc2NyaXB0aW9uXHJcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0YXNrRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInNpbmdsZUZvcm1RdWVzdGlvblwiKTtcclxuXHJcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgdGFza0Rlc2NyaXB0aW9uTGFiZWwuaHRtbEZvciA9IFwidGFza0Rlc2NyaXB0aW9uXCI7XHJcbiAgdGFza0Rlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBcIlRhc2sgRGVzY3JpcHRpb25cIjtcclxuXHJcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgdGFza0Rlc2NyaXB0aW9uSW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG4gIHRhc2tEZXNjcmlwdGlvbklucHV0Lm5hbWUgPSBcInRhc2tEZXNjcmlwdGlvblwiO1xyXG4gIHRhc2tEZXNjcmlwdGlvbklucHV0LmlkID0gXCJ0YXNrRGVzY3JpcHRpb25cIjtcclxuXHJcbiAgdGFza0Rlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbkxhYmVsKTtcclxuICB0YXNrRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uSW5wdXQpO1xyXG5cclxuICAvLyBUYXNrIER1ZSBEYXRlXHJcbiAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRhc2tEdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJzaW5nbGVGb3JtUXVlc3Rpb25cIik7XHJcblxyXG4gIGNvbnN0IHRhc2tEdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgdGFza0R1ZURhdGVMYWJlbC5odG1sRm9yID0gXCJ0YXNrRHVlRGF0ZVwiO1xyXG4gIHRhc2tEdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIlRhc2sgRHVlIERhdGVcIjtcclxuXHJcbiAgY29uc3QgdGFza0R1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICB0YXNrRHVlRGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcclxuICBjb25zdCB0b2RheURhdGUgPSBnZXRUb2RheURhdGUoKTtcclxuICB0YXNrRHVlRGF0ZUlucHV0LnZhbHVlID0gdG9kYXlEYXRlO1xyXG4gIHRhc2tEdWVEYXRlSW5wdXQubmFtZSA9IFwidGFza0R1ZURhdGVcIjtcclxuICB0YXNrRHVlRGF0ZUlucHV0LmlkID0gXCJ0YXNrRHVlRGF0ZVwiO1xyXG5cclxuICB0YXNrRHVlRGF0ZS5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZUxhYmVsKTtcclxuICB0YXNrRHVlRGF0ZS5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZUlucHV0KTtcclxuXHJcbiAgLy8gUHJpb3JpdHlcclxuICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwic2luZ2xlRm9ybVF1ZXN0aW9uXCIpO1xyXG5cclxuICBjb25zdCB0YXNrUHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICB0YXNrUHJpb3JpdHlMYWJlbC5odG1sRm9yID0gXCJ0YXNrUHJpb3JpdHlcIjtcclxuICB0YXNrUHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiVGFzayBQcmlvcml0eVwiO1xyXG5cclxuICBjb25zdCB0YXNrUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcbiAgdGFza1ByaW9yaXR5SW5wdXQubmFtZSA9IFwidGFza1ByaW9yaXR5XCI7XHJcbiAgdGFza1ByaW9yaXR5SW5wdXQuaWQgPSBcInRhc2tQcmlvcml0eVwiO1xyXG5cclxuICBjb25zdCBwcmlvcml0aWVzID0gW1wiSGlnaFwiLCBcIk1lZGl1bVwiLCBcIkxvd1wiXTtcclxuICBwcmlvcml0aWVzLmZvckVhY2goKHByaW9yaXR5KSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgb3B0aW9uLnZhbHVlID0gcHJpb3JpdHkudG9Mb3dlckNhc2UoKTtcclxuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByaW9yaXR5O1xyXG4gICAgdGFza1ByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICB9KTtcclxuXHJcbiAgdGFza1ByaW9yaXR5SW5wdXQudmFsdWUgPSBcImhpZ2hcIjsgLy8gU2V0IGRlZmF1bHQgcHJpb3JpdHkgdG8gSGlnaFxyXG5cclxuICB0YXNrUHJpb3JpdHkuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5TGFiZWwpO1xyXG4gIHRhc2tQcmlvcml0eS5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlJbnB1dCk7XHJcblxyXG4gIC8vIFN1Ym1pdCBidXR0b25cclxuICBjb25zdCBzdWJtaXRBZGRUYXNrRm9ybUhUTUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIHN1Ym1pdEFkZFRhc2tGb3JtSFRNTC5jbGFzc0xpc3QuYWRkKFwic3VibWl0QWRkVGFza0Zvcm1IVE1MXCIpO1xyXG4gIHN1Ym1pdEFkZFRhc2tGb3JtSFRNTC50eXBlID0gXCJzdWJtaXRcIjtcclxuICBzdWJtaXRBZGRUYXNrRm9ybUhUTUwudGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xyXG5cclxuICAvLyBBcHBlbmQgZm9ybSBlbGVtZW50cyB0byB0aGUgZm9ybVxyXG4gIGFkZFRhc2tGb3JtSFRNTC5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XHJcbiAgYWRkVGFza0Zvcm1IVE1MLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XHJcbiAgYWRkVGFza0Zvcm1IVE1MLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKTtcclxuICBhZGRUYXNrRm9ybUhUTUwuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcclxuICBhZGRUYXNrRm9ybUhUTUwuYXBwZW5kQ2hpbGQoc3VibWl0QWRkVGFza0Zvcm1IVE1MKTtcclxuXHJcbiAgY29uc3QgdGFza0lucHV0cyA9IHtcclxuICAgIHRhc2tOYW1lSW5wdXQsXHJcbiAgICB0YXNrRGVzY3JpcHRpb25JbnB1dCxcclxuICAgIHRhc2tEdWVEYXRlSW5wdXQsXHJcbiAgICB0YXNrUHJpb3JpdHlJbnB1dCxcclxuICB9O1xyXG5cclxuICByZXR1cm4geyBhZGRUYXNrRm9ybUhUTUwsIHRhc2tJbnB1dHMgfTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgY29udGVudEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuZXhwb3J0IGNvbnN0IGFkZFRvZG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZEJ1dHRvblwiKTtcclxuZXhwb3J0IGNvbnN0IGFkZFRvZG9CdXR0b24yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRCdXR0b24yXCIpO1xyXG5leHBvcnQgY29uc3QgdG9kYXlTb3J0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheVNvcnRCdXR0b25cIik7XHJcbmV4cG9ydCBjb25zdCBhbGxUYXNrc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWxsVGFza3NCdXR0b25cIik7XHJcbmV4cG9ydCBjb25zdCBjaGVja0JveE0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2RvbmVTdGF0dXNcIik7XHJcbiIsImltcG9ydCB7IHRvZG9zIH0gZnJvbSBcIi4vbmV3VG9Eb1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtUYXNrQ29tcGxldGlvbihpbmRleCkge1xyXG4gIC8vIFRvZ2dsZSB0aGUgY29tcGxldGVkIHByb3BlcnR5IG9mIHRoZSBjb3JyZXNwb25kaW5nIHRhc2tcclxuICAvLyB0b2Rvc1tpbmRleF0uY29tcGxldGVkID0gIXRvZG9zW2luZGV4XS5jb21wbGV0ZWQ7XHJcblxyXG4gIGNvbnN0IHRhc2tOYW1lRE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrTmFtZURPTVwiKTtcclxuICBjb25zdCB0YXNrRGVzY3JpcHRpb25ET00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tEZXNjcmlwdGlvbkRPTVwiKTtcclxuXHJcbiAgdGFza05hbWVET00uZm9yRWFjaCgobmFtZSwgaSkgPT4ge1xyXG4gICAgaWYgKGkgPT09IGluZGV4KSB7XHJcbiAgICAgIC8vIFwibm9uZVwiID8gXCJibG9ja1wiIDogXCJub25lXCI7XHJcbiAgICAgIG5hbWUuc3R5bGUudGV4dERlY29yYXRpb24gPVxyXG4gICAgICAgIG5hbWUuc3R5bGUudGV4dERlY29yYXRpb24gPT09IFwibGluZS10aHJvdWdoXCIgPyBcIm5vbmVcIiA6IFwibGluZS10aHJvdWdoXCI7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHRhc2tEZXNjcmlwdGlvbkRPTS5mb3JFYWNoKChkZXNjcmlwdGlvbiwgaSkgPT4ge1xyXG4gICAgaWYgKGkgPT09IGluZGV4KSB7XHJcbiAgICAgIGRlc2NyaXB0aW9uLnN0eWxlLnRleHREZWNvcmF0aW9uID1cclxuICAgICAgICBkZXNjcmlwdGlvbi5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9PT0gXCJsaW5lLXRocm91Z2hcIlxyXG4gICAgICAgICAgPyBcIm5vbmVcIlxyXG4gICAgICAgICAgOiBcImxpbmUtdGhyb3VnaFwiO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBjbG9zZSBmcm9tIFwiLi9pbWcvY2xvc2UucG5nXCI7XHJcbmltcG9ydCB7IHBvcHVsYXRlU3RvcmFnZSB9IGZyb20gXCIuL25ld1RvRG9cIjtcclxuaW1wb3J0IHsgZ3JvdXBUYXNrc0J5RGF0ZSB9IGZyb20gXCIuL3Rhc2tET01cIjtcclxuaW1wb3J0IHsgc2hvd1Rhc2tPblNjcmVlbiB9IGZyb20gXCIuL3Rhc2tET01cIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFZGl0VGFza0RpYWxvZ0RPTShjb250ZW50Qm94LCB0YXNrSWQpIHtcclxuICAvLyBGaW5kIHRoZSB0YXNrIGJ5IElEXHJcbiAgY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpIHx8IFtdO1xyXG4gIGNvbnN0IHRhc2sgPSB0YXNrcy5maW5kKCh0KSA9PiB0LmlkID09PSB0YXNrSWQpO1xyXG5cclxuICAvLyBEaWFsb2cgc2V0dGluZ3NcclxuICBjb25zdCBlZGl0VGFza0RpYWxvZ0hUTUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xyXG4gIGVkaXRUYXNrRGlhbG9nSFRNTC5jbGFzc0xpc3QuYWRkKFwiYWRkVGFza0RpYWxvZ0hUTUxcIik7XHJcblxyXG4gIGNvbnN0IGNsb3NlRGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBjbG9zZURpYWxvZy5jbGFzc0xpc3QuYWRkKFwiY2xvc2VEaWFsb2dcIik7XHJcbiAgY29uc3QgY2xvc2VEaWFsb2dJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGNsb3NlRGlhbG9nSW1nLmNsYXNzTGlzdC5hZGQoXCJjbG9zZURpYWxvZ0ltZ1wiKTtcclxuICBjbG9zZURpYWxvZ0ltZy5zcmMgPSBjbG9zZTtcclxuXHJcbiAgY29uc3QgY2xvc2VEaWFsb2dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNsb3NlRGlhbG9nRGl2LmNsYXNzTGlzdC5hZGQoXCJjbG9zZURpYWxvZ0RpdlwiKTtcclxuXHJcbiAgY2xvc2VEaWFsb2cuYXBwZW5kQ2hpbGQoY2xvc2VEaWFsb2dJbWcpO1xyXG5cclxuICBjbG9zZURpYWxvZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgZWRpdFRhc2tEaWFsb2dIVE1MLmNsb3NlKCk7XHJcbiAgfSk7XHJcblxyXG4gIGNsb3NlRGlhbG9nRGl2LmFwcGVuZENoaWxkKGNsb3NlRGlhbG9nKTtcclxuICBlZGl0VGFza0RpYWxvZ0hUTUwuYXBwZW5kQ2hpbGQoY2xvc2VEaWFsb2dEaXYpO1xyXG4gIGNvbnRlbnRCb3guYXBwZW5kQ2hpbGQoZWRpdFRhc2tEaWFsb2dIVE1MKTtcclxuXHJcbiAgY29uc3QgeyBhZGRUYXNrRm9ybUhUTUwsIHRhc2tJbnB1dHMgfSA9IGNyZWF0ZUVkaXRUYXNrRm9ybShcclxuICAgIHRhc2ssXHJcbiAgICBlZGl0VGFza0RpYWxvZ0hUTUxcclxuICApO1xyXG5cclxuICAvLyBBcHBlbmQgdGhlIGZvcm0gdG8gdGhlIGRpYWxvZ1xyXG4gIGVkaXRUYXNrRGlhbG9nSFRNTC5hcHBlbmRDaGlsZChhZGRUYXNrRm9ybUhUTUwpO1xyXG5cclxuICByZXR1cm4geyBlZGl0VGFza0RpYWxvZ0hUTUwsIGFkZFRhc2tGb3JtSFRNTCwgdGFza0lucHV0cyB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVFZGl0VGFza0Zvcm0odGFzaywgZGlhbG9nKSB7XHJcbiAgLy8gQ3JlYXRlIGEgRm9ybVxyXG4gIGNvbnN0IGFkZFRhc2tGb3JtSFRNTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gIGFkZFRhc2tGb3JtSFRNTC5jbGFzc0xpc3QuYWRkKFwiYWRkVGFza0Zvcm1IVE1MXCIpO1xyXG5cclxuICAvLyBUYXNrIE5hbWVcclxuICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdGFza05hbWUuY2xhc3NMaXN0LmFkZChcInNpbmdsZUZvcm1RdWVzdGlvblwiKTtcclxuXHJcbiAgY29uc3QgdGFza05hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICB0YXNrTmFtZUxhYmVsLmh0bWxGb3IgPSBcIlRhc2tOYW1lXCI7XHJcbiAgdGFza05hbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiVGFzayBOYW1lXCI7XHJcblxyXG4gIGNvbnN0IHRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgdGFza05hbWVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgdGFza05hbWVJbnB1dC5uYW1lID0gXCJUYXNrTmFtZVwiO1xyXG4gIHRhc2tOYW1lSW5wdXQuaWQgPSBcIlRhc2tOYW1lXCI7XHJcbiAgdGFza05hbWVJbnB1dC52YWx1ZSA9IHRhc2submFtZSB8fCBcIlwiOyAvLyBFbnN1cmUgZGVmYXVsdCB2YWx1ZSBpcyBhbiBlbXB0eSBzdHJpbmdcclxuXHJcbiAgdGFza05hbWUuYXBwZW5kQ2hpbGQodGFza05hbWVMYWJlbCk7XHJcbiAgdGFza05hbWUuYXBwZW5kQ2hpbGQodGFza05hbWVJbnB1dCk7XHJcblxyXG4gIC8vIFRhc2sgRGVzY3JpcHRpb25cclxuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwic2luZ2xlRm9ybVF1ZXN0aW9uXCIpO1xyXG5cclxuICBjb25zdCB0YXNrRGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICB0YXNrRGVzY3JpcHRpb25MYWJlbC5odG1sRm9yID0gXCJ0YXNrRGVzY3JpcHRpb25cIjtcclxuICB0YXNrRGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiVGFzayBEZXNjcmlwdGlvblwiO1xyXG5cclxuICBjb25zdCB0YXNrRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICB0YXNrRGVzY3JpcHRpb25JbnB1dC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgdGFza0Rlc2NyaXB0aW9uSW5wdXQubmFtZSA9IFwidGFza0Rlc2NyaXB0aW9uXCI7XHJcbiAgdGFza0Rlc2NyaXB0aW9uSW5wdXQuaWQgPSBcInRhc2tEZXNjcmlwdGlvblwiO1xyXG4gIHRhc2tEZXNjcmlwdGlvbklucHV0LnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbiB8fCBcIlwiOyAvLyBFbnN1cmUgZGVmYXVsdCB2YWx1ZSBpcyBhbiBlbXB0eSBzdHJpbmdcclxuXHJcbiAgdGFza0Rlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbkxhYmVsKTtcclxuICB0YXNrRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uSW5wdXQpO1xyXG5cclxuICAvLyBUYXNrIER1ZSBEYXRlXHJcbiAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRhc2tEdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJzaW5nbGVGb3JtUXVlc3Rpb25cIik7XHJcblxyXG4gIGNvbnN0IHRhc2tEdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgdGFza0R1ZURhdGVMYWJlbC5odG1sRm9yID0gXCJ0YXNrRHVlRGF0ZVwiO1xyXG4gIHRhc2tEdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIlRhc2sgRHVlIERhdGVcIjtcclxuXHJcbiAgY29uc3QgdGFza0R1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICB0YXNrRHVlRGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcclxuICB0YXNrRHVlRGF0ZUlucHV0LnZhbHVlID0gdGFzay5kdWVEYXRlIHx8IFwiXCI7IC8vIEVuc3VyZSBkZWZhdWx0IHZhbHVlIGlzIGFuIGVtcHR5IHN0cmluZ1xyXG4gIHRhc2tEdWVEYXRlSW5wdXQubmFtZSA9IFwidGFza0R1ZURhdGVcIjtcclxuICB0YXNrRHVlRGF0ZUlucHV0LmlkID0gXCJ0YXNrRHVlRGF0ZVwiO1xyXG5cclxuICB0YXNrRHVlRGF0ZS5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZUxhYmVsKTtcclxuICB0YXNrRHVlRGF0ZS5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZUlucHV0KTtcclxuXHJcbiAgLy8gUHJpb3JpdHlcclxuICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwic2luZ2xlRm9ybVF1ZXN0aW9uXCIpO1xyXG5cclxuICBjb25zdCB0YXNrUHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICB0YXNrUHJpb3JpdHlMYWJlbC5odG1sRm9yID0gXCJ0YXNrUHJpb3JpdHlcIjtcclxuICB0YXNrUHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiVGFzayBQcmlvcml0eVwiO1xyXG5cclxuICBjb25zdCB0YXNrUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcbiAgdGFza1ByaW9yaXR5SW5wdXQubmFtZSA9IFwidGFza1ByaW9yaXR5XCI7XHJcbiAgdGFza1ByaW9yaXR5SW5wdXQuaWQgPSBcInRhc2tQcmlvcml0eVwiO1xyXG5cclxuICBjb25zdCBwcmlvcml0aWVzID0gW1wiSGlnaFwiLCBcIk1lZGl1bVwiLCBcIkxvd1wiXTtcclxuICBwcmlvcml0aWVzLmZvckVhY2goKHByaW9yaXR5KSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgb3B0aW9uLnZhbHVlID0gcHJpb3JpdHkudG9Mb3dlckNhc2UoKTtcclxuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByaW9yaXR5O1xyXG4gICAgaWYgKFxyXG4gICAgICB0YXNrLnByaW9yaXR5ICYmXHJcbiAgICAgIHRhc2sucHJpb3JpdHkudG9Mb3dlckNhc2UoKSA9PT0gcHJpb3JpdHkudG9Mb3dlckNhc2UoKVxyXG4gICAgKSB7XHJcbiAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7IC8vIEVuc3VyZSB0aGUgY3VycmVudCBwcmlvcml0eSBpcyBzZWxlY3RlZFxyXG4gICAgfVxyXG4gICAgdGFza1ByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICB9KTtcclxuXHJcbiAgdGFza1ByaW9yaXR5LmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eUxhYmVsKTtcclxuICB0YXNrUHJpb3JpdHkuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5SW5wdXQpO1xyXG5cclxuICAvLyBTdWJtaXQgYnV0dG9uXHJcbiAgY29uc3Qgc3VibWl0QWRkVGFza0Zvcm1IVE1MID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBzdWJtaXRBZGRUYXNrRm9ybUhUTUwuY2xhc3NMaXN0LmFkZChcInN1Ym1pdEFkZFRhc2tGb3JtSFRNTFwiKTtcclxuICBzdWJtaXRBZGRUYXNrRm9ybUhUTUwudHlwZSA9IFwic3VibWl0XCI7XHJcbiAgc3VibWl0QWRkVGFza0Zvcm1IVE1MLnRleHRDb250ZW50ID0gXCJTYXZlXCI7XHJcblxyXG4gIC8vIEFwcGVuZCBmb3JtIGVsZW1lbnRzIHRvIHRoZSBmb3JtXHJcbiAgYWRkVGFza0Zvcm1IVE1MLmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcclxuICBhZGRUYXNrRm9ybUhUTUwuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcclxuICBhZGRUYXNrRm9ybUhUTUwuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xyXG4gIGFkZFRhc2tGb3JtSFRNTC5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xyXG4gIGFkZFRhc2tGb3JtSFRNTC5hcHBlbmRDaGlsZChzdWJtaXRBZGRUYXNrRm9ybUhUTUwpO1xyXG5cclxuICBjb25zdCB0YXNrSW5wdXRzID0ge1xyXG4gICAgdGFza05hbWVJbnB1dCxcclxuICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LFxyXG4gICAgdGFza0R1ZURhdGVJbnB1dCxcclxuICAgIHRhc2tQcmlvcml0eUlucHV0LFxyXG4gIH07XHJcblxyXG4gIGFkZFRhc2tGb3JtSFRNTC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xyXG4gICAgLy8gUmVtb3ZlIHRoZSB0YXNrIGZyb20gdGhlIERPTVxyXG4gICAgLy8gZGF0ZUhlYWRlci5yZW1vdmVDaGlsZCh0b0RvQ2FyZCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIC8vIGNvbnN0IHsgZWRpdFRhc2tEaWFsb2dIVE1MLCBhZGRUYXNrRm9ybUhUTUwsIHRhc2tJbnB1dHMgfSA9XHJcbiAgICAvLyAgIGVkaXRUYXNrRGlhbG9nSFRNTChjb250ZW50Qm94KTtcclxuXHJcbiAgICAvLyBGaW5kIHRoZSBpbmRleCBvZiB0aGUgdGFzayBpbiB0aGUgbG9jYWxTdG9yYWdlXHJcbiAgICBjb25zdCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSkgfHwgW107XHJcbiAgICBjb25zdCB1cGRhdGVkVGFza3MgPSB0YXNrcy5maWx0ZXIoKHQpID0+IHQuaWQgIT09IHRhc2suaWQpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkVGFza3MpKTtcclxuXHJcbiAgICBjb25zdCBuZXdUYXNrID0gcG9wdWxhdGVTdG9yYWdlKFxyXG4gICAgICB0YXNrSW5wdXRzLnRhc2tOYW1lSW5wdXQudmFsdWUsXHJcbiAgICAgIHRhc2tJbnB1dHMudGFza0Rlc2NyaXB0aW9uSW5wdXQudmFsdWUsXHJcbiAgICAgIHRhc2tJbnB1dHMudGFza0R1ZURhdGVJbnB1dC52YWx1ZSxcclxuICAgICAgdGFza0lucHV0cy50YXNrUHJpb3JpdHlJbnB1dC52YWx1ZSxcclxuICAgICAgZmFsc2VcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhcIk5ldyBUYXNrIEFkZGVkOlwiLCBuZXdUYXNrKTtcclxuXHJcbiAgICAvLyAvL2RpdiB0aGF0IHdpbGwgaW5jbHVkZSB0aGUgdGFza3MgKG1haW5seSlcclxuICAgIC8vIGNvbnN0IHRhc2tIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgLy8gdGFza0hvbGRlci5jbGFzc0xpc3QuYWRkKFwidGFza0hvbGRlclwiKTtcclxuXHJcbiAgICAvL1RvIHNob3cgdGhlIHRhc2sgb24gdGhlIHNjcmVlblxyXG4gICAgLy8gZ3JvdXBUYXNrc0J5RGF0ZSgpO1xyXG4gICAgc2hvd1Rhc2tPblNjcmVlbihncm91cFRhc2tzQnlEYXRlKCkpO1xyXG5cclxuICAgIGRpYWxvZy5jbG9zZSgpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4geyBhZGRUYXNrRm9ybUhUTUwsIHRhc2tJbnB1dHMgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBzaG93VGFza09uU2NyZWVuIH0gZnJvbSBcIi4vdGFza0RPTS5qc1wiO1xyXG5pbXBvcnQgeyBtYXJrVGFza0NvbXBsZXRpb24gfSBmcm9tIFwiLi9kb25lVGFzay5qc1wiO1xyXG5pbXBvcnQgeyBncm91cFRhc2tzQnlEYXRlIH0gZnJvbSBcIi4vdGFza0RPTS5qc1wiO1xyXG5pbXBvcnQgeyBzaG93VG9kYXlUYXNrIH0gZnJvbSBcIi4vdG9kYXlUYXNrLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgY29udGVudEJveCxcclxuICBhZGRUb2RvQnV0dG9uLFxyXG4gIGFkZFRvZG9CdXR0b24yLFxyXG4gIHRvZGF5U29ydEJ1dHRvbixcclxuICBhbGxUYXNrc0J1dHRvbixcclxuICBjaGVja0JveE0sXHJcbn0gZnJvbSBcIi4vZG9tRWxlbWVudHMuanNcIjtcclxuaW1wb3J0IHsgY3JlYXRlQWRkVGFza0RpYWxvZyB9IGZyb20gXCIuL2RpYWxvZy5qc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgY29uc3QgYWRkVGFza0RpYWxvZ0hUTUwgPSBjcmVhdGVBZGRUYXNrRGlhbG9nKGNvbnRlbnRCb3gsIGFkZFRvZG9CdXR0b24pO1xyXG5cclxuICBhZGRUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBhZGRUYXNrRGlhbG9nSFRNTC5zaG93TW9kYWwoKTtcclxuICB9KTtcclxuXHJcbiAgYWRkVG9kb0J1dHRvbjIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGFkZFRhc2tEaWFsb2dIVE1MLnNob3dNb2RhbCgpO1xyXG4gIH0pO1xyXG5cclxuICB0b2RheVNvcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHNob3dUYXNrT25TY3JlZW4oc2hvd1RvZGF5VGFzaygpKTtcclxuICB9KTtcclxuXHJcbiAgYWxsVGFza3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGdyb3VwVGFza3NCeURhdGUoKTtcclxuICAgIHNob3dUYXNrT25TY3JlZW4oZ3JvdXBUYXNrc0J5RGF0ZSgpKTtcclxuICAgIGNvbnNvbGUubG9nKFwiQWxsIHRhc2tzIGFyZSBzaG93blwiKTsgLy9kZWJ1Z2dpbmdcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZENoZWNrYm94TGlzdGVuZXJzKCkge1xyXG4gIGNvbnN0IGNoZWNrQm94TSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICBcIi50YXNrQ2hlY2tCb3hEaXYgaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiXHJcbiAgKTtcclxuXHJcbiAgY2hlY2tCb3hNLmZvckVhY2goKGNoZWNrQm94LCBpbmRleCkgPT4ge1xyXG4gICAgY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICAgIG1hcmtUYXNrQ29tcGxldGlvbihpbmRleCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBjb250ZW50Qm94IH0gZnJvbSBcIi4vZG9tRWxlbWVudHMuanNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBncmVldEZ1bmN0aW9uKCkge1xyXG4gIGNvbnN0IGdyZWV0aW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBncmVldGluZy5jbGFzc0xpc3QuYWRkKFwiZ3JlZXRpbmdcIik7XHJcblxyXG4gIGNvbnN0IGdyZWV0aW5nVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuXHJcbiAgY29uc3QgY3VycmVudEhvdXIgPSBuZXcgRGF0ZSgpLmdldEhvdXJzKCk7XHJcbiAgZ3JlZXRpbmdUZXh0LnRleHRDb250ZW50ID0gZ2V0R3JlZXRpbmdNZXNzYWdlKGN1cnJlbnRIb3VyKTtcclxuXHJcbiAgZ3JlZXRpbmcuYXBwZW5kQ2hpbGQoZ3JlZXRpbmdUZXh0KTtcclxuICBjb250ZW50Qm94LmFwcGVuZENoaWxkKGdyZWV0aW5nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0R3JlZXRpbmdNZXNzYWdlKGhvdXIpIHtcclxuICBpZiAoaG91ciA8IDEyKSB7XHJcbiAgICByZXR1cm4gXCJHb29kIE1vcm5pbmchXCI7XHJcbiAgfSBlbHNlIGlmIChob3VyIDwgMTcpIHtcclxuICAgIHJldHVybiBcIkdvb2QgQWZ0ZXJub29uIVwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gXCJHb29kIEV2ZW5pbmchXCI7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9kYXlEYXRlKCkge1xyXG4gIHJldHVybiBmb3JtYXREYXRlKG5ldyBEYXRlKCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9tb3Jyb3dEYXRlKCkge1xyXG4gIGNvbnN0IHRvbW9ycm93ID0gbmV3IERhdGUoKTtcclxuICB0b21vcnJvdy5zZXREYXRlKHRvbW9ycm93LmdldERhdGUoKSArIDEpO1xyXG4gIHJldHVybiBmb3JtYXREYXRlKHRvbW9ycm93KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XHJcbiAgY29uc3QgbW9udGggPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG4gIGNvbnN0IGRheSA9IFN0cmluZyhkYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG4gIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XHJcbn1cclxuIiwiLy8gZXhwb3J0IGNvbnN0IHRvZG9zID0gW107XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFzayhcclxuLy8gICBuYW1lLFxyXG4vLyAgIGRlc2NyaXB0aW9uLFxyXG4vLyAgIGR1ZURhdGUsXHJcbi8vICAgcHJpb3JpdHksXHJcbi8vICAgY29tcGxldGVkID0gZmFsc2VcclxuLy8gKSB7XHJcbi8vICAgY29uc3QgdGFzayA9IHtcclxuLy8gICAgIGlkOiBEYXRlLm5vdygpLnRvU3RyaW5nKCksIC8vIGlkZW50aWZpZXIgZm9yIGVhY2ggdGFza1xyXG4vLyAgICAgbmFtZSxcclxuLy8gICAgIGRlc2NyaXB0aW9uLFxyXG4vLyAgICAgZHVlRGF0ZSxcclxuLy8gICAgIHByaW9yaXR5LFxyXG4vLyAgICAgY29tcGxldGVkLFxyXG4vLyAgIH07XHJcbi8vICAgdG9kb3MucHVzaCh0YXNrKTtcclxuLy8gICByZXR1cm4gdGFzaztcclxuLy8gfVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlU3RvcmFnZShcclxuICBuYW1lLFxyXG4gIGRlc2NyaXB0aW9uLFxyXG4gIGR1ZURhdGUsXHJcbiAgcHJpb3JpdHksXHJcbiAgY29tcGxldGVkID0gZmFsc2VcclxuKSB7XHJcbiAgY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpIHx8IFtdO1xyXG4gIGNvbnN0IG5ld1Rhc2sgPSB7XHJcbiAgICBpZDogRGF0ZS5ub3coKS50b1N0cmluZygpLFxyXG4gICAgbmFtZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgZHVlRGF0ZSxcclxuICAgIHByaW9yaXR5LFxyXG4gICAgY29tcGxldGVkLFxyXG4gIH07XHJcbiAgdGFza3MucHVzaChuZXdUYXNrKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY29udGVudEJveCB9IGZyb20gXCIuL2RvbUVsZW1lbnRzLmpzXCI7XHJcbmltcG9ydCB0cmFzaGNhbiBmcm9tIFwiLi9pbWcvZGVsZXRlMi5wbmdcIjtcclxuaW1wb3J0IGVkaXQgZnJvbSBcIi4vaW1nL2VkaXQucG5nXCI7XHJcbmltcG9ydCBoaWdoUHJpb3JpdHkgZnJvbSBcIi4vaW1nL2hpZ2hQcmlvcml0eS5wbmdcIjtcclxuaW1wb3J0IG1lZGl1bVByaW9yaXR5IGZyb20gXCIuL2ltZy9tZWRpdW1Qcmlvcml0eS5wbmdcIjtcclxuaW1wb3J0IGxvd1ByaW9yaXR5IGZyb20gXCIuL2ltZy9sb3dQcmlvcml0eS5wbmdcIjtcclxuaW1wb3J0IHsgZ2V0VG9kYXlEYXRlLCBnZXRUb21vcnJvd0RhdGUgfSBmcm9tIFwiLi9ncmVldGluZ3MuanNcIjtcclxuaW1wb3J0IHsgY3JlYXRlRWRpdFRhc2tEaWFsb2dET00gfSBmcm9tIFwiLi9lZGl0VGFzay5qc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdyb3VwVGFza3NCeURhdGUoKSB7XHJcbiAgY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpIHx8IFtdO1xyXG4gIGNvbnN0IGdyb3VwZWRUYXNrcyA9IHRhc2tzLnJlZHVjZSgoYWNjLCB0YXNrKSA9PiB7XHJcbiAgICBpZiAoIWFjY1t0YXNrLmR1ZURhdGVdKSB7XHJcbiAgICAgIGFjY1t0YXNrLmR1ZURhdGVdID0gW107XHJcbiAgICB9XHJcbiAgICBhY2NbdGFzay5kdWVEYXRlXS5wdXNoKHRhc2spO1xyXG4gICAgcmV0dXJuIGFjYztcclxuICB9LCB7fSk7XHJcbiAgcmV0dXJuIGdyb3VwZWRUYXNrcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dUYXNrT25TY3JlZW4oZ3JvdXBlZEJ5KSB7XHJcbiAgbGV0IHRhc2tIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tIb2xkZXJcIik7XHJcblxyXG4gIGlmICghdGFza0hvbGRlcikge1xyXG4gICAgdGFza0hvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0YXNrSG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrSG9sZGVyXCIpO1xyXG4gICAgY29udGVudEJveC5hcHBlbmRDaGlsZCh0YXNrSG9sZGVyKTtcclxuICB9XHJcblxyXG4gIC8vIENsZWFyIHRhc2tIb2xkZXIgY29udGVudCBiZWZvcmUgdXNpbmcgYWdhaW5cclxuICB0YXNrSG9sZGVyLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gIGNvbnN0IGdyb3VwZWRUYXNrcyA9IGdyb3VwZWRCeSB8fCBncm91cFRhc2tzQnlEYXRlKCk7XHJcblxyXG4gIE9iamVjdC5rZXlzKGdyb3VwZWRUYXNrcykuZm9yRWFjaCgoZHVlRGF0ZSkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRlSGVhZGVyIH0gPSBhZGRUb2RheURhdGVPblNjcmVlbihkdWVEYXRlKTtcclxuXHJcbiAgICBncm91cGVkVGFza3NbZHVlRGF0ZV0uZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICBjb25zdCB0b0RvQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHRvRG9DYXJkLmNsYXNzTGlzdC5hZGQoXCJ0b0RvQ2FyZFwiKTtcclxuXHJcbiAgICAgIC8vIEFkZCBjaGVja2JveFxyXG4gICAgICBjb25zdCB0YXNrQ2hlY2tCb3hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICB0YXNrQ2hlY2tCb3hEaXYuY2xhc3NMaXN0LmFkZChcInRhc2tDaGVja0JveERpdlwiKTtcclxuICAgICAgY29uc3QgdGFza0NoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICB0YXNrQ2hlY2tCb3gudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgICAgdGFza0NoZWNrQm94LmNoZWNrZWQgPSB0YXNrLmNvbXBsZXRlZDtcclxuICAgICAgdGFza0NoZWNrQm94LmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcclxuICAgICAgdGFza0NoZWNrQm94RGl2LmFwcGVuZENoaWxkKHRhc2tDaGVja0JveCk7XHJcblxyXG4gICAgICAvLyBBZGQgdGhlIG5hbWUgb2YgdGhlIHRhc2tcclxuICAgICAgY29uc3QgdGFza05hbWVET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgdGFza05hbWVET00udGV4dENvbnRlbnQgPSB0YXNrLm5hbWU7XHJcbiAgICAgIHRhc2tOYW1lRE9NLmNsYXNzTGlzdC5hZGQoXCJ0YXNrTmFtZURPTVwiKTtcclxuICAgICAgdGFza0NoZWNrQm94RGl2LmFwcGVuZENoaWxkKHRhc2tOYW1lRE9NKTtcclxuXHJcbiAgICAgIC8vIEFkZCB0aGUgZWRpdCBidXR0b24gd2l0aCB2YWx1ZSBcImVkaXRcIlxyXG4gICAgICBjb25zdCB0YXNrRWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgIHRhc2tFZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrRWRpdEJ1dHRvblwiKTtcclxuICAgICAgY29uc3QgZWRpdFRhc2tCdXR0b25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICBlZGl0VGFza0J1dHRvbkltZy5jbGFzc0xpc3QuYWRkKFwiZWRpdFRhc2tCdXR0b25JbWdcIik7XHJcbiAgICAgIGVkaXRUYXNrQnV0dG9uSW1nLnNyYyA9IGVkaXQ7XHJcbiAgICAgIHRhc2tFZGl0QnV0dG9uLmFwcGVuZENoaWxkKGVkaXRUYXNrQnV0dG9uSW1nKTtcclxuXHJcbiAgICAgIC8vIEFkZCB0aGUgZGVsZXRlIGJ1dHRvblxyXG4gICAgICBjb25zdCB0YXNrRGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgdGFza0RlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidGFza0RlbGV0ZUJ1dHRvblwiKTtcclxuICAgICAgY29uc3QgZGVsZXRlVGFza0J1dHRvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgIGRlbGV0ZVRhc2tCdXR0b25JbWcuY2xhc3NMaXN0LmFkZChcImRlbGV0ZVRhc2tCdXR0b25JbWdcIik7XHJcbiAgICAgIGRlbGV0ZVRhc2tCdXR0b25JbWcuc3JjID0gdHJhc2hjYW47XHJcbiAgICAgIHRhc2tEZWxldGVCdXR0b24uYXBwZW5kQ2hpbGQoZGVsZXRlVGFza0J1dHRvbkltZyk7XHJcblxyXG4gICAgICAvLyBESVYgZm9yIGVkaXQgYW5kIGRlbGV0ZSBidXR0b25cclxuICAgICAgY29uc3QgZWRpdERlbGV0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGVkaXREZWxldGVEaXYuY2xhc3NMaXN0LmFkZChcImVkaXREZWxldGVEaXZcIik7XHJcbiAgICAgIGVkaXREZWxldGVEaXYuYXBwZW5kQ2hpbGQodGFza0VkaXRCdXR0b24pO1xyXG4gICAgICBlZGl0RGVsZXRlRGl2LmFwcGVuZENoaWxkKHRhc2tEZWxldGVCdXR0b24pO1xyXG5cclxuICAgICAgLy8gRmlyc3QgbGluZSBkaXZcclxuICAgICAgY29uc3QgZmlyc3RMaW5lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgZmlyc3RMaW5lRGl2LmNsYXNzTGlzdC5hZGQoXCJmaXJzdExpbmVEaXZcIik7XHJcbiAgICAgIGZpcnN0TGluZURpdi5hcHBlbmRDaGlsZCh0YXNrQ2hlY2tCb3hEaXYpO1xyXG4gICAgICBmaXJzdExpbmVEaXYuYXBwZW5kQ2hpbGQoZWRpdERlbGV0ZURpdik7XHJcbiAgICAgIHRvRG9DYXJkLmFwcGVuZENoaWxkKGZpcnN0TGluZURpdik7XHJcblxyXG4gICAgICAvLyBBZGQgdGhlIGRlc2NyaXB0aW9uIG9mIHRoZSB0YXNrXHJcbiAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbkRPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpOyAvLyBTZWNvbmQgbGluZSBvZiB0aGUgdG9kbyBjYXJkXHJcbiAgICAgIHRhc2tEZXNjcmlwdGlvbkRPTS50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XHJcbiAgICAgIHRhc2tEZXNjcmlwdGlvbkRPTS5jbGFzc0xpc3QuYWRkKFwidGFza0Rlc2NyaXB0aW9uRE9NXCIpO1xyXG4gICAgICB0b0RvQ2FyZC5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb25ET00pO1xyXG5cclxuICAgICAgZGF0ZUhlYWRlci5hcHBlbmRDaGlsZCh0b0RvQ2FyZCk7XHJcblxyXG4gICAgICAvLyBUaGlyZCBsaW5lIGRpdiB0aGF0IHdpbGwgaGF2ZSBwcmlvcml0eVxyXG4gICAgICBjb25zdCB0aGlyZExpbmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICB0aGlyZExpbmVEaXYuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5RGl2XCIpO1xyXG5cclxuICAgICAgLy8gSGlnaCBwcmlvcml0eSBpbWdcclxuICAgICAgY29uc3QgaGlnaFByaW9yaXR5SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgaGlnaFByaW9yaXR5SW1nLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eUltZ1wiKTtcclxuICAgICAgaGlnaFByaW9yaXR5SW1nLnNyYyA9IGhpZ2hQcmlvcml0eTtcclxuICAgICAgY29uc3QgaGlnaFByaW9yaXR5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICBoaWdoUHJpb3JpdHlUZXh0LnRleHRDb250ZW50ID0gXCJIaWdoIFByaW9yaXR5XCI7XHJcbiAgICAgIGhpZ2hQcmlvcml0eVRleHQuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5VGV4dFwiKTtcclxuXHJcbiAgICAgIC8vIE1lZGl1bSBwcmlvcml0eSBpbWdcclxuICAgICAgY29uc3QgbWVkaXVtUHJpb3JpdHlJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICBtZWRpdW1Qcmlvcml0eUltZy5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlJbWdcIik7XHJcbiAgICAgIG1lZGl1bVByaW9yaXR5SW1nLnNyYyA9IG1lZGl1bVByaW9yaXR5O1xyXG4gICAgICBjb25zdCBtZWRpdW1Qcmlvcml0eVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgbWVkaXVtUHJpb3JpdHlUZXh0LnRleHRDb250ZW50ID0gXCJNZWRpdW0gUHJpb3JpdHlcIjtcclxuICAgICAgbWVkaXVtUHJpb3JpdHlUZXh0LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eVRleHRcIik7XHJcblxyXG4gICAgICAvLyBMb3cgcHJpb3JpdHkgaW1nXHJcbiAgICAgIGNvbnN0IGxvd1ByaW9yaXR5SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgbG93UHJpb3JpdHlJbWcuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5SW1nXCIpO1xyXG4gICAgICBsb3dQcmlvcml0eUltZy5zcmMgPSBsb3dQcmlvcml0eTtcclxuICAgICAgY29uc3QgbG93UHJpb3JpdHlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgIGxvd1ByaW9yaXR5VGV4dC50ZXh0Q29udGVudCA9IFwiTG93IFByaW9yaXR5XCI7XHJcbiAgICAgIGxvd1ByaW9yaXR5VGV4dC5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlUZXh0XCIpO1xyXG5cclxuICAgICAgLy8gQ2hlY2sgYW5kIGFwcGVuZCBiYXNlZCBvbiB0YXNrIHByaW9yaXR5XHJcbiAgICAgIGlmICh0YXNrLnByaW9yaXR5ID09IFwiaGlnaFwiIHx8IHRhc2sucHJpb3JpdHkgPT0gXCJIaWdoXCIpIHtcclxuICAgICAgICB0aGlyZExpbmVEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmRkZmRmXCI7XHJcbiAgICAgICAgdGhpcmRMaW5lRGl2LmFwcGVuZENoaWxkKGhpZ2hQcmlvcml0eUltZyk7XHJcbiAgICAgICAgdGhpcmRMaW5lRGl2LmFwcGVuZENoaWxkKGhpZ2hQcmlvcml0eVRleHQpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT0gXCJtZWRpdW1cIiB8fCB0YXNrLnByaW9yaXR5ID09IFwiTWVkaXVtXCIpIHtcclxuICAgICAgICB0aGlyZExpbmVEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmZmZmM5XCI7XHJcbiAgICAgICAgdGhpcmRMaW5lRGl2LmFwcGVuZENoaWxkKG1lZGl1bVByaW9yaXR5SW1nKTtcclxuICAgICAgICB0aGlyZExpbmVEaXYuYXBwZW5kQ2hpbGQobWVkaXVtUHJpb3JpdHlUZXh0KTtcclxuICAgICAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09IFwibG93XCIgfHwgdGFzay5wcmlvcml0eSA9PSBcIkxvd1wiKSB7XHJcbiAgICAgICAgdGhpcmRMaW5lRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2UwZmZlMFwiO1xyXG4gICAgICAgIHRoaXJkTGluZURpdi5hcHBlbmRDaGlsZChsb3dQcmlvcml0eUltZyk7XHJcbiAgICAgICAgdGhpcmRMaW5lRGl2LmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5VGV4dCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRvRG9DYXJkLmFwcGVuZENoaWxkKHRoaXJkTGluZURpdik7XHJcblxyXG4gICAgICAvLyBFdmVudCBsaXN0ZW5lciBmb3IgYSB0YXNrRGVsZXRlQnV0dG9uXHJcbiAgICAgIHRhc2tEZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAvLyBSZW1vdmUgdGhlIHRhc2sgZnJvbSB0aGUgRE9NXHJcbiAgICAgICAgZGF0ZUhlYWRlci5yZW1vdmVDaGlsZCh0b0RvQ2FyZCk7XHJcblxyXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgdGFzayBmcm9tIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICBjb25zdCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSkgfHwgW107XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZFRhc2tzID0gdGFza3MuZmlsdGVyKCh0KSA9PiB0LmlkICE9PSB0YXNrLmlkKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRUYXNrcykpO1xyXG5cclxuICAgICAgICAvLyBSZWZyZXNoIHRoZSB0YXNrIGxpc3Qgb24gc2NyZWVuXHJcbiAgICAgICAgc2hvd1Rhc2tPblNjcmVlbigpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRhc2tFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBlZGl0VGFza0RpYWxvZ0hUTUwgfSA9IGNyZWF0ZUVkaXRUYXNrRGlhbG9nRE9NKFxyXG4gICAgICAgICAgY29udGVudEJveCxcclxuICAgICAgICAgIHRhc2suaWRcclxuICAgICAgICApO1xyXG4gICAgICAgIGVkaXRUYXNrRGlhbG9nSFRNTC5zaG93TW9kYWwoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGNoZWNrYm94XHJcbiAgICAgIHRhc2tDaGVja0JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSkgfHwgW107XHJcbiAgICAgICAgY29uc3QgdGFza1RvVXBkYXRlID0gdGFza3MuZmluZCgodCkgPT4gdC5pZCA9PT0gdGFzay5pZCk7XHJcbiAgICAgICAgdGFza1RvVXBkYXRlLmNvbXBsZXRlZCA9IHRoaXMuY2hlY2tlZDtcclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xyXG5cclxuICAgICAgICB0YXNrTmFtZURPTS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IHRhc2tUb1VwZGF0ZS5jb21wbGV0ZWRcclxuICAgICAgICAgID8gXCJsaW5lLXRocm91Z2hcIlxyXG4gICAgICAgICAgOiBcIm5vbmVcIjtcclxuICAgICAgICB0YXNrRGVzY3JpcHRpb25ET00uc3R5bGUudGV4dERlY29yYXRpb24gPSB0YXNrVG9VcGRhdGUuY29tcGxldGVkXHJcbiAgICAgICAgICA/IFwibGluZS10aHJvdWdoXCJcclxuICAgICAgICAgIDogXCJub25lXCI7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGFza0hvbGRlci5hcHBlbmRDaGlsZChkYXRlSGVhZGVyKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkVG9kYXlEYXRlT25TY3JlZW4oZHVlRGF0ZSkge1xyXG4gIGNvbnN0IGRhdGVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGRhdGVIZWFkZXIuY2xhc3NMaXN0LmFkZChcInNpbmdsZURhdGVIb2xkZXJcIik7XHJcblxyXG4gIC8vIERhdGUgYWRkaW5nXHJcbiAgY29uc3Qgc2luZ2xlRGF0ZURPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHNpbmdsZURhdGVET00uY2xhc3NMaXN0LmFkZChcInNpbmdsZURhdGVET01cIik7XHJcbiAgY29uc3QgdG9kYXlEYXRlID0gZ2V0VG9kYXlEYXRlKCk7XHJcbiAgY29uc3QgdG9tb3Jyb3dEYXRlID0gZ2V0VG9tb3Jyb3dEYXRlKCk7XHJcblxyXG4gIGlmIChkdWVEYXRlID09PSB0b2RheURhdGUpIHtcclxuICAgIHNpbmdsZURhdGVET00udGV4dENvbnRlbnQgPSBcIlRvZGF5LCBcIiArIGR1ZURhdGU7XHJcbiAgfSBlbHNlIGlmIChkdWVEYXRlID09PSB0b21vcnJvd0RhdGUpIHtcclxuICAgIHNpbmdsZURhdGVET00udGV4dENvbnRlbnQgPSBcIlRvbW9ycm93LCBcIiArIGR1ZURhdGU7XHJcbiAgfSBlbHNlIHtcclxuICAgIHNpbmdsZURhdGVET00udGV4dENvbnRlbnQgPSBkdWVEYXRlO1xyXG4gIH1cclxuICBkYXRlSGVhZGVyLmFwcGVuZENoaWxkKHNpbmdsZURhdGVET00pO1xyXG5cclxuICByZXR1cm4geyBkYXRlSGVhZGVyIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2V0VG9kYXlEYXRlIH0gZnJvbSBcIi4vZ3JlZXRpbmdzLmpzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd1RvZGF5VGFzaygpIHtcclxuICBjb25zdCB0b2RheURhdGUgPSBnZXRUb2RheURhdGUoKTtcclxuICBjb25zdCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSkgfHwgW107XHJcblxyXG4gIGNvbnNvbGUubG9nKFwiVG9kYXkgdGFza3MgYXJlIHNob3duP1wiKTsgLy9kZWJ1Z2dpbmdcclxuXHJcbiAgY29uc3QgdG9kYXlHcm91cGVkVGFza3MgPSB0YXNrcy5yZWR1Y2UoKGFjYywgdGFzaykgPT4ge1xyXG4gICAgaWYgKHRhc2suZHVlRGF0ZSA9PT0gdG9kYXlEYXRlKSB7XHJcbiAgICAgIGlmICghYWNjW3Rhc2suZHVlRGF0ZV0pIHtcclxuICAgICAgICBhY2NbdGFzay5kdWVEYXRlXSA9IFtdO1xyXG4gICAgICB9XHJcbiAgICAgIGFjY1t0YXNrLmR1ZURhdGVdLnB1c2godGFzayk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWNjO1xyXG4gIH0sIHt9KTtcclxuICByZXR1cm4gdG9kYXlHcm91cGVkVGFza3M7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7IGFkZEltYWdlc1RvQnV0dG9ucyB9IGZyb20gXCIuL0RPTS5qc1wiO1xyXG5pbXBvcnQgeyBncmVldEZ1bmN0aW9uIH0gZnJvbSBcIi4vZ3JlZXRpbmdzLmpzXCI7XHJcbmltcG9ydCB7IGFkZERlZmF1bHRUYXNrIH0gZnJvbSBcIi4vZGVmYXVsdFRhc2suanNcIjtcclxuaW1wb3J0IHsgc2V0dXBFdmVudExpc3RlbmVycyB9IGZyb20gXCIuL2V2ZW50TGlzdGVuZXJzLmpzXCI7XHJcbmltcG9ydCB7IGFkZENoZWNrYm94TGlzdGVuZXJzIH0gZnJvbSBcIi4vZXZlbnRMaXN0ZW5lcnMuanNcIjtcclxuaW1wb3J0IHsgc2hvd1Rhc2tPblNjcmVlbiB9IGZyb20gXCIuL3Rhc2tET00uanNcIjtcclxuXHJcbmFkZEltYWdlc1RvQnV0dG9ucygpO1xyXG5cclxuLy8gSW5pdGlhbGl6ZSB0aGUgZ3JlZXRpbmdcclxuZ3JlZXRGdW5jdGlvbigpO1xyXG5cclxuLy8gQWRkcyBkZWZhdWx0IHRhc2tcclxuYWRkRGVmYXVsdFRhc2soKTtcclxuXHJcbnNldHVwRXZlbnRMaXN0ZW5lcnMoKTtcclxuYWRkQ2hlY2tib3hMaXN0ZW5lcnMoKTtcclxuXHJcbnNob3dUYXNrT25TY3JlZW4oKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9