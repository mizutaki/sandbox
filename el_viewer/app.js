var container = document.getElementById('container');
container.innerHTML = "<h1>Hello, World</h1>";

var node = document.getElementById('node');
var electron = document.getElementById('electron');
node.innerHTML = process.version;
electron.innerHTML = process.versions['electron'];

var fs = require('fs');
var markdown = require('markdown').markdown;
var chokidar = require('chokidar');

//chokidarでREADEME.mdを監視
var watcher = chokidar.watch("./README.md");
watcher.on('app', updateHTML);
watcher.on('change', updateHTML);

//ファイルの変更があったらMarkdownをHTMLに変換して表示
function updateHTML(path, stats) {
	fs.readFile(path, 'utf-8', function(err, content) {
		container.innerHTML = markdown.toHTML(content);
	});
}