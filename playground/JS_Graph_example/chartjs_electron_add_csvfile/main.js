'use strict';

let menubar = require('menubar')

const mb = menubar({ dir: __dirname , width: 440, height: 230, preloadWindow: true, windowPosition: 'topRight' })

mb.on('ready', function ready () {
  console.log('app is ready')
})

let exec = require('child_process').exec;
let command = `wget -O nul -a wget.log -t 3 -T 20 http://www.asahi-net.or.jp/~yh8n-wke/image/speed_imagec1.jpg
wget -O nul -a wget.log -t 3 -T 20 http://bnr.on.arena.ne.jp/image/speed_imagec1.jpg
grep saved wget.log >> result.log
rm wget.log
rm nul`;
exec(command, (err, stdout, stderr) => {
  if (err) { console.log(err); }
  console.log(stdout);
});

/*
//開発者ツールの起動用
mb.on('after-create-window', function() {
  mb.window.openDevTools()
})

const fs = require('fs');
fs.appendFile('data.csv', '\n11/14, 80', 'utf-8', function(err) {
  if (err) throw err;
});
*/