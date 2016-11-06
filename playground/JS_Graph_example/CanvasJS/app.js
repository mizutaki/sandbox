var dataPlot = [
  { label: "リンゴ",   y: 10 },
  { label: "オレンジ", y: 15 },
  { label: "バナナ",   y: 25 },
  { label: "マンゴー", y: 30 },
  { label: "グレープ", y: 28 }
];
var chart = new CanvasJS.Chart("chartContainerCanvasJS", {
  //グラフ作成処理
  data:[{
    //グラフ種類
    type: 'column',
    //データ指定
    dataPoints: dataPlot
  }]
});
chart.render();