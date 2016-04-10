var fs = require('fs');
var server = require('http').createServer(function(req, res) {
  res.writeHead(200, {"Content-Type":"text/html"});
  var output = fs.readFileSync("./index.html", "utf-8");
  res.end(output);
}).listen(1234);
var io = require('socket.io').listen(server);
var userHash = {};
var cronJob = require('cron').CronJob;
var cronTime = "*/10 * * * * 0-6";

io.sockets.on('connection', function(socket) {
  //接続開始（他ユーザへ通知）
  socket.on('connected', function(name) {
    var msg = name + "が入室しました";
    userHash[socket.id] = name;
    io.sockets.emit('publish', {value:msg});
  });
  //メッセージ送信
  socket.on('publish', function(data) {
    io.sockets.emit('publish', {value:data.value});
  });
  //接続終了組み込みイベント
  socket.on('disconnect', function() {
    if(userHash[socket.id]) {
      var msg = userHash[socket.id] + "が提出しました";
      delete userHash[socket.id];
      io.sockets.emit('publish',{value:msg});
    }
  });
});

var job = new cronJob({
  cronTime: cronTime,

  onTick:function() {
    var deleteDate = new Date().toLocaleString().replace(/-/g,"\/");//クライアント側のフォーマットに変換する
    io.sockets.emit('delete', { value: deleteDate });
  },

  start:false,

  timeZone: "Japan/Tokyo"

})
job.start();