"use strict";

const electron = require("electron");

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = app.getAppPath();
console.log(path);

const spawn = require('child_process').spawn;
const ls = spawn('ruby', ['fuga.rb']);
ls.stdout.on('data', function(data) {
  console.log(data);
});
let mainWindow;

var createWindow = () => {
    mainWindow = new BrowserWindow({ width: 800, height: 600 });
    mainWindow.loadURL("file://" + __dirname + "/index.html");
    mainWindow.webContents.openDevTools();
    mainWindow.on("closed", () => mainWindow = null);
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});