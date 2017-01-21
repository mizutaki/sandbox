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
/*
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
*/
