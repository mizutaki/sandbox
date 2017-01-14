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

	class DragDrop {
	
	    constructor() {
	        console.log("constructor");
	    }
	
	    initialize() {
	        let ls = localStorage;
	        let counter = ls.getItem("elementCounter");
	        if (counter === null) {
	            ls.setItem("elementCounter", 0);
	        }
	    }
	
	    dragStart(e) {
	        console.log("dragStart");
	        this.style.opacity = '0.5';
	        e.dataTransfer.effectAllowed = 'move';
	        let originElement = {
	            "elementId": e.target.id,
	            "parentElementId": e.target.parentNode.id
	        }
	        let orgElementJSON = JSON.stringify(originElement);
	        e.dataTransfer.setData("text", orgElementJSON);
	    }
	    dragOver(e) {
	        console.log("dragOver");
	        if (e.preventDefault) {
	            e.preventDefault();
	        }
	        return false;
	    }
	
	    dragEnter(e) {
	        console.log("dragEnter");
	    }
	
	    dragLeave(e) {
	        console.log("dragLeave");
	    }
	
	    drop(e) {
	        let ls = localStorage;
	        if (e.stopPropagation) {
	            e.stopPropagation();
	        }
	        let targetElementJSON = e.dataTransfer.getData("text");
	        let targetObject = JSON.parse(targetElementJSON);
	        let moveElement = document.getElementById(targetObject.elementId);
	        if (e.target.id === moveElement.parentNode.id ||
	            e.target.nodeName === "TEXTAREA") {
	            moveElement.style.opacity = '1.0';
	            return; //同じ場所にドロップされたら何もしない
	        }
	        let item = {
	            "id": moveElement.id,
	            "parentNode": e.target.id,
	            "value": moveElement.value
	        }
	        let arr = [];
	        let children = ls.getItem(e.target.id);
	        if (children !== null) {
	            let c = JSON.parse(children);
	            arr = c;
	        }
	        arr.push(item);
	        ls.setItem(e.target.id, JSON.stringify(arr));
	        moveElement.style.opacity = '1.0';
	        e.target.appendChild(moveElement);
	        let childElementList = JSON.parse(ls.getItem(targetObject.parentElementId));
	        childElementList = childElementList.filter(function(v) {
	            return v.id != targetObject.elementId;
	        });
	        ls.setItem(targetObject.parentElementId, JSON.stringify(childElementList));
	    }
	
	    dragEnd(e) {
	        console.log("dragEnd");
	    }
	
	}
	export default DragDrop;


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGEzZTY2YjhiYzg2NGViNGE2OTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyYWdkcm9wLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJmaWxlIjoianMvZHJhZ2Ryb3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0YTNlNjZiOGJjODY0ZWI0YTY5NSIsImNsYXNzIERyYWdEcm9wIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNvbnN0cnVjdG9yXCIpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGxldCBscyA9IGxvY2FsU3RvcmFnZTtcbiAgICAgICAgbGV0IGNvdW50ZXIgPSBscy5nZXRJdGVtKFwiZWxlbWVudENvdW50ZXJcIik7XG4gICAgICAgIGlmIChjb3VudGVyID09PSBudWxsKSB7XG4gICAgICAgICAgICBscy5zZXRJdGVtKFwiZWxlbWVudENvdW50ZXJcIiwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkcmFnU3RhcnQoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImRyYWdTdGFydFwiKTtcbiAgICAgICAgdGhpcy5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XG4gICAgICAgIGUuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSc7XG4gICAgICAgIGxldCBvcmlnaW5FbGVtZW50ID0ge1xuICAgICAgICAgICAgXCJlbGVtZW50SWRcIjogZS50YXJnZXQuaWQsXG4gICAgICAgICAgICBcInBhcmVudEVsZW1lbnRJZFwiOiBlLnRhcmdldC5wYXJlbnROb2RlLmlkXG4gICAgICAgIH1cbiAgICAgICAgbGV0IG9yZ0VsZW1lbnRKU09OID0gSlNPTi5zdHJpbmdpZnkob3JpZ2luRWxlbWVudCk7XG4gICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0XCIsIG9yZ0VsZW1lbnRKU09OKTtcbiAgICB9XG4gICAgZHJhZ092ZXIoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImRyYWdPdmVyXCIpO1xuICAgICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBkcmFnRW50ZXIoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImRyYWdFbnRlclwiKTtcbiAgICB9XG5cbiAgICBkcmFnTGVhdmUoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImRyYWdMZWF2ZVwiKTtcbiAgICB9XG5cbiAgICBkcm9wKGUpIHtcbiAgICAgICAgbGV0IGxzID0gbG9jYWxTdG9yYWdlO1xuICAgICAgICBpZiAoZS5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRhcmdldEVsZW1lbnRKU09OID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHRcIik7XG4gICAgICAgIGxldCB0YXJnZXRPYmplY3QgPSBKU09OLnBhcnNlKHRhcmdldEVsZW1lbnRKU09OKTtcbiAgICAgICAgbGV0IG1vdmVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0T2JqZWN0LmVsZW1lbnRJZCk7XG4gICAgICAgIGlmIChlLnRhcmdldC5pZCA9PT0gbW92ZUVsZW1lbnQucGFyZW50Tm9kZS5pZCB8fFxuICAgICAgICAgICAgZS50YXJnZXQubm9kZU5hbWUgPT09IFwiVEVYVEFSRUFcIikge1xuICAgICAgICAgICAgbW92ZUVsZW1lbnQuc3R5bGUub3BhY2l0eSA9ICcxLjAnO1xuICAgICAgICAgICAgcmV0dXJuOyAvL+WQjOOBmOWgtOaJgOOBq+ODieODreODg+ODl+OBleOCjOOBn+OCieS9leOCguOBl+OBquOBhFxuICAgICAgICB9XG4gICAgICAgIGxldCBpdGVtID0ge1xuICAgICAgICAgICAgXCJpZFwiOiBtb3ZlRWxlbWVudC5pZCxcbiAgICAgICAgICAgIFwicGFyZW50Tm9kZVwiOiBlLnRhcmdldC5pZCxcbiAgICAgICAgICAgIFwidmFsdWVcIjogbW92ZUVsZW1lbnQudmFsdWVcbiAgICAgICAgfVxuICAgICAgICBsZXQgYXJyID0gW107XG4gICAgICAgIGxldCBjaGlsZHJlbiA9IGxzLmdldEl0ZW0oZS50YXJnZXQuaWQpO1xuICAgICAgICBpZiAoY2hpbGRyZW4gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGxldCBjID0gSlNPTi5wYXJzZShjaGlsZHJlbik7XG4gICAgICAgICAgICBhcnIgPSBjO1xuICAgICAgICB9XG4gICAgICAgIGFyci5wdXNoKGl0ZW0pO1xuICAgICAgICBscy5zZXRJdGVtKGUudGFyZ2V0LmlkLCBKU09OLnN0cmluZ2lmeShhcnIpKTtcbiAgICAgICAgbW92ZUVsZW1lbnQuc3R5bGUub3BhY2l0eSA9ICcxLjAnO1xuICAgICAgICBlLnRhcmdldC5hcHBlbmRDaGlsZChtb3ZlRWxlbWVudCk7XG4gICAgICAgIGxldCBjaGlsZEVsZW1lbnRMaXN0ID0gSlNPTi5wYXJzZShscy5nZXRJdGVtKHRhcmdldE9iamVjdC5wYXJlbnRFbGVtZW50SWQpKTtcbiAgICAgICAgY2hpbGRFbGVtZW50TGlzdCA9IGNoaWxkRWxlbWVudExpc3QuZmlsdGVyKGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgIHJldHVybiB2LmlkICE9IHRhcmdldE9iamVjdC5lbGVtZW50SWQ7XG4gICAgICAgIH0pO1xuICAgICAgICBscy5zZXRJdGVtKHRhcmdldE9iamVjdC5wYXJlbnRFbGVtZW50SWQsIEpTT04uc3RyaW5naWZ5KGNoaWxkRWxlbWVudExpc3QpKTtcbiAgICB9XG5cbiAgICBkcmFnRW5kKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJkcmFnRW5kXCIpO1xuICAgIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgRHJhZ0Ryb3A7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9kcmFnZHJvcC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9