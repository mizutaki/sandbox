(function() {
  const fileInput = document.querySelector('#file');
  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const csvArray = e.target.result.split('\n');
      drawGrapthArray(csvArray);
    };
    reader.readAsText(file);
  });
})();

function drawGrapthArray(csvArray) {
  const xlables = [];
  const ydata = [];
  for(let i = 0; i < csvArray.length; i++) {
    const tmp = csvArray[i].split(',');
    xlables.push(tmp[0]);
    ydata.push(tmp[1]);
  }
  const dispayData = {
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
  const ctx = document.getElementById("containerChartJS").getContext("2d");
  const myNewChart = new Chart(ctx, {
    type: "line",
    data: dispayData
  });
}