var Excel = require('exceljs');
//filename
var targetExcelPath = "テストファイル.xlsx";

var start = function() {
  //workbook
  var workbook = new Excel.Workbook();

  //workbookの設定
  workbook.creator = "me";
  workbook.lastModifiedBy = "Her";
  workbook.created = new Date(1985,8,30);
  workbook.modified = new Date();

  //シートの追加
  var sheet1 = workbook.addWorksheet("テスト１");
  var sheet2 = workbook.addWorksheet("テスト２");

  //セルに値を設定
  for (var i = 1; i <=10; i++) {
	  for (var j = 1; j <= 10; j++) {
	  	sheet1.getCell(i,j).value = "i = " + i + " j =" + j;
	  }
  }

  workbook.xlsx.writeFile(targetExcelPath).then(function() {
	  console.log("write ok!!");
  });
}