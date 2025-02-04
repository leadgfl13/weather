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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/sun.png */ "./images/sun.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/cloud.svg */ "./images/cloud.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/rain.svg */ "./images/rain.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/snow.svg */ "./images/snow.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/storm.svg */ "./images/storm.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../images/clear.png */ "./images/clear.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../images/partlysun.png */ "./images/partlysun.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
	height: 100vh;
	width: 100vw;
	margin: 0px;
	display: grid;
	grid-template-columns: 1fr 3fr;
}

.left {
	border-right: 10px black groove;
	background-color: seashell;
	height: 100%;
	width: 100%;
	display: flex;
	grid-area: 1/1/2/2;
	flex-direction: column;
	margin: 0px;
}

.info {
	margin-top: 15%;
	margin-bottom: -20%;
	font-size: 28px;
	text-decoration: wavy;
	color: rgb(240, 170, 121);
	text-align: center;
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	align-self: center;
}
.right {
	overflow-x: scroll;
	border-left: 10px black groove;
	height: 100vh;
	width: 100%;
	background-color: rgb(240, 170, 121);
	grid-area: 1/2/1/3;
	display: flex;
	justify-content: space-around;
	align-items: center;
	font-size: 48px;
	gap: 20px;
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	text-decoration: underline;
}

form {
	height: 100%;
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
#location {
	height: 40px;
	font-size: 18px;
	width: 200px;
}
#stateDropdown {
	height: 40px;
	font-size: 18px;
	width: 200px;
}
#submit {
	margin-top: 24px;
	align-self: center;
	height: 60px;
	border-radius: 12px;
	font-size: 22px;
	width: 80%;
}
#submit:active {
	background-color: red;
}
.daygrid {
	border-radius: 10px;
	border: 8px solid black;
	background-color: skyblue;
	height: 80%;
	display: grid;
	width: 90%;
	justify-content: space-around;
	align-items: center;
	grid-template-rows: 1fr 2fr 1fr 1fr 2fr min-content;
	grid-template-columns: 1fr 1fr min-content;
	margin: 5px;
}

#gridhover {
	background-color: red;
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
}
.weatherlabels {
	font-size: 20px;
}

.images {
	justify-self: stretch;
	align-self: stretch;
	width: 100%;
	height: fit-content;
	grid-area: 2/1/3/3;
	margin: auto;
}
#sunimage {
	content: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
#cloudimage {
	content: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}
#rainimage {
	content: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}
#snowimage {
	content: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}
#stormimage {
	content: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
}
#clearimage {
	content: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
}
#partlysunimage {
	content: url(${___CSS_LOADER_URL_REPLACEMENT_6___});
}
.weatherlabels {
	height: 100%;
	width: 100%;
	display: flex;
	background-color: papayawhip;
	font-size: 18px;
	font-weight: 700;
	text-decoration: underline;
	justify-content: center;
	align-items: center;
	margin: auto;
}

#date {
	border-bottom: 2px solid black;

	display: flex;
	text-align: center;
	grid-area: 1/1/2/3;
}
#conditions {
	grid-area: 5/1/6/3;
	justify-content: center;
	align-items: center;
	border-top: 2px solid black;
}
#maxtemplabel {
	border-top: 2px solid black;
	border-bottom: 2px solid black;

	background-color: orange;
	grid-area: 3/1/4/2;
}
#mintemplabel {
	border-top: 2px solid black;
	margin-top: -2px;
	background-color: cornflowerblue;
	grid-area: 4/1/5/2;
}
#maxtemp {
	border-bottom: 2px solid black;
	border-top: 2px solid black;
	margin: auto;
	display: flex;
	background-color: orange;
	font-size: 18px;
	justify-content: center;
	align-items: center;
	grid-area: 3/2/4/3;
}
#mintemp {
	border-top: 2px solid black;
	margin-top: -2px;
	background-color: cornflowerblue;
	grid-area: 4/2/5/3;
}

#grid100 {
	display: flex;
	align-items: center;
	justify-content: Center;
	background-color: red;
	grid-area: span;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,aAAa;CACb,YAAY;CACZ,WAAW;CACX,aAAa;CACb,8BAA8B;AAC/B;;AAEA;CACC,+BAA+B;CAC/B,0BAA0B;CAC1B,YAAY;CACZ,WAAW;CACX,aAAa;CACb,kBAAkB;CAClB,sBAAsB;CACtB,WAAW;AACZ;;AAEA;CACC,eAAe;CACf,mBAAmB;CACnB,eAAe;CACf,qBAAqB;CACrB,yBAAyB;CACzB,kBAAkB;CAClB,4DAA4D;CAC5D,aAAa;CACb,2BAA2B;CAC3B,mBAAmB;CACnB,kBAAkB;AACnB;AACA;CACC,kBAAkB;CAClB,8BAA8B;CAC9B,aAAa;CACb,WAAW;CACX,oCAAoC;CACpC,kBAAkB;CAClB,aAAa;CACb,6BAA6B;CAC7B,mBAAmB;CACnB,eAAe;CACf,SAAS;CACT,4DAA4D;CAC5D,0BAA0B;AAC3B;;AAEA;CACC,YAAY;CACZ,aAAa;CACb,WAAW;CACX,sBAAsB;CACtB,uBAAuB;CACvB,mBAAmB;AACpB;AACA;CACC,YAAY;CACZ,eAAe;CACf,YAAY;AACb;AACA;CACC,YAAY;CACZ,eAAe;CACf,YAAY;AACb;AACA;CACC,gBAAgB;CAChB,kBAAkB;CAClB,YAAY;CACZ,mBAAmB;CACnB,eAAe;CACf,UAAU;AACX;AACA;CACC,qBAAqB;AACtB;AACA;CACC,mBAAmB;CACnB,uBAAuB;CACvB,yBAAyB;CACzB,WAAW;CACX,aAAa;CACb,UAAU;CACV,6BAA6B;CAC7B,mBAAmB;CACnB,mDAAmD;CACnD,0CAA0C;CAC1C,WAAW;AACZ;;AAEA;CACC,qBAAqB;CACrB,aAAa;CACb,sBAAsB;CACtB,YAAY;CACZ,WAAW;AACZ;AACA;CACC,eAAe;AAChB;;AAEA;CACC,qBAAqB;CACrB,mBAAmB;CACnB,WAAW;CACX,mBAAmB;CACnB,kBAAkB;CAClB,YAAY;AACb;AACA;CACC,gDAAiC;AAClC;AACA;CACC,gDAAmC;AACpC;AACA;CACC,gDAAkC;AACnC;AACA;CACC,gDAAkC;AACnC;AACA;CACC,gDAAmC;AACpC;AACA;CACC,gDAAmC;AACpC;AACA;CACC,gDAAuC;AACxC;AACA;CACC,YAAY;CACZ,WAAW;CACX,aAAa;CACb,4BAA4B;CAC5B,eAAe;CACf,gBAAgB;CAChB,0BAA0B;CAC1B,uBAAuB;CACvB,mBAAmB;CACnB,YAAY;AACb;;AAEA;CACC,8BAA8B;;CAE9B,aAAa;CACb,kBAAkB;CAClB,kBAAkB;AACnB;AACA;CACC,kBAAkB;CAClB,uBAAuB;CACvB,mBAAmB;CACnB,2BAA2B;AAC5B;AACA;CACC,2BAA2B;CAC3B,8BAA8B;;CAE9B,wBAAwB;CACxB,kBAAkB;AACnB;AACA;CACC,2BAA2B;CAC3B,gBAAgB;CAChB,gCAAgC;CAChC,kBAAkB;AACnB;AACA;CACC,8BAA8B;CAC9B,2BAA2B;CAC3B,YAAY;CACZ,aAAa;CACb,wBAAwB;CACxB,eAAe;CACf,uBAAuB;CACvB,mBAAmB;CACnB,kBAAkB;AACnB;AACA;CACC,2BAA2B;CAC3B,gBAAgB;CAChB,gCAAgC;CAChC,kBAAkB;AACnB;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,uBAAuB;CACvB,qBAAqB;CACrB,eAAe;AAChB","sourcesContent":["body {\n\theight: 100vh;\n\twidth: 100vw;\n\tmargin: 0px;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 3fr;\n}\n\n.left {\n\tborder-right: 10px black groove;\n\tbackground-color: seashell;\n\theight: 100%;\n\twidth: 100%;\n\tdisplay: flex;\n\tgrid-area: 1/1/2/2;\n\tflex-direction: column;\n\tmargin: 0px;\n}\n\n.info {\n\tmargin-top: 15%;\n\tmargin-bottom: -20%;\n\tfont-size: 28px;\n\ttext-decoration: wavy;\n\tcolor: rgb(240, 170, 121);\n\ttext-align: center;\n\tfont-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\talign-items: center;\n\talign-self: center;\n}\n.right {\n\toverflow-x: scroll;\n\tborder-left: 10px black groove;\n\theight: 100vh;\n\twidth: 100%;\n\tbackground-color: rgb(240, 170, 121);\n\tgrid-area: 1/2/1/3;\n\tdisplay: flex;\n\tjustify-content: space-around;\n\talign-items: center;\n\tfont-size: 48px;\n\tgap: 20px;\n\tfont-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n\ttext-decoration: underline;\n}\n\nform {\n\theight: 100%;\n\tdisplay: flex;\n\twidth: 100%;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n}\n#location {\n\theight: 40px;\n\tfont-size: 18px;\n\twidth: 200px;\n}\n#stateDropdown {\n\theight: 40px;\n\tfont-size: 18px;\n\twidth: 200px;\n}\n#submit {\n\tmargin-top: 24px;\n\talign-self: center;\n\theight: 60px;\n\tborder-radius: 12px;\n\tfont-size: 22px;\n\twidth: 80%;\n}\n#submit:active {\n\tbackground-color: red;\n}\n.daygrid {\n\tborder-radius: 10px;\n\tborder: 8px solid black;\n\tbackground-color: skyblue;\n\theight: 80%;\n\tdisplay: grid;\n\twidth: 90%;\n\tjustify-content: space-around;\n\talign-items: center;\n\tgrid-template-rows: 1fr 2fr 1fr 1fr 2fr min-content;\n\tgrid-template-columns: 1fr 1fr min-content;\n\tmargin: 5px;\n}\n\n#gridhover {\n\tbackground-color: red;\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 100%;\n\twidth: 100%;\n}\n.weatherlabels {\n\tfont-size: 20px;\n}\n\n.images {\n\tjustify-self: stretch;\n\talign-self: stretch;\n\twidth: 100%;\n\theight: fit-content;\n\tgrid-area: 2/1/3/3;\n\tmargin: auto;\n}\n#sunimage {\n\tcontent: url(\"../images/sun.png\");\n}\n#cloudimage {\n\tcontent: url(\"../images/cloud.svg\");\n}\n#rainimage {\n\tcontent: url(\"../images/rain.svg\");\n}\n#snowimage {\n\tcontent: url(\"../images/snow.svg\");\n}\n#stormimage {\n\tcontent: url(\"../images/storm.svg\");\n}\n#clearimage {\n\tcontent: url(\"../images/clear.png\");\n}\n#partlysunimage {\n\tcontent: url(\"../images/partlysun.png\");\n}\n.weatherlabels {\n\theight: 100%;\n\twidth: 100%;\n\tdisplay: flex;\n\tbackground-color: papayawhip;\n\tfont-size: 18px;\n\tfont-weight: 700;\n\ttext-decoration: underline;\n\tjustify-content: center;\n\talign-items: center;\n\tmargin: auto;\n}\n\n#date {\n\tborder-bottom: 2px solid black;\n\n\tdisplay: flex;\n\ttext-align: center;\n\tgrid-area: 1/1/2/3;\n}\n#conditions {\n\tgrid-area: 5/1/6/3;\n\tjustify-content: center;\n\talign-items: center;\n\tborder-top: 2px solid black;\n}\n#maxtemplabel {\n\tborder-top: 2px solid black;\n\tborder-bottom: 2px solid black;\n\n\tbackground-color: orange;\n\tgrid-area: 3/1/4/2;\n}\n#mintemplabel {\n\tborder-top: 2px solid black;\n\tmargin-top: -2px;\n\tbackground-color: cornflowerblue;\n\tgrid-area: 4/1/5/2;\n}\n#maxtemp {\n\tborder-bottom: 2px solid black;\n\tborder-top: 2px solid black;\n\tmargin: auto;\n\tdisplay: flex;\n\tbackground-color: orange;\n\tfont-size: 18px;\n\tjustify-content: center;\n\talign-items: center;\n\tgrid-area: 3/2/4/3;\n}\n#mintemp {\n\tborder-top: 2px solid black;\n\tmargin-top: -2px;\n\tbackground-color: cornflowerblue;\n\tgrid-area: 4/2/5/3;\n}\n\n#grid100 {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: Center;\n\tbackground-color: red;\n\tgrid-area: span;\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./images/clear.png":
/*!**************************!*\
  !*** ./images/clear.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9c3048beee8a7d9f0966.png";

/***/ }),

/***/ "./images/cloud.svg":
/*!**************************!*\
  !*** ./images/cloud.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6e6468051f610a2bf18a.svg";

/***/ }),

/***/ "./images/partlysun.png":
/*!******************************!*\
  !*** ./images/partlysun.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dfbc1798a619fe2464c2.png";

/***/ }),

/***/ "./images/rain.svg":
/*!*************************!*\
  !*** ./images/rain.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f442a7f2b96ed460e5c7.svg";

/***/ }),

/***/ "./images/snow.svg":
/*!*************************!*\
  !*** ./images/snow.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b6e7323130eb3da1bdee.svg";

/***/ }),

/***/ "./images/storm.svg":
/*!**************************!*\
  !*** ./images/storm.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "30331a665d501862820a.svg";

/***/ }),

/***/ "./images/sun.png":
/*!************************!*\
  !*** ./images/sun.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2c47fb160ca5c1c87240.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


//add states to dropdown

const states = [
	"Alabama",
	"Alaska",
	"Arizona",
	"Arkansas",
	"California",
	"Colorado",
	"Connecticut",
	"Delaware",
	"Florida",
	"Georgia",
	"Hawaii",
	"Idaho",
	"Illinois",
	"Indiana",
	"Iowa",
	"Kansas",
	"Kentucky",
	"Louisiana",
	"Maine",
	"Maryland",
	"Massachusetts",
	"Michigan",
	"Minnesota",
	"Mississippi",
	"Missouri",
	"Montana",
	"Nebraska",
	"Nevada",
	"New Hampshire",
	"New Jersey",
	"New Mexico",
	"New York",
	"North Carolina",
	"North Dakota",
	"Ohio",
	"Oklahoma",
	"Oregon",
	"Pennsylvania",
	"Rhode Island",
	"South Carolina",
	"South Dakota",
	"Tennessee",
	"Texas",
	"Utah",
	"Vermont",
	"Virginia",
	"Washington",
	"West Virginia",
	"Wisconsin",
	"Wyoming",
];
// sets the search button
const forecast = document.getElementById("forecast");
const searchbutton = document.getElementById("submit");

//adds the states to the dropdown menu
const drop = document.getElementById("stateDropdown");
for (const state of states) {
	let option = document.createElement("option");
	option.value = state;
	option.text = state;
	drop.appendChild(option);
}

//this will be the function to call the API service and get info.
async function getWeather(location, thestate) {
	//key is ZVFB4SWSDYVUP2SNNA5AYMS7W (API Key)
	const response = await fetch(
		`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}, ${thestate}US?key=ZVFB4SWSDYVUP2SNNA5AYMS7W`,
		{ mode: "cors" }
	)
		//takes the response from the fetch request, and then applies the .json format to it
		//this returns the jsonified data, which is now the "response"
		//this new response is then passed to the makeGridfunction, which takes this response as an argument
		//this passes the data into makeGrid
		.then((response) => response.json())
		.then((response) => makeGrid(5, response));
}
//this gets the state value from dropdown menu
function getState() {
	let theState = drop.value;
	return theState;
}

//event listeners go here
searchbutton.addEventListener("click", (e) => {
	e.preventDefault();
	forecast.innerHTML = "";
	let location = document.getElementById("location");
	let test = location.value;
	let state = getState();
	// the info gets runs the weather, which returns a response.  .THEN used the response, and does something with\
	getWeather(test, state);
});

function makeandAssign(name, id, clask, weathervar, appendee) {
	name = document.createElement("div");
	name.setAttribute("id", id);
	name.innerHTML = weathervar;
	name.setAttribute("class", clask);
	appendee.append(name);
}

function assignLabel(name2, id, classes, text, appendeelabel) {
	name2 = document.createElement("div");
	name2.setAttribute("id", id);
	name2.setAttribute("class", classes);
	name2.innerHTML = text;
	appendeelabel.append(name2);
}

//takes a string and checks for a specific word.  Returns a string based on the word found
function addImage(string) {
	if (string.includes("sun")) {
		return "sunimage";
	}
	if (string.includes("cloudy")) {
		return "cloudimage";
	}
	if (string.includes("storm")) {
		return "stormimage";
	}
	if (string.includes("rain")) {
		return "rainimage";
	}
	if (string.includes("snow")) {
		return "snowimage";
	}
	if (string.includes("clear")) {
		return "clearimage";
	}
	if (string.includes("Partially")) {
		return "partlysunimage";
	}
}

function getDay(dateTime) {
	let theday = dateTime.getDay();
	console.log(theday);
}

function makeGrid(amount, response) {
	for (let z = 1; z <= amount; z++) {
		let date = response.days[z].datetime;
		let day = String(new Date(date)).substr(0, 16);
		console.log(response);
		let conditions = response.days[z].conditions;
		let currenttemp = response.currentConditions.feelslike;
		let conditioncheck = conditions.toLowerCase();
		let maxTemp = response.days[z].tempmax;
		let feels = response.days[z].feelslike;
		let minTemp = response.days[z].tempmin;
		let grid = document.createElement("div");
		grid.setAttribute("id", `grid${amount}`);
		grid.setAttribute("class", "daygrid");
		forecast.append(grid);
		assignLabel("date", "date", "weatherlabels", day, grid);
		assignLabel("conditions", "conditions", "weatherlabels", conditions, grid);
		let conditionsdiv = document.getElementById("conditions");
		conditionsdiv.addEventListener("mouseover", () => {
			conditionsdiv.innerHTML = "it currently feels like " + currenttemp;
		});
		conditionsdiv.addEventListener("mouseleave", () => {
			conditionsdiv.innerHTML = conditions;
		});
		assignLabel("image", addImage(conditioncheck), "images", "", grid);
		makeandAssign("maxtemp", "maxtemp", "weatherlabels", maxTemp, grid);
		assignLabel("maxtemplabel", "maxtemplabel", "weatherlabels", "HIGH", grid);
		makeandAssign("mintemp", "mintemp", "weatherlabels", minTemp, grid);
		let mintempdiv = document.getElementById("mintemp");
		assignLabel("mintemplabel", "mintemplabel", "weatherlabels", "LOW", grid);
	}
	//once the grid is appended, you can grab elements and add the correct information
}

//address tells us the location
//"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=ZVFB4SWSDYVUP2SNNA5AYMS7W "

//"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[auburn]/[date1]/[date2]?key=ZVFB4SWSDYVUP2SNNA5AYMS7W "

// Dates should be in the format yyyy-MM-dd. For example 2020-10-19
//Only one date is needed, but you can search through the second date

//Example of getting weather for london for the next 15 days
//https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key=ZVFB4SWSDYVUP2SNNA5AYMS7W'

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsMEdBQW9DO0FBQ2hGLDRDQUE0Qyw4R0FBc0M7QUFDbEYsNENBQTRDLDRHQUFxQztBQUNqRiw0Q0FBNEMsNEdBQXFDO0FBQ2pGLDRDQUE0Qyw4R0FBc0M7QUFDbEYsNENBQTRDLDhHQUFzQztBQUNsRiw0Q0FBNEMsc0hBQTBDO0FBQ3RGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsbUNBQW1DO0FBQ25EO0FBQ0E7QUFDQSxnQkFBZ0IsbUNBQW1DO0FBQ25EO0FBQ0E7QUFDQSxnQkFBZ0IsbUNBQW1DO0FBQ25EO0FBQ0E7QUFDQSxnQkFBZ0IsbUNBQW1DO0FBQ25EO0FBQ0E7QUFDQSxnQkFBZ0IsbUNBQW1DO0FBQ25EO0FBQ0E7QUFDQSxnQkFBZ0IsbUNBQW1DO0FBQ25EO0FBQ0E7QUFDQSxnQkFBZ0IsbUNBQW1DO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVks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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsYUFBYTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxPQUFPO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9zdW4ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2Nsb3VkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9yYWluLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9zbm93LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9zdG9ybS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvY2xlYXIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3BhcnRseXN1bi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuXHRoZWlnaHQ6IDEwMHZoO1xuXHR3aWR0aDogMTAwdnc7XG5cdG1hcmdpbjogMHB4O1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XG59XG5cbi5sZWZ0IHtcblx0Ym9yZGVyLXJpZ2h0OiAxMHB4IGJsYWNrIGdyb292ZTtcblx0YmFja2dyb3VuZC1jb2xvcjogc2Vhc2hlbGw7XG5cdGhlaWdodDogMTAwJTtcblx0d2lkdGg6IDEwMCU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGdyaWQtYXJlYTogMS8xLzIvMjtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0bWFyZ2luOiAwcHg7XG59XG5cbi5pbmZvIHtcblx0bWFyZ2luLXRvcDogMTUlO1xuXHRtYXJnaW4tYm90dG9tOiAtMjAlO1xuXHRmb250LXNpemU6IDI4cHg7XG5cdHRleHQtZGVjb3JhdGlvbjogd2F2eTtcblx0Y29sb3I6IHJnYigyNDAsIDE3MCwgMTIxKTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4ucmlnaHQge1xuXHRvdmVyZmxvdy14OiBzY3JvbGw7XG5cdGJvcmRlci1sZWZ0OiAxMHB4IGJsYWNrIGdyb292ZTtcblx0aGVpZ2h0OiAxMDB2aDtcblx0d2lkdGg6IDEwMCU7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDE3MCwgMTIxKTtcblx0Z3JpZC1hcmVhOiAxLzIvMS8zO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Zm9udC1zaXplOiA0OHB4O1xuXHRnYXA6IDIwcHg7XG5cdGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuZm9ybSB7XG5cdGhlaWdodDogMTAwJTtcblx0ZGlzcGxheTogZmxleDtcblx0d2lkdGg6IDEwMCU7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI2xvY2F0aW9uIHtcblx0aGVpZ2h0OiA0MHB4O1xuXHRmb250LXNpemU6IDE4cHg7XG5cdHdpZHRoOiAyMDBweDtcbn1cbiNzdGF0ZURyb3Bkb3duIHtcblx0aGVpZ2h0OiA0MHB4O1xuXHRmb250LXNpemU6IDE4cHg7XG5cdHdpZHRoOiAyMDBweDtcbn1cbiNzdWJtaXQge1xuXHRtYXJnaW4tdG9wOiAyNHB4O1xuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XG5cdGhlaWdodDogNjBweDtcblx0Ym9yZGVyLXJhZGl1czogMTJweDtcblx0Zm9udC1zaXplOiAyMnB4O1xuXHR3aWR0aDogODAlO1xufVxuI3N1Ym1pdDphY3RpdmUge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG4uZGF5Z3JpZCB7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdGJvcmRlcjogOHB4IHNvbGlkIGJsYWNrO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xuXHRoZWlnaHQ6IDgwJTtcblx0ZGlzcGxheTogZ3JpZDtcblx0d2lkdGg6IDkwJTtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAxZnIgMWZyIDJmciBtaW4tY29udGVudDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIG1pbi1jb250ZW50O1xuXHRtYXJnaW46IDVweDtcbn1cblxuI2dyaWRob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJlZDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0aGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDogMTAwJTtcbn1cbi53ZWF0aGVybGFiZWxzIHtcblx0Zm9udC1zaXplOiAyMHB4O1xufVxuXG4uaW1hZ2VzIHtcblx0anVzdGlmeS1zZWxmOiBzdHJldGNoO1xuXHRhbGlnbi1zZWxmOiBzdHJldGNoO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiBmaXQtY29udGVudDtcblx0Z3JpZC1hcmVhOiAyLzEvMy8zO1xuXHRtYXJnaW46IGF1dG87XG59XG4jc3VuaW1hZ2Uge1xuXHRjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG4jY2xvdWRpbWFnZSB7XG5cdGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cbiNyYWluaW1hZ2Uge1xuXHRjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG59XG4jc25vd2ltYWdlIHtcblx0Y29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xufVxuI3N0b3JtaW1hZ2Uge1xuXHRjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XG59XG4jY2xlYXJpbWFnZSB7XG5cdGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX199KTtcbn1cbiNwYXJ0bHlzdW5pbWFnZSB7XG5cdGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX199KTtcbn1cbi53ZWF0aGVybGFiZWxzIHtcblx0aGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDogMTAwJTtcblx0ZGlzcGxheTogZmxleDtcblx0YmFja2dyb3VuZC1jb2xvcjogcGFwYXlhd2hpcDtcblx0Zm9udC1zaXplOiAxOHB4O1xuXHRmb250LXdlaWdodDogNzAwO1xuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdG1hcmdpbjogYXV0bztcbn1cblxuI2RhdGUge1xuXHRib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG5cblx0ZGlzcGxheTogZmxleDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRncmlkLWFyZWE6IDEvMS8yLzM7XG59XG4jY29uZGl0aW9ucyB7XG5cdGdyaWQtYXJlYTogNS8xLzYvMztcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcbn1cbiNtYXh0ZW1wbGFiZWwge1xuXHRib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XG5cdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcblxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG5cdGdyaWQtYXJlYTogMy8xLzQvMjtcbn1cbiNtaW50ZW1wbGFiZWwge1xuXHRib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XG5cdG1hcmdpbi10b3A6IC0ycHg7XG5cdGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xuXHRncmlkLWFyZWE6IDQvMS81LzI7XG59XG4jbWF4dGVtcCB7XG5cdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcblx0Ym9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xuXHRtYXJnaW46IGF1dG87XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcblx0Zm9udC1zaXplOiAxOHB4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z3JpZC1hcmVhOiAzLzIvNC8zO1xufVxuI21pbnRlbXAge1xuXHRib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XG5cdG1hcmdpbi10b3A6IC0ycHg7XG5cdGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xuXHRncmlkLWFyZWE6IDQvMi81LzM7XG59XG5cbiNncmlkMTAwIHtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBDZW50ZXI7XG5cdGJhY2tncm91bmQtY29sb3I6IHJlZDtcblx0Z3JpZC1hcmVhOiBzcGFuO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsYUFBYTtDQUNiLFlBQVk7Q0FDWixXQUFXO0NBQ1gsYUFBYTtDQUNiLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLCtCQUErQjtDQUMvQiwwQkFBMEI7Q0FDMUIsWUFBWTtDQUNaLFdBQVc7Q0FDWCxhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLHNCQUFzQjtDQUN0QixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLGVBQWU7Q0FDZixxQkFBcUI7Q0FDckIseUJBQXlCO0NBQ3pCLGtCQUFrQjtDQUNsQiw0REFBNEQ7Q0FDNUQsYUFBYTtDQUNiLDJCQUEyQjtDQUMzQixtQkFBbUI7Q0FDbkIsa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsOEJBQThCO0NBQzlCLGFBQWE7Q0FDYixXQUFXO0NBQ1gsb0NBQW9DO0NBQ3BDLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2IsNkJBQTZCO0NBQzdCLG1CQUFtQjtDQUNuQixlQUFlO0NBQ2YsU0FBUztDQUNULDREQUE0RDtDQUM1RCwwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLFdBQVc7Q0FDWCxzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsWUFBWTtDQUNaLGVBQWU7Q0FDZixZQUFZO0FBQ2I7QUFDQTtDQUNDLFlBQVk7Q0FDWixlQUFlO0NBQ2YsWUFBWTtBQUNiO0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsZUFBZTtDQUNmLFVBQVU7QUFDWDtBQUNBO0NBQ0MscUJBQXFCO0FBQ3RCO0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsdUJBQXVCO0NBQ3ZCLHlCQUF5QjtDQUN6QixXQUFXO0NBQ1gsYUFBYTtDQUNiLFVBQVU7Q0FDViw2QkFBNkI7Q0FDN0IsbUJBQW1CO0NBQ25CLG1EQUFtRDtDQUNuRCwwQ0FBMEM7Q0FDMUMsV0FBVztBQUNaOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsWUFBWTtDQUNaLFdBQVc7QUFDWjtBQUNBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsWUFBWTtBQUNiO0FBQ0E7Q0FDQyxnREFBaUM7QUFDbEM7QUFDQTtDQUNDLGdEQUFtQztBQUNwQztBQUNBO0NBQ0MsZ0RBQWtDO0FBQ25DO0FBQ0E7Q0FDQyxnREFBa0M7QUFDbkM7QUFDQTtDQUNDLGdEQUFtQztBQUNwQztBQUNBO0NBQ0MsZ0RBQW1DO0FBQ3BDO0FBQ0E7Q0FDQyxnREFBdUM7QUFDeEM7QUFDQTtDQUNDLFlBQVk7Q0FDWixXQUFXO0NBQ1gsYUFBYTtDQUNiLDRCQUE0QjtDQUM1QixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLDBCQUEwQjtDQUMxQix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLFlBQVk7QUFDYjs7QUFFQTtDQUNDLDhCQUE4Qjs7Q0FFOUIsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLDJCQUEyQjtBQUM1QjtBQUNBO0NBQ0MsMkJBQTJCO0NBQzNCLDhCQUE4Qjs7Q0FFOUIsd0JBQXdCO0NBQ3hCLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsMkJBQTJCO0NBQzNCLGdCQUFnQjtDQUNoQixnQ0FBZ0M7Q0FDaEMsa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyw4QkFBOEI7Q0FDOUIsMkJBQTJCO0NBQzNCLFlBQVk7Q0FDWixhQUFhO0NBQ2Isd0JBQXdCO0NBQ3hCLGVBQWU7Q0FDZix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsMkJBQTJCO0NBQzNCLGdCQUFnQjtDQUNoQixnQ0FBZ0M7Q0FDaEMsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQix1QkFBdUI7Q0FDdkIscUJBQXFCO0NBQ3JCLGVBQWU7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0bWFyZ2luOiAwcHg7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxufVxcblxcbi5sZWZ0IHtcXG5cXHRib3JkZXItcmlnaHQ6IDEwcHggYmxhY2sgZ3Jvb3ZlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHNlYXNoZWxsO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdyaWQtYXJlYTogMS8xLzIvMjtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdG1hcmdpbjogMHB4O1xcbn1cXG5cXG4uaW5mbyB7XFxuXFx0bWFyZ2luLXRvcDogMTUlO1xcblxcdG1hcmdpbi1ib3R0b206IC0yMCU7XFxuXFx0Zm9udC1zaXplOiAyOHB4O1xcblxcdHRleHQtZGVjb3JhdGlvbjogd2F2eTtcXG5cXHRjb2xvcjogcmdiKDI0MCwgMTcwLCAxMjEpO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi5yaWdodCB7XFxuXFx0b3ZlcmZsb3cteDogc2Nyb2xsO1xcblxcdGJvcmRlci1sZWZ0OiAxMHB4IGJsYWNrIGdyb292ZTtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDE3MCwgMTIxKTtcXG5cXHRncmlkLWFyZWE6IDEvMi8xLzM7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogNDhweDtcXG5cXHRnYXA6IDIwcHg7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5mb3JtIHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNsb2NhdGlvbiB7XFxuXFx0aGVpZ2h0OiA0MHB4O1xcblxcdGZvbnQtc2l6ZTogMThweDtcXG5cXHR3aWR0aDogMjAwcHg7XFxufVxcbiNzdGF0ZURyb3Bkb3duIHtcXG5cXHRoZWlnaHQ6IDQwcHg7XFxuXFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdHdpZHRoOiAyMDBweDtcXG59XFxuI3N1Ym1pdCB7XFxuXFx0bWFyZ2luLXRvcDogMjRweDtcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFx0aGVpZ2h0OiA2MHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDEycHg7XFxuXFx0Zm9udC1zaXplOiAyMnB4O1xcblxcdHdpZHRoOiA4MCU7XFxufVxcbiNzdWJtaXQ6YWN0aXZlIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcbi5kYXlncmlkIHtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdGJvcmRlcjogOHB4IHNvbGlkIGJsYWNrO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XFxuXFx0aGVpZ2h0OiA4MCU7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHR3aWR0aDogOTAlO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDFmciAxZnIgMmZyIG1pbi1jb250ZW50O1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciBtaW4tY29udGVudDtcXG5cXHRtYXJnaW46IDVweDtcXG59XFxuXFxuI2dyaWRob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcbi53ZWF0aGVybGFiZWxzIHtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5pbWFnZXMge1xcblxcdGp1c3RpZnktc2VsZjogc3RyZXRjaDtcXG5cXHRhbGlnbi1zZWxmOiBzdHJldGNoO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogZml0LWNvbnRlbnQ7XFxuXFx0Z3JpZC1hcmVhOiAyLzEvMy8zO1xcblxcdG1hcmdpbjogYXV0bztcXG59XFxuI3N1bmltYWdlIHtcXG5cXHRjb250ZW50OiB1cmwoXFxcIi4uL2ltYWdlcy9zdW4ucG5nXFxcIik7XFxufVxcbiNjbG91ZGltYWdlIHtcXG5cXHRjb250ZW50OiB1cmwoXFxcIi4uL2ltYWdlcy9jbG91ZC5zdmdcXFwiKTtcXG59XFxuI3JhaW5pbWFnZSB7XFxuXFx0Y29udGVudDogdXJsKFxcXCIuLi9pbWFnZXMvcmFpbi5zdmdcXFwiKTtcXG59XFxuI3Nub3dpbWFnZSB7XFxuXFx0Y29udGVudDogdXJsKFxcXCIuLi9pbWFnZXMvc25vdy5zdmdcXFwiKTtcXG59XFxuI3N0b3JtaW1hZ2Uge1xcblxcdGNvbnRlbnQ6IHVybChcXFwiLi4vaW1hZ2VzL3N0b3JtLnN2Z1xcXCIpO1xcbn1cXG4jY2xlYXJpbWFnZSB7XFxuXFx0Y29udGVudDogdXJsKFxcXCIuLi9pbWFnZXMvY2xlYXIucG5nXFxcIik7XFxufVxcbiNwYXJ0bHlzdW5pbWFnZSB7XFxuXFx0Y29udGVudDogdXJsKFxcXCIuLi9pbWFnZXMvcGFydGx5c3VuLnBuZ1xcXCIpO1xcbn1cXG4ud2VhdGhlcmxhYmVscyB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcGFwYXlhd2hpcDtcXG5cXHRmb250LXNpemU6IDE4cHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdG1hcmdpbjogYXV0bztcXG59XFxuXFxuI2RhdGUge1xcblxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRncmlkLWFyZWE6IDEvMS8yLzM7XFxufVxcbiNjb25kaXRpb25zIHtcXG5cXHRncmlkLWFyZWE6IDUvMS82LzM7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XFxufVxcbiNtYXh0ZW1wbGFiZWwge1xcblxcdGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcXG5cXHRib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcblxcdGdyaWQtYXJlYTogMy8xLzQvMjtcXG59XFxuI21pbnRlbXBsYWJlbCB7XFxuXFx0Ym9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xcblxcdG1hcmdpbi10b3A6IC0ycHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XFxuXFx0Z3JpZC1hcmVhOiA0LzEvNS8yO1xcbn1cXG4jbWF4dGVtcCB7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcblxcdGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcXG5cXHRtYXJnaW46IGF1dG87XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxuXFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z3JpZC1hcmVhOiAzLzIvNC8zO1xcbn1cXG4jbWludGVtcCB7XFxuXFx0Ym9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xcblxcdG1hcmdpbi10b3A6IC0ycHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XFxuXFx0Z3JpZC1hcmVhOiA0LzIvNS8zO1xcbn1cXG5cXG4jZ3JpZDEwMCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogQ2VudGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG5cXHRncmlkLWFyZWE6IHNwYW47XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG4vL2FkZCBzdGF0ZXMgdG8gZHJvcGRvd25cblxuY29uc3Qgc3RhdGVzID0gW1xuXHRcIkFsYWJhbWFcIixcblx0XCJBbGFza2FcIixcblx0XCJBcml6b25hXCIsXG5cdFwiQXJrYW5zYXNcIixcblx0XCJDYWxpZm9ybmlhXCIsXG5cdFwiQ29sb3JhZG9cIixcblx0XCJDb25uZWN0aWN1dFwiLFxuXHRcIkRlbGF3YXJlXCIsXG5cdFwiRmxvcmlkYVwiLFxuXHRcIkdlb3JnaWFcIixcblx0XCJIYXdhaWlcIixcblx0XCJJZGFob1wiLFxuXHRcIklsbGlub2lzXCIsXG5cdFwiSW5kaWFuYVwiLFxuXHRcIklvd2FcIixcblx0XCJLYW5zYXNcIixcblx0XCJLZW50dWNreVwiLFxuXHRcIkxvdWlzaWFuYVwiLFxuXHRcIk1haW5lXCIsXG5cdFwiTWFyeWxhbmRcIixcblx0XCJNYXNzYWNodXNldHRzXCIsXG5cdFwiTWljaGlnYW5cIixcblx0XCJNaW5uZXNvdGFcIixcblx0XCJNaXNzaXNzaXBwaVwiLFxuXHRcIk1pc3NvdXJpXCIsXG5cdFwiTW9udGFuYVwiLFxuXHRcIk5lYnJhc2thXCIsXG5cdFwiTmV2YWRhXCIsXG5cdFwiTmV3IEhhbXBzaGlyZVwiLFxuXHRcIk5ldyBKZXJzZXlcIixcblx0XCJOZXcgTWV4aWNvXCIsXG5cdFwiTmV3IFlvcmtcIixcblx0XCJOb3J0aCBDYXJvbGluYVwiLFxuXHRcIk5vcnRoIERha290YVwiLFxuXHRcIk9oaW9cIixcblx0XCJPa2xhaG9tYVwiLFxuXHRcIk9yZWdvblwiLFxuXHRcIlBlbm5zeWx2YW5pYVwiLFxuXHRcIlJob2RlIElzbGFuZFwiLFxuXHRcIlNvdXRoIENhcm9saW5hXCIsXG5cdFwiU291dGggRGFrb3RhXCIsXG5cdFwiVGVubmVzc2VlXCIsXG5cdFwiVGV4YXNcIixcblx0XCJVdGFoXCIsXG5cdFwiVmVybW9udFwiLFxuXHRcIlZpcmdpbmlhXCIsXG5cdFwiV2FzaGluZ3RvblwiLFxuXHRcIldlc3QgVmlyZ2luaWFcIixcblx0XCJXaXNjb25zaW5cIixcblx0XCJXeW9taW5nXCIsXG5dO1xuLy8gc2V0cyB0aGUgc2VhcmNoIGJ1dHRvblxuY29uc3QgZm9yZWNhc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcmVjYXN0XCIpO1xuY29uc3Qgc2VhcmNoYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRcIik7XG5cbi8vYWRkcyB0aGUgc3RhdGVzIHRvIHRoZSBkcm9wZG93biBtZW51XG5jb25zdCBkcm9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGF0ZURyb3Bkb3duXCIpO1xuZm9yIChjb25zdCBzdGF0ZSBvZiBzdGF0ZXMpIHtcblx0bGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cdG9wdGlvbi52YWx1ZSA9IHN0YXRlO1xuXHRvcHRpb24udGV4dCA9IHN0YXRlO1xuXHRkcm9wLmFwcGVuZENoaWxkKG9wdGlvbik7XG59XG5cbi8vdGhpcyB3aWxsIGJlIHRoZSBmdW5jdGlvbiB0byBjYWxsIHRoZSBBUEkgc2VydmljZSBhbmQgZ2V0IGluZm8uXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGxvY2F0aW9uLCB0aGVzdGF0ZSkge1xuXHQvL2tleSBpcyBaVkZCNFNXU0RZVlVQMlNOTkE1QVlNUzdXIChBUEkgS2V5KVxuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuXHRcdGBodHRwczovL3dlYXRoZXIudmlzdWFsY3Jvc3NpbmcuY29tL1Zpc3VhbENyb3NzaW5nV2ViU2VydmljZXMvcmVzdC9zZXJ2aWNlcy90aW1lbGluZS8ke2xvY2F0aW9ufSwgJHt0aGVzdGF0ZX1VUz9rZXk9WlZGQjRTV1NEWVZVUDJTTk5BNUFZTVM3V2AsXG5cdFx0eyBtb2RlOiBcImNvcnNcIiB9XG5cdClcblx0XHQvL3Rha2VzIHRoZSByZXNwb25zZSBmcm9tIHRoZSBmZXRjaCByZXF1ZXN0LCBhbmQgdGhlbiBhcHBsaWVzIHRoZSAuanNvbiBmb3JtYXQgdG8gaXRcblx0XHQvL3RoaXMgcmV0dXJucyB0aGUganNvbmlmaWVkIGRhdGEsIHdoaWNoIGlzIG5vdyB0aGUgXCJyZXNwb25zZVwiXG5cdFx0Ly90aGlzIG5ldyByZXNwb25zZSBpcyB0aGVuIHBhc3NlZCB0byB0aGUgbWFrZUdyaWRmdW5jdGlvbiwgd2hpY2ggdGFrZXMgdGhpcyByZXNwb25zZSBhcyBhbiBhcmd1bWVudFxuXHRcdC8vdGhpcyBwYXNzZXMgdGhlIGRhdGEgaW50byBtYWtlR3JpZFxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4gbWFrZUdyaWQoNSwgcmVzcG9uc2UpKTtcbn1cbi8vdGhpcyBnZXRzIHRoZSBzdGF0ZSB2YWx1ZSBmcm9tIGRyb3Bkb3duIG1lbnVcbmZ1bmN0aW9uIGdldFN0YXRlKCkge1xuXHRsZXQgdGhlU3RhdGUgPSBkcm9wLnZhbHVlO1xuXHRyZXR1cm4gdGhlU3RhdGU7XG59XG5cbi8vZXZlbnQgbGlzdGVuZXJzIGdvIGhlcmVcbnNlYXJjaGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRmb3JlY2FzdC5pbm5lckhUTUwgPSBcIlwiO1xuXHRsZXQgbG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2F0aW9uXCIpO1xuXHRsZXQgdGVzdCA9IGxvY2F0aW9uLnZhbHVlO1xuXHRsZXQgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuXHQvLyB0aGUgaW5mbyBnZXRzIHJ1bnMgdGhlIHdlYXRoZXIsIHdoaWNoIHJldHVybnMgYSByZXNwb25zZS4gIC5USEVOIHVzZWQgdGhlIHJlc3BvbnNlLCBhbmQgZG9lcyBzb21ldGhpbmcgd2l0aFxcXG5cdGdldFdlYXRoZXIodGVzdCwgc3RhdGUpO1xufSk7XG5cbmZ1bmN0aW9uIG1ha2VhbmRBc3NpZ24obmFtZSwgaWQsIGNsYXNrLCB3ZWF0aGVydmFyLCBhcHBlbmRlZSkge1xuXHRuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0bmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG5cdG5hbWUuaW5uZXJIVE1MID0gd2VhdGhlcnZhcjtcblx0bmFtZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBjbGFzayk7XG5cdGFwcGVuZGVlLmFwcGVuZChuYW1lKTtcbn1cblxuZnVuY3Rpb24gYXNzaWduTGFiZWwobmFtZTIsIGlkLCBjbGFzc2VzLCB0ZXh0LCBhcHBlbmRlZWxhYmVsKSB7XG5cdG5hbWUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0bmFtZTIuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuXHRuYW1lMi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBjbGFzc2VzKTtcblx0bmFtZTIuaW5uZXJIVE1MID0gdGV4dDtcblx0YXBwZW5kZWVsYWJlbC5hcHBlbmQobmFtZTIpO1xufVxuXG4vL3Rha2VzIGEgc3RyaW5nIGFuZCBjaGVja3MgZm9yIGEgc3BlY2lmaWMgd29yZC4gIFJldHVybnMgYSBzdHJpbmcgYmFzZWQgb24gdGhlIHdvcmQgZm91bmRcbmZ1bmN0aW9uIGFkZEltYWdlKHN0cmluZykge1xuXHRpZiAoc3RyaW5nLmluY2x1ZGVzKFwic3VuXCIpKSB7XG5cdFx0cmV0dXJuIFwic3VuaW1hZ2VcIjtcblx0fVxuXHRpZiAoc3RyaW5nLmluY2x1ZGVzKFwiY2xvdWR5XCIpKSB7XG5cdFx0cmV0dXJuIFwiY2xvdWRpbWFnZVwiO1xuXHR9XG5cdGlmIChzdHJpbmcuaW5jbHVkZXMoXCJzdG9ybVwiKSkge1xuXHRcdHJldHVybiBcInN0b3JtaW1hZ2VcIjtcblx0fVxuXHRpZiAoc3RyaW5nLmluY2x1ZGVzKFwicmFpblwiKSkge1xuXHRcdHJldHVybiBcInJhaW5pbWFnZVwiO1xuXHR9XG5cdGlmIChzdHJpbmcuaW5jbHVkZXMoXCJzbm93XCIpKSB7XG5cdFx0cmV0dXJuIFwic25vd2ltYWdlXCI7XG5cdH1cblx0aWYgKHN0cmluZy5pbmNsdWRlcyhcImNsZWFyXCIpKSB7XG5cdFx0cmV0dXJuIFwiY2xlYXJpbWFnZVwiO1xuXHR9XG5cdGlmIChzdHJpbmcuaW5jbHVkZXMoXCJQYXJ0aWFsbHlcIikpIHtcblx0XHRyZXR1cm4gXCJwYXJ0bHlzdW5pbWFnZVwiO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGdldERheShkYXRlVGltZSkge1xuXHRsZXQgdGhlZGF5ID0gZGF0ZVRpbWUuZ2V0RGF5KCk7XG5cdGNvbnNvbGUubG9nKHRoZWRheSk7XG59XG5cbmZ1bmN0aW9uIG1ha2VHcmlkKGFtb3VudCwgcmVzcG9uc2UpIHtcblx0Zm9yIChsZXQgeiA9IDE7IHogPD0gYW1vdW50OyB6KyspIHtcblx0XHRsZXQgZGF0ZSA9IHJlc3BvbnNlLmRheXNbel0uZGF0ZXRpbWU7XG5cdFx0bGV0IGRheSA9IFN0cmluZyhuZXcgRGF0ZShkYXRlKSkuc3Vic3RyKDAsIDE2KTtcblx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cdFx0bGV0IGNvbmRpdGlvbnMgPSByZXNwb25zZS5kYXlzW3pdLmNvbmRpdGlvbnM7XG5cdFx0bGV0IGN1cnJlbnR0ZW1wID0gcmVzcG9uc2UuY3VycmVudENvbmRpdGlvbnMuZmVlbHNsaWtlO1xuXHRcdGxldCBjb25kaXRpb25jaGVjayA9IGNvbmRpdGlvbnMudG9Mb3dlckNhc2UoKTtcblx0XHRsZXQgbWF4VGVtcCA9IHJlc3BvbnNlLmRheXNbel0udGVtcG1heDtcblx0XHRsZXQgZmVlbHMgPSByZXNwb25zZS5kYXlzW3pdLmZlZWxzbGlrZTtcblx0XHRsZXQgbWluVGVtcCA9IHJlc3BvbnNlLmRheXNbel0udGVtcG1pbjtcblx0XHRsZXQgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0Z3JpZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgZ3JpZCR7YW1vdW50fWApO1xuXHRcdGdyaWQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkYXlncmlkXCIpO1xuXHRcdGZvcmVjYXN0LmFwcGVuZChncmlkKTtcblx0XHRhc3NpZ25MYWJlbChcImRhdGVcIiwgXCJkYXRlXCIsIFwid2VhdGhlcmxhYmVsc1wiLCBkYXksIGdyaWQpO1xuXHRcdGFzc2lnbkxhYmVsKFwiY29uZGl0aW9uc1wiLCBcImNvbmRpdGlvbnNcIiwgXCJ3ZWF0aGVybGFiZWxzXCIsIGNvbmRpdGlvbnMsIGdyaWQpO1xuXHRcdGxldCBjb25kaXRpb25zZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb25kaXRpb25zXCIpO1xuXHRcdGNvbmRpdGlvbnNkaXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG5cdFx0XHRjb25kaXRpb25zZGl2LmlubmVySFRNTCA9IFwiaXQgY3VycmVudGx5IGZlZWxzIGxpa2UgXCIgKyBjdXJyZW50dGVtcDtcblx0XHR9KTtcblx0XHRjb25kaXRpb25zZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcblx0XHRcdGNvbmRpdGlvbnNkaXYuaW5uZXJIVE1MID0gY29uZGl0aW9ucztcblx0XHR9KTtcblx0XHRhc3NpZ25MYWJlbChcImltYWdlXCIsIGFkZEltYWdlKGNvbmRpdGlvbmNoZWNrKSwgXCJpbWFnZXNcIiwgXCJcIiwgZ3JpZCk7XG5cdFx0bWFrZWFuZEFzc2lnbihcIm1heHRlbXBcIiwgXCJtYXh0ZW1wXCIsIFwid2VhdGhlcmxhYmVsc1wiLCBtYXhUZW1wLCBncmlkKTtcblx0XHRhc3NpZ25MYWJlbChcIm1heHRlbXBsYWJlbFwiLCBcIm1heHRlbXBsYWJlbFwiLCBcIndlYXRoZXJsYWJlbHNcIiwgXCJISUdIXCIsIGdyaWQpO1xuXHRcdG1ha2VhbmRBc3NpZ24oXCJtaW50ZW1wXCIsIFwibWludGVtcFwiLCBcIndlYXRoZXJsYWJlbHNcIiwgbWluVGVtcCwgZ3JpZCk7XG5cdFx0bGV0IG1pbnRlbXBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pbnRlbXBcIik7XG5cdFx0YXNzaWduTGFiZWwoXCJtaW50ZW1wbGFiZWxcIiwgXCJtaW50ZW1wbGFiZWxcIiwgXCJ3ZWF0aGVybGFiZWxzXCIsIFwiTE9XXCIsIGdyaWQpO1xuXHR9XG5cdC8vb25jZSB0aGUgZ3JpZCBpcyBhcHBlbmRlZCwgeW91IGNhbiBncmFiIGVsZW1lbnRzIGFuZCBhZGQgdGhlIGNvcnJlY3QgaW5mb3JtYXRpb25cbn1cblxuLy9hZGRyZXNzIHRlbGxzIHVzIHRoZSBsb2NhdGlvblxuLy9cImh0dHBzOi8vd2VhdGhlci52aXN1YWxjcm9zc2luZy5jb20vVmlzdWFsQ3Jvc3NpbmdXZWJTZXJ2aWNlcy9yZXN0L3NlcnZpY2VzL3RpbWVsaW5lL1tsb2NhdGlvbl0vW2RhdGUxXS9bZGF0ZTJdP2tleT1aVkZCNFNXU0RZVlVQMlNOTkE1QVlNUzdXIFwiXG5cbi8vXCJodHRwczovL3dlYXRoZXIudmlzdWFsY3Jvc3NpbmcuY29tL1Zpc3VhbENyb3NzaW5nV2ViU2VydmljZXMvcmVzdC9zZXJ2aWNlcy90aW1lbGluZS9bYXVidXJuXS9bZGF0ZTFdL1tkYXRlMl0/a2V5PVpWRkI0U1dTRFlWVVAyU05OQTVBWU1TN1cgXCJcblxuLy8gRGF0ZXMgc2hvdWxkIGJlIGluIHRoZSBmb3JtYXQgeXl5eS1NTS1kZC4gRm9yIGV4YW1wbGUgMjAyMC0xMC0xOVxuLy9Pbmx5IG9uZSBkYXRlIGlzIG5lZWRlZCwgYnV0IHlvdSBjYW4gc2VhcmNoIHRocm91Z2ggdGhlIHNlY29uZCBkYXRlXG5cbi8vRXhhbXBsZSBvZiBnZXR0aW5nIHdlYXRoZXIgZm9yIGxvbmRvbiBmb3IgdGhlIG5leHQgMTUgZGF5c1xuLy9odHRwczovL3dlYXRoZXIudmlzdWFsY3Jvc3NpbmcuY29tL1Zpc3VhbENyb3NzaW5nV2ViU2VydmljZXMvcmVzdC9zZXJ2aWNlcy90aW1lbGluZS9Mb25kb24sVUs/a2V5PVpWRkI0U1dTRFlWVVAyU05OQTVBWU1TN1cnXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=