(function() {
  var input = document.querySelector('#add');
  input.addEventListener('click', function() {
    var text = document.querySelector('#number');
    drawGraph(text.value)
  });
})();

var xlables = [];
var xlableCount = 0;
var ydata = [];
function drawGraph(value) {
  xlables.push(xlableCount += 1);
  ydata.push(value);
  var dispayData = {
    labels: xlables,//X軸のラベル
    datasets: [{
      label: "My First dataset",//項目名
      fillColor: "rgba(220,220,220,0.2)",//塗りつぶす色
      strokeColor: "rgba(220,220,220,1)",//線の色
      pointColor: "rgba(220,220,220,1)",//値の点を塗りつぶす色
      pointStrokeColor: "#fff",//値の点の枠線の色
      pointHighlightFill: "#fff",//マウスオーバー時値の点を塗りつぶす色
      pointHighlightStroke: "rgba(220,220,220,1)",//マウスオーバー時値の点の枠線を塗りつぶす色
      data: ydata//値
    }]
  };
  var ctx = document.getElementById("containerChartJS").getContext("2d");
  var myNewChart = new Chart(ctx, {
    type: "line",
    data: dispayData
  });
}