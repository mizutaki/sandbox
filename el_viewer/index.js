//Electronモジュールのダウンロード
var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow = null;

//Windowが全て閉じた時の挙動定義
app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  //ブラウザウインドウを作る
  mainWindow = new BrowserWindow({width:800,height:600});
  //index.jsと同じディレクトリにあるindex.htmlを読み込む
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});