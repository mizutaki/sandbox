var app = require('app');
var Menu = require('menu');
var Tray = require('tray');
var notifier = require('node-notifier');
var appIcon = null;

app.on('ready', function() {
	//トレイを作る
	appIcon = new Tray('./stopwatch.png');
    //コンテキストメニュー作成
	var contextMenu = Menu.buildFromTemplate([
    { label: '10min', type: 'radio', click: function() { setStopWatch(10); } },
    { label: '30min', type: 'radio', click: function() { setStopWatch(30); }, checked: true },
    { label: '60min', type: 'radio', click: function() { setStopWatch(60); } },
    { type: 'separator' },
	//終了メニューにはclickイベントを登録
    { label: '終了', accelerator: 'Command+Q', 
      click: function() { app.quit(); }} 
  ]);
  appIcon.setContextMenu(contextMenu);
});
app.dock.hide();

var timmer = null;
var setStopWatch = function(setTime) {
    if (timmer != null) clearInterval(timmer);
    console.log('set timmer '+ setTime + 'min');
    var time = setTime * 100000;//100000millisecond   
    timmer = setInterval(notify, time);
};

//noification
var notify = function() {
    notifier.notify({
        title: 'Timmer',
        message: 'Now set time!',
    });
    clearInterval(timmer);
};