(function() {
    function b() {
      console.log("b");
    }
    b();
    let dragElement = null;
    let ls = localStorage;

    function initialize() {
        let counter = ls.getItem("elementCounter");
        if (counter === null) {
            ls.setItem("elementCounter", 0);
        }
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
                let parent = obj.parentNode;
                let parentNode = document.getElementById(parent);
                parentNode.appendChild(textarea);
                addDragEvent();
            });
            console.log(data);
        });
    }
    initialize();

    function addDragEvent() {
        let cols = document.querySelectorAll('textarea');
        cols.forEach(function(col) {
            col.addEventListener('dragstart', dragStart, false);
            col.addEventListener('dragenter', dragEnter, false);
            col.addEventListener('dragleave', dragLeave, false);
            col.addEventListener('dragend', dragEnd, false);
        });
    }

    function dragStart(e) {
        console.log("dragStart");
        this.style.opacity = '0.5';
        dragElement = this;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData("text", e.target.id);
    }

    function dragOver(e) {
        console.log("dragOver");
        if (e.preventDefault) {
            e.preventDefault();
        }

        //e.dataTransfer.dropEffect = 'move';
        return false;
    }

    function dragEnter(e) {
        console.log("dragEnter");
    }

    function dragLeave(e) {
        console.log("dragLeave");
    }

    function drop(e) {
        console.log("drop");
        console.log(e);
        if (e.stopPropagation) {
            e.stopPropagation();
        }
        if (dragElement != this) {
            let moveElement = document.getElementById(e.dataTransfer.getData("text"));
            console.log(moveElement);
            let item = {
                "id": moveElement.id,
                "parentNode": e.target.id,
                "value": moveElement.value
            }
            let arr = [];
            let children = ls.getItem(e.target.id);
            if (children == !null) {
                let c = JSON.parse(children);
                arr = c;
            }
            arr.push(item);
            ls.setItem(e.target.id, JSON.stringify(arr));
            e.target.appendChild(moveElement);
        }
    }

    function dragEnd(e) {
        console.log("dragEnd");
    }

    let cols2 = document.querySelectorAll('.container > div');
    cols2.forEach(function(col) {
        col.addEventListener('drop', drop, false);
        col.addEventListener('dragover', dragOver, false);
    });

})()
function a() {
  console.log("a");
}
a();
