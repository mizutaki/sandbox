(function() {
  let dragElement = null;
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
  if (e.stopPropagation) {
    e.stopPropagation();
  }
  if (dragElement != this) {
    let moveElement = document.getElementById(e.dataTransfer.getData("text"));
    e.target.appendChild(moveElement);
  }
}
  function dragEnd(e) {
    console.log("dragEnd");
}


  let cols = document.querySelectorAll('textarea');
    cols.forEach(function(col) {
    col.addEventListener('dragstart', dragStart, false);
    col.addEventListener('dragenter', dragEnter, false);
    //col.addEventListener('dragover', dragOver, false);
    col.addEventListener('dragleave', dragLeave, false);
    col.addEventListener('drop', drop, false);
    col.addEventListener('dragend', dragEnd, false);
  });
  let cols2 = document.querySelectorAll('.container > div');
  cols2.forEach(function(col) {
    col.addEventListener('drop', drop, false);
    col.addEventListener('dragover', dragOver, false);
  });

})()
