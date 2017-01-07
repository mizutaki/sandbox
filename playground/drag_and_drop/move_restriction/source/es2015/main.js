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
          let parent = obj.parentNode;
          let parentNode = document.getElementById(parent);
          parentNode.appendChild(textarea);
          addDragEvent();
      });
      console.log(data);
  });
})();
