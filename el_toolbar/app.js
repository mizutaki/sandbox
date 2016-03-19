var app = require('app');
var Menu = require('menu');
var Tray = require('tray');

var appIcon = null;

app.on('ready', function() {
	//トレイを作る
	appIcon = new Tray('./icon.png');
    //コンテキストメニュー作成
	var contextMenu = Menu.buildFromTemplate([
    { label: '晴', type: 'radio' },
    { label: '曇り', type: 'radio' },
    { label: '雨', type: 'radio', checked: true },
    { type: 'separator' },
	//終了メニューにはclickイベントを登録
    { label: '終了', accelerator: 'Command+Q', 
      click: function() { app.quit(); }} 
  ]);
  appIcon.setContextMenu(contextMenu);
});

app.dock.hide();