'use strict';

let menubar = require('menubar')

const mb = menubar({ dir: __dirname , width: 440, height: 230, preloadWindow: true, windowPosition: 'topRight' })

mb.on('ready', function ready () {
  console.log('app is ready')
})
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