'use strict';

var menubar = require('menubar')

var mb = menubar({ dir: __dirname , width: 440, height: 230, icon: __dirname + '/Icon.png', preloadWindow: true, windowPosition: 'topRight' })

mb.on('ready', function ready () {
  console.log('app is ready')
})
//開発者ツールの起動用
mb.on('after-create-window', function() {
  mb.window.openDevTools()
})

//外部プロセスの実行
var spawn = require('child_process').spawn;
var ls = spawn('ruby', ['scraping.rb']);
ls.stdout.on('data', function(data) {
  console.log('stdout:' + data);
});

//DB処理
var mysql = require('mysql');
var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'root',
  database:'test'
});
connection.connect();
connection.query('SELECT * FROM tb1;', function(err, rows, fileds) {
  if (err) throw err;
  if (rows.lengh > 0) {
    console.log('データあります');
  } else {
    console.log('なにもない');
  }
});