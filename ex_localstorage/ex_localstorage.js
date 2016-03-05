window.onload = function() {
  if (!localStorage) {
    console.log("NG");
  }else{
    console.log("ok");
  }
}

function save() {
   localStorage.setItem("test", "localStorage data");
}
function get() {
   console.log(localStorage.getItem("test"));
}