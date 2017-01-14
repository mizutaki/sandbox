/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	import DragDrop from './dragdrop.js';
	let dragDrop = new DragDrop();
	
	let cols = document.querySelectorAll('.container > div');
	cols.forEach(function(col) {
	    col.addEventListener('drop', dragDrop.drop, false);
	    col.addEventListener('dragover', dragDrop.dragOver, false);
	});
	
	function addDragEvent() {
	    let cols = document.querySelectorAll('textarea');
	    cols.forEach(function(col) {
	        col.addEventListener('dragstart', dragDrop.dragStart, false);
	        col.addEventListener('dragenter', dragDrop.dragEnter, false);
	        col.addEventListener('dragleave', dragDrop.dragLeave, false);
	        col.addEventListener('dragend', dragDrop.dragEnd, false);
	    });
	}
	
	(function() {
	    let ls = localStorage;
	    Object.keys(ls).forEach(function(key) {
	        if ("elementCounter" === key) return;
	        let item = ls.getItem(key);
	        console.log(item);
	        let data = JSON.parse(item);
	        console.log(data);
	        data.forEach(function(obj) {
	            let textarea = document.createElement("textarea");
	            textarea.id = obj.id;
	            textarea.value = obj.value;
	            textarea.setAttribute("draggable", "true");
	            textarea.setAttribute("rows", "3");
	            let parent = obj.parentNode;
	            let parentNode = document.getElementById(parent);
	            parentNode.appendChild(textarea);
	            addDragEvent();
	        });
	        console.log(data);
	    });
	    let dragDrop = new DragDrop();
	    let buttons = document.querySelectorAll(".button");
	    buttons.forEach(function(button) {
	        button.addEventListener('click', function() {
	            var ls = localStorage;
	            let counter = ls.getItem("elementCounter");
	            if (counter === null) {
	                ls.setItem("elementCounter", 0);
	            }
	            ls.setItem("elementCounter", Number.parseInt(ls.getItem("elementCounter")) + 1);
	            let arr = [];
	            let children = ls.getItem(button.parentNode.id);
	            if (children !== null) {
	                let c = JSON.parse(children);
	                arr = c;
	            }
	            let item = {
	                "id": ls.getItem("elementCounter"),
	                "parentNode": button.parentNode.id,
	                "value": ""
	            }
	            arr.push(item);
	            ls.setItem(item.parentNode, JSON.stringify(arr));
	            let textarea = document.createElement("textarea");
	            textarea.id = item.id;
	            textarea.setAttribute("draggable", "true");
	            textarea.setAttribute("rows", "3");
	            textarea.className = "flex-item";
	            textarea.addEventListener("change", function(e) {
	                let parentElementId = e.target.parentElement.id;
	                let targetElementId = e.target.id;
	                let targetElementValue = e.target.value;
	                let childElementList = JSON.parse(ls.getItem(parentElementId));
	                childElementList = childElementList.filter(function(v) {
	                    if (v.id == targetElementId) {
	                        v.value = targetElementValue;
	                    }
	                    return v;
	                });
	                ls.setItem(parentElementId, JSON.stringify(childElementList));
	            });
	            let parentNode = button.parentNode;
	            parentNode.appendChild(textarea);
	            let cols = document.querySelectorAll('textarea');
	            cols.forEach(function(col) {
	                col.addEventListener('dragstart', dragDrop.dragStart, false);
	                col.addEventListener('dragenter', dragDrop.dragEnter, false);
	                col.addEventListener('dragleave', dragDrop.dragLeave, false);
	                col.addEventListener('dragend', dragDrop.dragEnd, false);
	            });
	        });
	    });
	})();


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGEzZTY2YjhiYzg2NGViNGE2OTU/NTljMCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiLFVBQVM7QUFDVCxNQUFLO0FBQ0wsRUFBQyIsImZpbGUiOiJqcy9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNGEzZTY2YjhiYzg2NGViNGE2OTUiLCJpbXBvcnQgRHJhZ0Ryb3AgZnJvbSAnLi9kcmFnZHJvcC5qcyc7XG5sZXQgZHJhZ0Ryb3AgPSBuZXcgRHJhZ0Ryb3AoKTtcblxubGV0IGNvbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGFpbmVyID4gZGl2Jyk7XG5jb2xzLmZvckVhY2goZnVuY3Rpb24oY29sKSB7XG4gICAgY29sLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcmFnRHJvcC5kcm9wLCBmYWxzZSk7XG4gICAgY29sLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZHJhZ0Ryb3AuZHJhZ092ZXIsIGZhbHNlKTtcbn0pO1xuXG5mdW5jdGlvbiBhZGREcmFnRXZlbnQoKSB7XG4gICAgbGV0IGNvbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0ZXh0YXJlYScpO1xuICAgIGNvbHMuZm9yRWFjaChmdW5jdGlvbihjb2wpIHtcbiAgICAgICAgY29sLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWdEcm9wLmRyYWdTdGFydCwgZmFsc2UpO1xuICAgICAgICBjb2wuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgZHJhZ0Ryb3AuZHJhZ0VudGVyLCBmYWxzZSk7XG4gICAgICAgIGNvbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBkcmFnRHJvcC5kcmFnTGVhdmUsIGZhbHNlKTtcbiAgICAgICAgY29sLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBkcmFnRHJvcC5kcmFnRW5kLCBmYWxzZSk7XG4gICAgfSk7XG59XG5cbihmdW5jdGlvbigpIHtcbiAgICBsZXQgbHMgPSBsb2NhbFN0b3JhZ2U7XG4gICAgT2JqZWN0LmtleXMobHMpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIGlmIChcImVsZW1lbnRDb3VudGVyXCIgPT09IGtleSkgcmV0dXJuO1xuICAgICAgICBsZXQgaXRlbSA9IGxzLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XG4gICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShpdGVtKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICAgIGxldCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgICAgICAgIHRleHRhcmVhLmlkID0gb2JqLmlkO1xuICAgICAgICAgICAgdGV4dGFyZWEudmFsdWUgPSBvYmoudmFsdWU7XG4gICAgICAgICAgICB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgXCJ0cnVlXCIpO1xuICAgICAgICAgICAgdGV4dGFyZWEuc2V0QXR0cmlidXRlKFwicm93c1wiLCBcIjNcIik7XG4gICAgICAgICAgICBsZXQgcGFyZW50ID0gb2JqLnBhcmVudE5vZGU7XG4gICAgICAgICAgICBsZXQgcGFyZW50Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmVudCk7XG4gICAgICAgICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKHRleHRhcmVhKTtcbiAgICAgICAgICAgIGFkZERyYWdFdmVudCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgfSk7XG4gICAgbGV0IGRyYWdEcm9wID0gbmV3IERyYWdEcm9wKCk7XG4gICAgbGV0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ1dHRvblwiKTtcbiAgICBidXR0b25zLmZvckVhY2goZnVuY3Rpb24oYnV0dG9uKSB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGxzID0gbG9jYWxTdG9yYWdlO1xuICAgICAgICAgICAgbGV0IGNvdW50ZXIgPSBscy5nZXRJdGVtKFwiZWxlbWVudENvdW50ZXJcIik7XG4gICAgICAgICAgICBpZiAoY291bnRlciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxzLnNldEl0ZW0oXCJlbGVtZW50Q291bnRlclwiLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxzLnNldEl0ZW0oXCJlbGVtZW50Q291bnRlclwiLCBOdW1iZXIucGFyc2VJbnQobHMuZ2V0SXRlbShcImVsZW1lbnRDb3VudGVyXCIpKSArIDEpO1xuICAgICAgICAgICAgbGV0IGFyciA9IFtdO1xuICAgICAgICAgICAgbGV0IGNoaWxkcmVuID0gbHMuZ2V0SXRlbShidXR0b24ucGFyZW50Tm9kZS5pZCk7XG4gICAgICAgICAgICBpZiAoY2hpbGRyZW4gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsZXQgYyA9IEpTT04ucGFyc2UoY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgIGFyciA9IGM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgaXRlbSA9IHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IGxzLmdldEl0ZW0oXCJlbGVtZW50Q291bnRlclwiKSxcbiAgICAgICAgICAgICAgICBcInBhcmVudE5vZGVcIjogYnV0dG9uLnBhcmVudE5vZGUuaWQsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIlwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcnIucHVzaChpdGVtKTtcbiAgICAgICAgICAgIGxzLnNldEl0ZW0oaXRlbS5wYXJlbnROb2RlLCBKU09OLnN0cmluZ2lmeShhcnIpKTtcbiAgICAgICAgICAgIGxldCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgICAgICAgIHRleHRhcmVhLmlkID0gaXRlbS5pZDtcbiAgICAgICAgICAgIHRleHRhcmVhLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCBcInRydWVcIik7XG4gICAgICAgICAgICB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoXCJyb3dzXCIsIFwiM1wiKTtcbiAgICAgICAgICAgIHRleHRhcmVhLmNsYXNzTmFtZSA9IFwiZmxleC1pdGVtXCI7XG4gICAgICAgICAgICB0ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGFyZW50RWxlbWVudElkID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5pZDtcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0RWxlbWVudElkID0gZS50YXJnZXQuaWQ7XG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldEVsZW1lbnRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgICAgIGxldCBjaGlsZEVsZW1lbnRMaXN0ID0gSlNPTi5wYXJzZShscy5nZXRJdGVtKHBhcmVudEVsZW1lbnRJZCkpO1xuICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudExpc3QgPSBjaGlsZEVsZW1lbnRMaXN0LmZpbHRlcihmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2LmlkID09IHRhcmdldEVsZW1lbnRJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdi52YWx1ZSA9IHRhcmdldEVsZW1lbnRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBscy5zZXRJdGVtKHBhcmVudEVsZW1lbnRJZCwgSlNPTi5zdHJpbmdpZnkoY2hpbGRFbGVtZW50TGlzdCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsZXQgcGFyZW50Tm9kZSA9IGJ1dHRvbi5wYXJlbnROb2RlO1xuICAgICAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0ZXh0YXJlYSk7XG4gICAgICAgICAgICBsZXQgY29scyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RleHRhcmVhJyk7XG4gICAgICAgICAgICBjb2xzLmZvckVhY2goZnVuY3Rpb24oY29sKSB7XG4gICAgICAgICAgICAgICAgY29sLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWdEcm9wLmRyYWdTdGFydCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNvbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBkcmFnRHJvcC5kcmFnRW50ZXIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjb2wuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgZHJhZ0Ryb3AuZHJhZ0xlYXZlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgY29sLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBkcmFnRHJvcC5kcmFnRW5kLCBmYWxzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KSgpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9