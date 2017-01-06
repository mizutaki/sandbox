import DragDrop from './dragdrop.js';

(function() {
  let dragDrop = new DragDrop();

  let ls = localStorage;
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
      console.log(button.parentNode.id);
      let children = ls.getItem(button.parentNode.id);
      console.log(children);
      if (children !== null) {
          let c = JSON.parse(children);
          arr = c;
      }
      console.log(arr);
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
  console.log(buttons);
})();
