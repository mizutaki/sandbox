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