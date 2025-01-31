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
	background-color: seashell;
	height: 100%;
	width: 100%;
	display: flex;
	grid-area: 1/1/2/2;
}

.right {
	height: 100vh;
	border: 2px solid darkblue;
	background-color: rgb(240, 170, 121);
	grid-area: 1/2/1/3;
	display: flex;
	justify-content: space-around;
	align-items: center;
	font-size: 48px;
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	text-decoration: underline;
}

#forecast {
	display: flex;
	flex-direction: row;
	gap: 10px;
	justify-content: space-around;
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
	height: 80px;
	border-radius: 8px;
	font-size: 22px;
	width: 400px;
}
.daygrid {
	height: 80%;
	display: grid;
	justify-content: space-around;
	align-items: center;
	width: 200px;
	grid-template-rows: 1fr 2fr 1fr 1fr 2fr;
	grid-template-columns: 1fr 1fr;
	grid-template-areas:
		"day" "day"
		"image" "image"
		"lowlabel" "low"
		"highlabel" "high"
		"description" "desciption";
}

.images {
	justify-self: stretch;
	align-self: stretch;
	object-fit: 100%;
	max-width: 100%;
	max-height: 100%;
	height: 200px;
	grid-area: 2/1/3/3;
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
	grid-area: 1/1/2/3;
}
#conditions {
	grid-area: 5/1/6/3;
	justify-content: center;
	align-items: center;
}
#maxtemplabel {
	background-color: orange;
	grid-area: 3/1/4/2;
}
#mintemplabel {
	background-color: cornflowerblue;
	grid-area: 4/1/5/2;
}
#maxtemp {
	height: 100%;
	width: 100%;
	display: flex;
	background-color: papayawhip;
	font-size: 18px;
	justify-content: center;
	align-items: center;
	grid-area: 3/2/4/3;
}
#mintemp {
	height: 100%;
	width: 100%;
	display: flex;
	background-color: papayawhip;
	font-size: 18px;
	justify-content: center;
	align-items: center;
	grid-area: 4/2/5/3;
}

.gridelement {
	height: 100%;
	width: 100%;
	margin: auto;
}

#grid100 {
	display: flex;
	align-items: center;
	justify-content: Center;
	background-color: red;
	grid-area: span;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,aAAa;CACb,YAAY;CACZ,WAAW;CACX,aAAa;CACb,8BAA8B;AAC/B;;AAEA;CACC,0BAA0B;CAC1B,YAAY;CACZ,WAAW;CACX,aAAa;CACb,kBAAkB;AACnB;;AAEA;CACC,aAAa;CACb,0BAA0B;CAC1B,oCAAoC;CACpC,kBAAkB;CAClB,aAAa;CACb,6BAA6B;CAC7B,mBAAmB;CACnB,eAAe;CACf,4DAA4D;CAC5D,0BAA0B;AAC3B;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,SAAS;CACT,6BAA6B;AAC9B;;AAEA;CACC,YAAY;CACZ,aAAa;CACb,WAAW;CACX,sBAAsB;CACtB,uBAAuB;CACvB,mBAAmB;AACpB;AACA;CACC,YAAY;CACZ,eAAe;CACf,YAAY;AACb;AACA;CACC,YAAY;CACZ,eAAe;CACf,YAAY;AACb;AACA;CACC,gBAAgB;CAChB,kBAAkB;CAClB,YAAY;CACZ,kBAAkB;CAClB,eAAe;CACf,YAAY;AACb;AACA;CACC,WAAW;CACX,aAAa;CACb,6BAA6B;CAC7B,mBAAmB;CACnB,YAAY;CACZ,uCAAuC;CACvC,8BAA8B;CAC9B;;;;;4BAK2B;AAC5B;;AAEA;CACC,qBAAqB;CACrB,mBAAmB;CACnB,gBAAgB;CAChB,eAAe;CACf,gBAAgB;CAChB,aAAa;CACb,kBAAkB;AACnB;AACA;CACC,gDAAiC;AAClC;AACA;CACC,gDAAmC;AACpC;AACA;CACC,gDAAkC;AACnC;AACA;CACC,gDAAkC;AACnC;AACA;CACC,gDAAmC;AACpC;AACA;CACC,gDAAmC;AACpC;AACA;CACC,gDAAuC;AACxC;AACA;CACC,YAAY;CACZ,WAAW;CACX,aAAa;CACb,4BAA4B;CAC5B,eAAe;CACf,gBAAgB;CAChB,0BAA0B;CAC1B,uBAAuB;CACvB,mBAAmB;CACnB,YAAY;AACb;;AAEA;CACC,kBAAkB;AACnB;AACA;CACC,kBAAkB;CAClB,uBAAuB;CACvB,mBAAmB;AACpB;AACA;CACC,wBAAwB;CACxB,kBAAkB;AACnB;AACA;CACC,gCAAgC;CAChC,kBAAkB;AACnB;AACA;CACC,YAAY;CACZ,WAAW;CACX,aAAa;CACb,4BAA4B;CAC5B,eAAe;CACf,uBAAuB;CACvB,mBAAmB;CACnB,kBAAkB;AACnB;AACA;CACC,YAAY;CACZ,WAAW;CACX,aAAa;CACb,4BAA4B;CAC5B,eAAe;CACf,uBAAuB;CACvB,mBAAmB;CACnB,kBAAkB;AACnB;;AAEA;CACC,YAAY;CACZ,WAAW;CACX,YAAY;AACb;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,uBAAuB;CACvB,qBAAqB;CACrB,eAAe;AAChB","sourcesContent":["body {\n\theight: 100vh;\n\twidth: 100vw;\n\tmargin: 0px;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 3fr;\n}\n\n.left {\n\tbackground-color: seashell;\n\theight: 100%;\n\twidth: 100%;\n\tdisplay: flex;\n\tgrid-area: 1/1/2/2;\n}\n\n.right {\n\theight: 100vh;\n\tborder: 2px solid darkblue;\n\tbackground-color: rgb(240, 170, 121);\n\tgrid-area: 1/2/1/3;\n\tdisplay: flex;\n\tjustify-content: space-around;\n\talign-items: center;\n\tfont-size: 48px;\n\tfont-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n\ttext-decoration: underline;\n}\n\n#forecast {\n\tdisplay: flex;\n\tflex-direction: row;\n\tgap: 10px;\n\tjustify-content: space-around;\n}\n\nform {\n\theight: 100%;\n\tdisplay: flex;\n\twidth: 100%;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n}\n#location {\n\theight: 40px;\n\tfont-size: 18px;\n\twidth: 200px;\n}\n#stateDropdown {\n\theight: 40px;\n\tfont-size: 18px;\n\twidth: 200px;\n}\n#submit {\n\tmargin-top: 24px;\n\talign-self: center;\n\theight: 80px;\n\tborder-radius: 8px;\n\tfont-size: 22px;\n\twidth: 400px;\n}\n.daygrid {\n\theight: 80%;\n\tdisplay: grid;\n\tjustify-content: space-around;\n\talign-items: center;\n\twidth: 200px;\n\tgrid-template-rows: 1fr 2fr 1fr 1fr 2fr;\n\tgrid-template-columns: 1fr 1fr;\n\tgrid-template-areas:\n\t\t\"day\" \"day\"\n\t\t\"image\" \"image\"\n\t\t\"lowlabel\" \"low\"\n\t\t\"highlabel\" \"high\"\n\t\t\"description\" \"desciption\";\n}\n\n.images {\n\tjustify-self: stretch;\n\talign-self: stretch;\n\tobject-fit: 100%;\n\tmax-width: 100%;\n\tmax-height: 100%;\n\theight: 200px;\n\tgrid-area: 2/1/3/3;\n}\n#sunimage {\n\tcontent: url(\"../images/sun.png\");\n}\n#cloudimage {\n\tcontent: url(\"../images/cloud.svg\");\n}\n#rainimage {\n\tcontent: url(\"../images/rain.svg\");\n}\n#snowimage {\n\tcontent: url(\"../images/snow.svg\");\n}\n#stormimage {\n\tcontent: url(\"../images/storm.svg\");\n}\n#clearimage {\n\tcontent: url(\"../images/clear.png\");\n}\n#partlysunimage {\n\tcontent: url(\"../images/partlysun.png\");\n}\n.weatherlabels {\n\theight: 100%;\n\twidth: 100%;\n\tdisplay: flex;\n\tbackground-color: papayawhip;\n\tfont-size: 18px;\n\tfont-weight: 700;\n\ttext-decoration: underline;\n\tjustify-content: center;\n\talign-items: center;\n\tmargin: auto;\n}\n\n#date {\n\tgrid-area: 1/1/2/3;\n}\n#conditions {\n\tgrid-area: 5/1/6/3;\n\tjustify-content: center;\n\talign-items: center;\n}\n#maxtemplabel {\n\tbackground-color: orange;\n\tgrid-area: 3/1/4/2;\n}\n#mintemplabel {\n\tbackground-color: cornflowerblue;\n\tgrid-area: 4/1/5/2;\n}\n#maxtemp {\n\theight: 100%;\n\twidth: 100%;\n\tdisplay: flex;\n\tbackground-color: papayawhip;\n\tfont-size: 18px;\n\tjustify-content: center;\n\talign-items: center;\n\tgrid-area: 3/2/4/3;\n}\n#mintemp {\n\theight: 100%;\n\twidth: 100%;\n\tdisplay: flex;\n\tbackground-color: papayawhip;\n\tfont-size: 18px;\n\tjustify-content: center;\n\talign-items: center;\n\tgrid-area: 4/2/5/3;\n}\n\n.gridelement {\n\theight: 100%;\n\twidth: 100%;\n\tmargin: auto;\n}\n\n#grid100 {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: Center;\n\tbackground-color: red;\n\tgrid-area: span;\n}\n"],"sourceRoot":""}]);
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

function makeandAssign(name, id, weathervar, appendee) {
	name = document.createElement("div");
	name.setAttribute("id", id);
	name.innerHTML = weathervar;
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
	for (let z = 0; z < amount; z++) {
		let date = response.days[z].datetime;
		let day = String(new Date(date)).substr(0, 16);
		console.log(response);
		let conditions = response.days[z].conditions;
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
		assignLabel("image", addImage(conditioncheck), "images", "", grid);
		makeandAssign("maxtemp", "maxtemp", maxTemp, grid);
		assignLabel("maxtemplabel", "maxtemplabel", "weatherlabels", "HIGH", grid);
		makeandAssign("mintemp", "mintemp", minTemp, grid);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsMEdBQW9DO0FBQ2hGLDRDQUE0Qyw4R0FBc0M7QUFDbEYsNENBQTRDLDRHQUFxQztBQUNqRiw0Q0FBNEMsNEdBQXFDO0FBQ2pGLDRDQUE0Qyw4R0FBc0M7QUFDbEYsNENBQTRDLDhHQUFzQztBQUNsRiw0Q0FBNEMsc0hBQTBDO0FBQ3RGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQ0FBbUM7QUFDbkQ7QUFDQTtBQUNBLGdCQUFnQixtQ0FBbUM7QUFDbkQ7QUFDQTtBQUNBLGdCQUFnQixtQ0FBbUM7QUFDbkQ7QUFDQTtBQUNBLGdCQUFnQixtQ0FBbUM7QUFDbkQ7QUFDQTtBQUNBLGdCQUFnQixtQ0FBbUM7QUFDbkQ7QUFDQTtBQUNBLGdCQUFnQixtQ0FBbUM7QUFDbkQ7QUFDQTtBQUNBLGdCQUFnQixtQ0FBbUM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsVUFBVSxPQUFPLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLGdDQUFnQyxrQkFBa0IsaUJBQWlCLGdCQUFnQixrQkFBa0IsbUNBQW1DLEdBQUcsV0FBVywrQkFBK0IsaUJBQWlCLGdCQUFnQixrQkFBa0IsdUJBQXVCLEdBQUcsWUFBWSxrQkFBa0IsK0JBQStCLHlDQUF5Qyx1QkFBdUIsa0JBQWtCLGtDQUFrQyx3QkFBd0Isb0JBQW9CLG1FQUFtRSwrQkFBK0IsR0FBRyxlQUFlLGtCQUFrQix3QkFBd0IsY0FBYyxrQ0FBa0MsR0FBRyxVQUFVLGlCQUFpQixrQkFBa0IsZ0JBQWdCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLEdBQUcsYUFBYSxpQkFBaUIsb0JBQW9CLGlCQUFpQixHQUFHLGtCQUFrQixpQkFBaUIsb0JBQW9CLGlCQUFpQixHQUFHLFdBQVcscUJBQXFCLHVCQUF1QixpQkFBaUIsdUJBQXVCLG9CQUFvQixpQkFBaUIsR0FBRyxZQUFZLGdCQUFnQixrQkFBa0Isa0NBQWtDLHdCQUF3QixpQkFBaUIsNENBQTRDLG1DQUFtQyxpS0FBaUssR0FBRyxhQUFhLDBCQUEwQix3QkFBd0IscUJBQXFCLG9CQUFvQixxQkFBcUIsa0JBQWtCLHVCQUF1QixHQUFHLGFBQWEsd0NBQXdDLEdBQUcsZUFBZSwwQ0FBMEMsR0FBRyxjQUFjLHlDQUF5QyxHQUFHLGNBQWMseUNBQXlDLEdBQUcsZUFBZSwwQ0FBMEMsR0FBRyxlQUFlLDBDQUEwQyxHQUFHLG1CQUFtQiw4Q0FBOEMsR0FBRyxrQkFBa0IsaUJBQWlCLGdCQUFnQixrQkFBa0IsaUNBQWlDLG9CQUFvQixxQkFBcUIsK0JBQStCLDRCQUE0Qix3QkFBd0IsaUJBQWlCLEdBQUcsV0FBVyx1QkFBdUIsR0FBRyxlQUFlLHVCQUF1Qiw0QkFBNEIsd0JBQXdCLEdBQUcsaUJBQWlCLDZCQUE2Qix1QkFBdUIsR0FBRyxpQkFBaUIscUNBQXFDLHVCQUF1QixHQUFHLFlBQVksaUJBQWlCLGdCQUFnQixrQkFBa0IsaUNBQWlDLG9CQUFvQiw0QkFBNEIsd0JBQXdCLHVCQUF1QixHQUFHLFlBQVksaUJBQWlCLGdCQUFnQixrQkFBa0IsaUNBQWlDLG9CQUFvQiw0QkFBNEIsd0JBQXdCLHVCQUF1QixHQUFHLGtCQUFrQixpQkFBaUIsZ0JBQWdCLGlCQUFpQixHQUFHLGNBQWMsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsMEJBQTBCLG9CQUFvQixHQUFHLHFCQUFxQjtBQUN2cko7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNqTTFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7QUFDckMsaUJBQWlCLHVHQUFhO0FBQzlCLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDeEJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7O0FDQXFCOztBQUVyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUZBQXlGLFNBQVMsSUFBSSxTQUFTO0FBQy9HLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsT0FBTztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3N1bi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvY2xvdWQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3JhaW4uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3Nub3cuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3N0b3JtLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9jbGVhci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvcGFydGx5c3VuLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG5cdGhlaWdodDogMTAwdmg7XG5cdHdpZHRoOiAxMDB2dztcblx0bWFyZ2luOiAwcHg7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcbn1cblxuLmxlZnQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBzZWFzaGVsbDtcblx0aGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDogMTAwJTtcblx0ZGlzcGxheTogZmxleDtcblx0Z3JpZC1hcmVhOiAxLzEvMi8yO1xufVxuXG4ucmlnaHQge1xuXHRoZWlnaHQ6IDEwMHZoO1xuXHRib3JkZXI6IDJweCBzb2xpZCBkYXJrYmx1ZTtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMTcwLCAxMjEpO1xuXHRncmlkLWFyZWE6IDEvMi8xLzM7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRmb250LXNpemU6IDQ4cHg7XG5cdGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuI2ZvcmVjYXN0IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0Z2FwOiAxMHB4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuZm9ybSB7XG5cdGhlaWdodDogMTAwJTtcblx0ZGlzcGxheTogZmxleDtcblx0d2lkdGg6IDEwMCU7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI2xvY2F0aW9uIHtcblx0aGVpZ2h0OiA0MHB4O1xuXHRmb250LXNpemU6IDE4cHg7XG5cdHdpZHRoOiAyMDBweDtcbn1cbiNzdGF0ZURyb3Bkb3duIHtcblx0aGVpZ2h0OiA0MHB4O1xuXHRmb250LXNpemU6IDE4cHg7XG5cdHdpZHRoOiAyMDBweDtcbn1cbiNzdWJtaXQge1xuXHRtYXJnaW4tdG9wOiAyNHB4O1xuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XG5cdGhlaWdodDogODBweDtcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRmb250LXNpemU6IDIycHg7XG5cdHdpZHRoOiA0MDBweDtcbn1cbi5kYXlncmlkIHtcblx0aGVpZ2h0OiA4MCU7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR3aWR0aDogMjAwcHg7XG5cdGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAxZnIgMWZyIDJmcjtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuXHRncmlkLXRlbXBsYXRlLWFyZWFzOlxuXHRcdFwiZGF5XCIgXCJkYXlcIlxuXHRcdFwiaW1hZ2VcIiBcImltYWdlXCJcblx0XHRcImxvd2xhYmVsXCIgXCJsb3dcIlxuXHRcdFwiaGlnaGxhYmVsXCIgXCJoaWdoXCJcblx0XHRcImRlc2NyaXB0aW9uXCIgXCJkZXNjaXB0aW9uXCI7XG59XG5cbi5pbWFnZXMge1xuXHRqdXN0aWZ5LXNlbGY6IHN0cmV0Y2g7XG5cdGFsaWduLXNlbGY6IHN0cmV0Y2g7XG5cdG9iamVjdC1maXQ6IDEwMCU7XG5cdG1heC13aWR0aDogMTAwJTtcblx0bWF4LWhlaWdodDogMTAwJTtcblx0aGVpZ2h0OiAyMDBweDtcblx0Z3JpZC1hcmVhOiAyLzEvMy8zO1xufVxuI3N1bmltYWdlIHtcblx0Y29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuI2Nsb3VkaW1hZ2Uge1xuXHRjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG4jcmFpbmltYWdlIHtcblx0Y29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xufVxuI3Nub3dpbWFnZSB7XG5cdGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbn1cbiNzdG9ybWltYWdlIHtcblx0Y29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pO1xufVxuI2NsZWFyaW1hZ2Uge1xuXHRjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19ffSk7XG59XG4jcGFydGx5c3VuaW1hZ2Uge1xuXHRjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19ffSk7XG59XG4ud2VhdGhlcmxhYmVscyB7XG5cdGhlaWdodDogMTAwJTtcblx0d2lkdGg6IDEwMCU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGJhY2tncm91bmQtY29sb3I6IHBhcGF5YXdoaXA7XG5cdGZvbnQtc2l6ZTogMThweDtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRtYXJnaW46IGF1dG87XG59XG5cbiNkYXRlIHtcblx0Z3JpZC1hcmVhOiAxLzEvMi8zO1xufVxuI2NvbmRpdGlvbnMge1xuXHRncmlkLWFyZWE6IDUvMS82LzM7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI21heHRlbXBsYWJlbCB7XG5cdGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcblx0Z3JpZC1hcmVhOiAzLzEvNC8yO1xufVxuI21pbnRlbXBsYWJlbCB7XG5cdGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xuXHRncmlkLWFyZWE6IDQvMS81LzI7XG59XG4jbWF4dGVtcCB7XG5cdGhlaWdodDogMTAwJTtcblx0d2lkdGg6IDEwMCU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGJhY2tncm91bmQtY29sb3I6IHBhcGF5YXdoaXA7XG5cdGZvbnQtc2l6ZTogMThweDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGdyaWQtYXJlYTogMy8yLzQvMztcbn1cbiNtaW50ZW1wIHtcblx0aGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDogMTAwJTtcblx0ZGlzcGxheTogZmxleDtcblx0YmFja2dyb3VuZC1jb2xvcjogcGFwYXlhd2hpcDtcblx0Zm9udC1zaXplOiAxOHB4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z3JpZC1hcmVhOiA0LzIvNS8zO1xufVxuXG4uZ3JpZGVsZW1lbnQge1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHdpZHRoOiAxMDAlO1xuXHRtYXJnaW46IGF1dG87XG59XG5cbiNncmlkMTAwIHtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBDZW50ZXI7XG5cdGJhY2tncm91bmQtY29sb3I6IHJlZDtcblx0Z3JpZC1hcmVhOiBzcGFuO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsYUFBYTtDQUNiLFlBQVk7Q0FDWixXQUFXO0NBQ1gsYUFBYTtDQUNiLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLDBCQUEwQjtDQUMxQixZQUFZO0NBQ1osV0FBVztDQUNYLGFBQWE7Q0FDYixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsMEJBQTBCO0NBQzFCLG9DQUFvQztDQUNwQyxrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLDZCQUE2QjtDQUM3QixtQkFBbUI7Q0FDbkIsZUFBZTtDQUNmLDREQUE0RDtDQUM1RCwwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLFNBQVM7Q0FDVCw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLFdBQVc7Q0FDWCxzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsWUFBWTtDQUNaLGVBQWU7Q0FDZixZQUFZO0FBQ2I7QUFDQTtDQUNDLFlBQVk7Q0FDWixlQUFlO0NBQ2YsWUFBWTtBQUNiO0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLFlBQVk7QUFDYjtBQUNBO0NBQ0MsV0FBVztDQUNYLGFBQWE7Q0FDYiw2QkFBNkI7Q0FDN0IsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWix1Q0FBdUM7Q0FDdkMsOEJBQThCO0NBQzlCOzs7Ozs0QkFLMkI7QUFDNUI7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsbUJBQW1CO0NBQ25CLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLGdEQUFpQztBQUNsQztBQUNBO0NBQ0MsZ0RBQW1DO0FBQ3BDO0FBQ0E7Q0FDQyxnREFBa0M7QUFDbkM7QUFDQTtDQUNDLGdEQUFrQztBQUNuQztBQUNBO0NBQ0MsZ0RBQW1DO0FBQ3BDO0FBQ0E7Q0FDQyxnREFBbUM7QUFDcEM7QUFDQTtDQUNDLGdEQUF1QztBQUN4QztBQUNBO0NBQ0MsWUFBWTtDQUNaLFdBQVc7Q0FDWCxhQUFhO0NBQ2IsNEJBQTRCO0NBQzVCLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsMEJBQTBCO0NBQzFCLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsWUFBWTtBQUNiOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0Msd0JBQXdCO0NBQ3hCLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsZ0NBQWdDO0NBQ2hDLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsWUFBWTtDQUNaLFdBQVc7Q0FDWCxhQUFhO0NBQ2IsNEJBQTRCO0NBQzVCLGVBQWU7Q0FDZix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsWUFBWTtDQUNaLFdBQVc7Q0FDWCxhQUFhO0NBQ2IsNEJBQTRCO0NBQzVCLGVBQWU7Q0FDZix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixXQUFXO0NBQ1gsWUFBWTtBQUNiOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQix1QkFBdUI7Q0FDdkIscUJBQXFCO0NBQ3JCLGVBQWU7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0bWFyZ2luOiAwcHg7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxufVxcblxcbi5sZWZ0IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBzZWFzaGVsbDtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRncmlkLWFyZWE6IDEvMS8yLzI7XFxufVxcblxcbi5yaWdodCB7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCBkYXJrYmx1ZTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAxNzAsIDEyMSk7XFxuXFx0Z3JpZC1hcmVhOiAxLzIvMS8zO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDQ4cHg7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4jZm9yZWNhc3Qge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRnYXA6IDEwcHg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbmZvcm0ge1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2xvY2F0aW9uIHtcXG5cXHRoZWlnaHQ6IDQwcHg7XFxuXFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdHdpZHRoOiAyMDBweDtcXG59XFxuI3N0YXRlRHJvcGRvd24ge1xcblxcdGhlaWdodDogNDBweDtcXG5cXHRmb250LXNpemU6IDE4cHg7XFxuXFx0d2lkdGg6IDIwMHB4O1xcbn1cXG4jc3VibWl0IHtcXG5cXHRtYXJnaW4tdG9wOiAyNHB4O1xcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXHRoZWlnaHQ6IDgwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogOHB4O1xcblxcdGZvbnQtc2l6ZTogMjJweDtcXG5cXHR3aWR0aDogNDAwcHg7XFxufVxcbi5kYXlncmlkIHtcXG5cXHRoZWlnaHQ6IDgwJTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0d2lkdGg6IDIwMHB4O1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAxZnIgMWZyIDJmcjtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXG5cXHRcXHRcXFwiZGF5XFxcIiBcXFwiZGF5XFxcIlxcblxcdFxcdFxcXCJpbWFnZVxcXCIgXFxcImltYWdlXFxcIlxcblxcdFxcdFxcXCJsb3dsYWJlbFxcXCIgXFxcImxvd1xcXCJcXG5cXHRcXHRcXFwiaGlnaGxhYmVsXFxcIiBcXFwiaGlnaFxcXCJcXG5cXHRcXHRcXFwiZGVzY3JpcHRpb25cXFwiIFxcXCJkZXNjaXB0aW9uXFxcIjtcXG59XFxuXFxuLmltYWdlcyB7XFxuXFx0anVzdGlmeS1zZWxmOiBzdHJldGNoO1xcblxcdGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxuXFx0b2JqZWN0LWZpdDogMTAwJTtcXG5cXHRtYXgtd2lkdGg6IDEwMCU7XFxuXFx0bWF4LWhlaWdodDogMTAwJTtcXG5cXHRoZWlnaHQ6IDIwMHB4O1xcblxcdGdyaWQtYXJlYTogMi8xLzMvMztcXG59XFxuI3N1bmltYWdlIHtcXG5cXHRjb250ZW50OiB1cmwoXFxcIi4uL2ltYWdlcy9zdW4ucG5nXFxcIik7XFxufVxcbiNjbG91ZGltYWdlIHtcXG5cXHRjb250ZW50OiB1cmwoXFxcIi4uL2ltYWdlcy9jbG91ZC5zdmdcXFwiKTtcXG59XFxuI3JhaW5pbWFnZSB7XFxuXFx0Y29udGVudDogdXJsKFxcXCIuLi9pbWFnZXMvcmFpbi5zdmdcXFwiKTtcXG59XFxuI3Nub3dpbWFnZSB7XFxuXFx0Y29udGVudDogdXJsKFxcXCIuLi9pbWFnZXMvc25vdy5zdmdcXFwiKTtcXG59XFxuI3N0b3JtaW1hZ2Uge1xcblxcdGNvbnRlbnQ6IHVybChcXFwiLi4vaW1hZ2VzL3N0b3JtLnN2Z1xcXCIpO1xcbn1cXG4jY2xlYXJpbWFnZSB7XFxuXFx0Y29udGVudDogdXJsKFxcXCIuLi9pbWFnZXMvY2xlYXIucG5nXFxcIik7XFxufVxcbiNwYXJ0bHlzdW5pbWFnZSB7XFxuXFx0Y29udGVudDogdXJsKFxcXCIuLi9pbWFnZXMvcGFydGx5c3VuLnBuZ1xcXCIpO1xcbn1cXG4ud2VhdGhlcmxhYmVscyB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcGFwYXlhd2hpcDtcXG5cXHRmb250LXNpemU6IDE4cHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdG1hcmdpbjogYXV0bztcXG59XFxuXFxuI2RhdGUge1xcblxcdGdyaWQtYXJlYTogMS8xLzIvMztcXG59XFxuI2NvbmRpdGlvbnMge1xcblxcdGdyaWQtYXJlYTogNS8xLzYvMztcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jbWF4dGVtcGxhYmVsIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxuXFx0Z3JpZC1hcmVhOiAzLzEvNC8yO1xcbn1cXG4jbWludGVtcGxhYmVsIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXG5cXHRncmlkLWFyZWE6IDQvMS81LzI7XFxufVxcbiNtYXh0ZW1wIHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBwYXBheWF3aGlwO1xcblxcdGZvbnQtc2l6ZTogMThweDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdyaWQtYXJlYTogMy8yLzQvMztcXG59XFxuI21pbnRlbXAge1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHBhcGF5YXdoaXA7XFxuXFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z3JpZC1hcmVhOiA0LzIvNS8zO1xcbn1cXG5cXG4uZ3JpZGVsZW1lbnQge1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRtYXJnaW46IGF1dG87XFxufVxcblxcbiNncmlkMTAwIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBDZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xcblxcdGdyaWQtYXJlYTogc3BhbjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbi8vYWRkIHN0YXRlcyB0byBkcm9wZG93blxuXG5jb25zdCBzdGF0ZXMgPSBbXG5cdFwiQWxhYmFtYVwiLFxuXHRcIkFsYXNrYVwiLFxuXHRcIkFyaXpvbmFcIixcblx0XCJBcmthbnNhc1wiLFxuXHRcIkNhbGlmb3JuaWFcIixcblx0XCJDb2xvcmFkb1wiLFxuXHRcIkNvbm5lY3RpY3V0XCIsXG5cdFwiRGVsYXdhcmVcIixcblx0XCJGbG9yaWRhXCIsXG5cdFwiR2VvcmdpYVwiLFxuXHRcIkhhd2FpaVwiLFxuXHRcIklkYWhvXCIsXG5cdFwiSWxsaW5vaXNcIixcblx0XCJJbmRpYW5hXCIsXG5cdFwiSW93YVwiLFxuXHRcIkthbnNhc1wiLFxuXHRcIktlbnR1Y2t5XCIsXG5cdFwiTG91aXNpYW5hXCIsXG5cdFwiTWFpbmVcIixcblx0XCJNYXJ5bGFuZFwiLFxuXHRcIk1hc3NhY2h1c2V0dHNcIixcblx0XCJNaWNoaWdhblwiLFxuXHRcIk1pbm5lc290YVwiLFxuXHRcIk1pc3Npc3NpcHBpXCIsXG5cdFwiTWlzc291cmlcIixcblx0XCJNb250YW5hXCIsXG5cdFwiTmVicmFza2FcIixcblx0XCJOZXZhZGFcIixcblx0XCJOZXcgSGFtcHNoaXJlXCIsXG5cdFwiTmV3IEplcnNleVwiLFxuXHRcIk5ldyBNZXhpY29cIixcblx0XCJOZXcgWW9ya1wiLFxuXHRcIk5vcnRoIENhcm9saW5hXCIsXG5cdFwiTm9ydGggRGFrb3RhXCIsXG5cdFwiT2hpb1wiLFxuXHRcIk9rbGFob21hXCIsXG5cdFwiT3JlZ29uXCIsXG5cdFwiUGVubnN5bHZhbmlhXCIsXG5cdFwiUmhvZGUgSXNsYW5kXCIsXG5cdFwiU291dGggQ2Fyb2xpbmFcIixcblx0XCJTb3V0aCBEYWtvdGFcIixcblx0XCJUZW5uZXNzZWVcIixcblx0XCJUZXhhc1wiLFxuXHRcIlV0YWhcIixcblx0XCJWZXJtb250XCIsXG5cdFwiVmlyZ2luaWFcIixcblx0XCJXYXNoaW5ndG9uXCIsXG5cdFwiV2VzdCBWaXJnaW5pYVwiLFxuXHRcIldpc2NvbnNpblwiLFxuXHRcIld5b21pbmdcIixcbl07XG4vLyBzZXRzIHRoZSBzZWFyY2ggYnV0dG9uXG5jb25zdCBmb3JlY2FzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yZWNhc3RcIik7XG5jb25zdCBzZWFyY2hidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKTtcblxuLy9hZGRzIHRoZSBzdGF0ZXMgdG8gdGhlIGRyb3Bkb3duIG1lbnVcbmNvbnN0IGRyb3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXRlRHJvcGRvd25cIik7XG5mb3IgKGNvbnN0IHN0YXRlIG9mIHN0YXRlcykge1xuXHRsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblx0b3B0aW9uLnZhbHVlID0gc3RhdGU7XG5cdG9wdGlvbi50ZXh0ID0gc3RhdGU7XG5cdGRyb3AuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbn1cblxuLy90aGlzIHdpbGwgYmUgdGhlIGZ1bmN0aW9uIHRvIGNhbGwgdGhlIEFQSSBzZXJ2aWNlIGFuZCBnZXQgaW5mby5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIobG9jYXRpb24sIHRoZXN0YXRlKSB7XG5cdC8va2V5IGlzIFpWRkI0U1dTRFlWVVAyU05OQTVBWU1TN1cgKEFQSSBLZXkpXG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG5cdFx0YGh0dHBzOi8vd2VhdGhlci52aXN1YWxjcm9zc2luZy5jb20vVmlzdWFsQ3Jvc3NpbmdXZWJTZXJ2aWNlcy9yZXN0L3NlcnZpY2VzL3RpbWVsaW5lLyR7bG9jYXRpb259LCAke3RoZXN0YXRlfVVTP2tleT1aVkZCNFNXU0RZVlVQMlNOTkE1QVlNUzdXYCxcblx0XHR7IG1vZGU6IFwiY29yc1wiIH1cblx0KVxuXHRcdC8vdGFrZXMgdGhlIHJlc3BvbnNlIGZyb20gdGhlIGZldGNoIHJlcXVlc3QsIGFuZCB0aGVuIGFwcGxpZXMgdGhlIC5qc29uIGZvcm1hdCB0byBpdFxuXHRcdC8vdGhpcyByZXR1cm5zIHRoZSBqc29uaWZpZWQgZGF0YSwgd2hpY2ggaXMgbm93IHRoZSBcInJlc3BvbnNlXCJcblx0XHQvL3RoaXMgbmV3IHJlc3BvbnNlIGlzIHRoZW4gcGFzc2VkIHRvIHRoZSBtYWtlR3JpZGZ1bmN0aW9uLCB3aGljaCB0YWtlcyB0aGlzIHJlc3BvbnNlIGFzIGFuIGFyZ3VtZW50XG5cdFx0Ly90aGlzIHBhc3NlcyB0aGUgZGF0YSBpbnRvIG1ha2VHcmlkXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiBtYWtlR3JpZCg1LCByZXNwb25zZSkpO1xufVxuLy90aGlzIGdldHMgdGhlIHN0YXRlIHZhbHVlIGZyb20gZHJvcGRvd24gbWVudVxuZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XG5cdGxldCB0aGVTdGF0ZSA9IGRyb3AudmFsdWU7XG5cdHJldHVybiB0aGVTdGF0ZTtcbn1cblxuLy9ldmVudCBsaXN0ZW5lcnMgZ28gaGVyZVxuc2VhcmNoYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdGZvcmVjYXN0LmlubmVySFRNTCA9IFwiXCI7XG5cdGxldCBsb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb25cIik7XG5cdGxldCB0ZXN0ID0gbG9jYXRpb24udmFsdWU7XG5cdGxldCBzdGF0ZSA9IGdldFN0YXRlKCk7XG5cdC8vIHRoZSBpbmZvIGdldHMgcnVucyB0aGUgd2VhdGhlciwgd2hpY2ggcmV0dXJucyBhIHJlc3BvbnNlLiAgLlRIRU4gdXNlZCB0aGUgcmVzcG9uc2UsIGFuZCBkb2VzIHNvbWV0aGluZyB3aXRoXFxcblx0Z2V0V2VhdGhlcih0ZXN0LCBzdGF0ZSk7XG59KTtcblxuZnVuY3Rpb24gbWFrZWFuZEFzc2lnbihuYW1lLCBpZCwgd2VhdGhlcnZhciwgYXBwZW5kZWUpIHtcblx0bmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdG5hbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuXHRuYW1lLmlubmVySFRNTCA9IHdlYXRoZXJ2YXI7XG5cdGFwcGVuZGVlLmFwcGVuZChuYW1lKTtcbn1cblxuZnVuY3Rpb24gYXNzaWduTGFiZWwobmFtZTIsIGlkLCBjbGFzc2VzLCB0ZXh0LCBhcHBlbmRlZWxhYmVsKSB7XG5cdG5hbWUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0bmFtZTIuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuXHRuYW1lMi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBjbGFzc2VzKTtcblx0bmFtZTIuaW5uZXJIVE1MID0gdGV4dDtcblx0YXBwZW5kZWVsYWJlbC5hcHBlbmQobmFtZTIpO1xufVxuXG4vL3Rha2VzIGEgc3RyaW5nIGFuZCBjaGVja3MgZm9yIGEgc3BlY2lmaWMgd29yZC4gIFJldHVybnMgYSBzdHJpbmcgYmFzZWQgb24gdGhlIHdvcmQgZm91bmRcbmZ1bmN0aW9uIGFkZEltYWdlKHN0cmluZykge1xuXHRpZiAoc3RyaW5nLmluY2x1ZGVzKFwic3VuXCIpKSB7XG5cdFx0cmV0dXJuIFwic3VuaW1hZ2VcIjtcblx0fVxuXHRpZiAoc3RyaW5nLmluY2x1ZGVzKFwiY2xvdWR5XCIpKSB7XG5cdFx0cmV0dXJuIFwiY2xvdWRpbWFnZVwiO1xuXHR9XG5cdGlmIChzdHJpbmcuaW5jbHVkZXMoXCJzdG9ybVwiKSkge1xuXHRcdHJldHVybiBcInN0b3JtaW1hZ2VcIjtcblx0fVxuXHRpZiAoc3RyaW5nLmluY2x1ZGVzKFwicmFpblwiKSkge1xuXHRcdHJldHVybiBcInJhaW5pbWFnZVwiO1xuXHR9XG5cdGlmIChzdHJpbmcuaW5jbHVkZXMoXCJzbm93XCIpKSB7XG5cdFx0cmV0dXJuIFwic25vd2ltYWdlXCI7XG5cdH1cblx0aWYgKHN0cmluZy5pbmNsdWRlcyhcImNsZWFyXCIpKSB7XG5cdFx0cmV0dXJuIFwiY2xlYXJpbWFnZVwiO1xuXHR9XG5cdGlmIChzdHJpbmcuaW5jbHVkZXMoXCJQYXJ0aWFsbHlcIikpIHtcblx0XHRyZXR1cm4gXCJwYXJ0bHlzdW5pbWFnZVwiO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGdldERheShkYXRlVGltZSkge1xuXHRsZXQgdGhlZGF5ID0gZGF0ZVRpbWUuZ2V0RGF5KCk7XG5cdGNvbnNvbGUubG9nKHRoZWRheSk7XG59XG5cbmZ1bmN0aW9uIG1ha2VHcmlkKGFtb3VudCwgcmVzcG9uc2UpIHtcblx0Zm9yIChsZXQgeiA9IDA7IHogPCBhbW91bnQ7IHorKykge1xuXHRcdGxldCBkYXRlID0gcmVzcG9uc2UuZGF5c1t6XS5kYXRldGltZTtcblx0XHRsZXQgZGF5ID0gU3RyaW5nKG5ldyBEYXRlKGRhdGUpKS5zdWJzdHIoMCwgMTYpO1xuXHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblx0XHRsZXQgY29uZGl0aW9ucyA9IHJlc3BvbnNlLmRheXNbel0uY29uZGl0aW9ucztcblx0XHRsZXQgY29uZGl0aW9uY2hlY2sgPSBjb25kaXRpb25zLnRvTG93ZXJDYXNlKCk7XG5cdFx0bGV0IG1heFRlbXAgPSByZXNwb25zZS5kYXlzW3pdLnRlbXBtYXg7XG5cdFx0bGV0IGZlZWxzID0gcmVzcG9uc2UuZGF5c1t6XS5mZWVsc2xpa2U7XG5cdFx0bGV0IG1pblRlbXAgPSByZXNwb25zZS5kYXlzW3pdLnRlbXBtaW47XG5cdFx0bGV0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdGdyaWQuc2V0QXR0cmlidXRlKFwiaWRcIiwgYGdyaWQke2Ftb3VudH1gKTtcblx0XHRncmlkLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGF5Z3JpZFwiKTtcblx0XHRmb3JlY2FzdC5hcHBlbmQoZ3JpZCk7XG5cdFx0YXNzaWduTGFiZWwoXCJkYXRlXCIsIFwiZGF0ZVwiLCBcIndlYXRoZXJsYWJlbHNcIiwgZGF5LCBncmlkKTtcblx0XHRhc3NpZ25MYWJlbChcImNvbmRpdGlvbnNcIiwgXCJjb25kaXRpb25zXCIsIFwid2VhdGhlcmxhYmVsc1wiLCBjb25kaXRpb25zLCBncmlkKTtcblx0XHRhc3NpZ25MYWJlbChcImltYWdlXCIsIGFkZEltYWdlKGNvbmRpdGlvbmNoZWNrKSwgXCJpbWFnZXNcIiwgXCJcIiwgZ3JpZCk7XG5cdFx0bWFrZWFuZEFzc2lnbihcIm1heHRlbXBcIiwgXCJtYXh0ZW1wXCIsIG1heFRlbXAsIGdyaWQpO1xuXHRcdGFzc2lnbkxhYmVsKFwibWF4dGVtcGxhYmVsXCIsIFwibWF4dGVtcGxhYmVsXCIsIFwid2VhdGhlcmxhYmVsc1wiLCBcIkhJR0hcIiwgZ3JpZCk7XG5cdFx0bWFrZWFuZEFzc2lnbihcIm1pbnRlbXBcIiwgXCJtaW50ZW1wXCIsIG1pblRlbXAsIGdyaWQpO1xuXHRcdGFzc2lnbkxhYmVsKFwibWludGVtcGxhYmVsXCIsIFwibWludGVtcGxhYmVsXCIsIFwid2VhdGhlcmxhYmVsc1wiLCBcIkxPV1wiLCBncmlkKTtcblx0fVxuXHQvL29uY2UgdGhlIGdyaWQgaXMgYXBwZW5kZWQsIHlvdSBjYW4gZ3JhYiBlbGVtZW50cyBhbmQgYWRkIHRoZSBjb3JyZWN0IGluZm9ybWF0aW9uXG59XG5cbi8vYWRkcmVzcyB0ZWxscyB1cyB0aGUgbG9jYXRpb25cbi8vXCJodHRwczovL3dlYXRoZXIudmlzdWFsY3Jvc3NpbmcuY29tL1Zpc3VhbENyb3NzaW5nV2ViU2VydmljZXMvcmVzdC9zZXJ2aWNlcy90aW1lbGluZS9bbG9jYXRpb25dL1tkYXRlMV0vW2RhdGUyXT9rZXk9WlZGQjRTV1NEWVZVUDJTTk5BNUFZTVM3VyBcIlxuXG4vL1wiaHR0cHM6Ly93ZWF0aGVyLnZpc3VhbGNyb3NzaW5nLmNvbS9WaXN1YWxDcm9zc2luZ1dlYlNlcnZpY2VzL3Jlc3Qvc2VydmljZXMvdGltZWxpbmUvW2F1YnVybl0vW2RhdGUxXS9bZGF0ZTJdP2tleT1aVkZCNFNXU0RZVlVQMlNOTkE1QVlNUzdXIFwiXG5cbi8vIERhdGVzIHNob3VsZCBiZSBpbiB0aGUgZm9ybWF0IHl5eXktTU0tZGQuIEZvciBleGFtcGxlIDIwMjAtMTAtMTlcbi8vT25seSBvbmUgZGF0ZSBpcyBuZWVkZWQsIGJ1dCB5b3UgY2FuIHNlYXJjaCB0aHJvdWdoIHRoZSBzZWNvbmQgZGF0ZVxuXG4vL0V4YW1wbGUgb2YgZ2V0dGluZyB3ZWF0aGVyIGZvciBsb25kb24gZm9yIHRoZSBuZXh0IDE1IGRheXNcbi8vaHR0cHM6Ly93ZWF0aGVyLnZpc3VhbGNyb3NzaW5nLmNvbS9WaXN1YWxDcm9zc2luZ1dlYlNlcnZpY2VzL3Jlc3Qvc2VydmljZXMvdGltZWxpbmUvTG9uZG9uLFVLP2tleT1aVkZCNFNXU0RZVlVQMlNOTkE1QVlNUzdXJ1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9