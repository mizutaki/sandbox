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
      textarea.addEventListener("change", function(e) {
        console.log(e);
        console.log(e.target.id);
        console.log(e.target.value);
        console.log(e.target.parentElement.id);
        let parentElementId = e.target.parentElement.id;
        let targetElementId = e.target.id;
        let targetElementValue = e.target.value;
        let childElementList = JSON.parse(ls.getItem(parentElementId));
        console.log("before");
        console.log(childElementList);
        childElementList  = childElementList.filter(function(v) {
          console.log(v);
            if (v.id == targetElementId) {
                v.value = targetElementValue;
            }
            return v;
        });
        console.log("after");
        console.log(childElementList);
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
  console.log(buttons);
})();
