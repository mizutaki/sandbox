/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DragDrop = function () {
	    function DragDrop() {
	        _classCallCheck(this, DragDrop);

	        console.log("constructor");
	    }

	    _createClass(DragDrop, [{
	        key: "initialize",
	        value: function initialize() {
	            var ls = localStorage;
	            var counter = ls.getItem("elementCounter");
	            if (counter === null) {
	                ls.setItem("elementCounter", 0);
	            }
	        }
	    }, {
	        key: "dragStart",
	        value: function dragStart(e) {
	            console.log("dragStart");
	            this.style.opacity = '0.5';
	            e.dataTransfer.effectAllowed = 'move';
	            var originElement = {
	                "elementId": e.target.id,
	                "parentElementId": e.target.parentNode.id
	            };
	            var orgElementJSON = JSON.stringify(originElement);
	            e.dataTransfer.setData("text", orgElementJSON);
	        }
	    }, {
	        key: "dragOver",
	        value: function dragOver(e) {
	            console.log("dragOver");
	            if (e.preventDefault) {
	                e.preventDefault();
	            }
	            return false;
	        }
	    }, {
	        key: "dragEnter",
	        value: function dragEnter(e) {
	            console.log("dragEnter");
	        }
	    }, {
	        key: "dragLeave",
	        value: function dragLeave(e) {
	            console.log("dragLeave");
	        }
	    }, {
	        key: "drop",
	        value: function drop(e) {
	            var ls = localStorage;
	            if (e.stopPropagation) {
	                e.stopPropagation();
	            }
	            var targetElementJSON = e.dataTransfer.getData("text");
	            var targetObject = JSON.parse(targetElementJSON);
	            var moveElement = document.getElementById(targetObject.elementId);
	            if (e.target.id === moveElement.parentNode.id || e.target.nodeName === "TEXTAREA") {
	                moveElement.style.opacity = '1.0';
	                return; //同じ場所にドロップされたら何もしない
	            }
	            var item = {
	                "id": moveElement.id,
	                "parentNode": e.target.id,
	                "value": moveElement.value
	            };
	            var arr = [];
	            var children = ls.getItem(e.target.id);
	            if (children !== null) {
	                var c = JSON.parse(children);
	                arr = c;
	            }
	            arr.push(item);
	            ls.setItem(e.target.id, JSON.stringify(arr));
	            moveElement.style.opacity = '1.0';
	            e.target.appendChild(moveElement);
	            var childElementList = JSON.parse(ls.getItem(targetObject.parentElementId));
	            childElementList = childElementList.filter(function (v) {
	                return v.id != targetObject.elementId;
	            });
	            ls.setItem(targetObject.parentElementId, JSON.stringify(childElementList));
	        }
	    }, {
	        key: "dragEnd",
	        value: function dragEnd(e) {
	            console.log("dragEnd");
	        }
	    }]);

	    return DragDrop;
	}();

	exports.default = DragDrop;

/***/ }
/******/ ]);