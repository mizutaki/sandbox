'use strict'
// electronモジュールを読み込み
const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
  
// 新しいウィンドウ(Webページ)を生成
let mainWindow
function createWindow () {
  // BrowserWindowインスタンスを生成
  mainWindow = new BrowserWindow({width: 800, height: 600})
  // index.htmlを表示
  mainWindow.loadURL('file://' + __dirname + '/index.html')
  // デバッグするためのDevToolsを表示
  //mainWindow.webContents.openDevTools()
  // ウィンドウを閉じたら参照を破棄
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

// アプリの準備が整ったらウィンドウを表示
app.on('ready', createWindow)
  
// 全てのウィンドウを閉じたらアプリを終了
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})