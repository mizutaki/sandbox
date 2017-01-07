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
        console.log(e);
        let ls = localStorage;
        if (e.stopPropagation) {
            e.stopPropagation();
        }
        let targetElementJSON = e.dataTransfer.getData("text");
        let targetObject = JSON.parse(targetElementJSON);
        let moveElement = document.getElementById(targetObject.elementId);
        if (e.target.id === moveElement.parentNode.id) return;//同じ場所にドロップされたら何もしない
        let item = {
            "id": moveElement.id,
            "parentNode": e.target.id,
            "value": moveElement.value
        }
        console.log(item);
        let arr = [];
        let children = ls.getItem(e.target.id);
        console.log(children);
        if (children !== null) {
            let c = JSON.parse(children);
            arr = c;
            console.log(arr);
        }
        console.log(arr);
        arr.push(item);
        ls.setItem(e.target.id, JSON.stringify(arr));
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
