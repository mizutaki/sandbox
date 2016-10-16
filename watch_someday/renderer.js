(function() {
  var mysql = require('mysql');
  var DB_NAME = 'watch_someday';
  var WS_CONTENT_TABLE = 'ws_content';
  var RENTAL_TABLE = 'rental';

  var connection = function() {
    var conn = mysql.createConnection({
      host:'localhost',
      user:'root',
      password:'root',
      database: DB_NAME
    });
    return conn;
  };

  //初期処理
  //var showEventHandler = function() {
  (function() {
    var showArea = document.querySelector('#showArea');
    showArea.innerHTML = '';
    connection().connect();
    var query = connection().query('SELECT * FROM '+ WS_CONTENT_TABLE, function(err, rows, fileds) {
      if (err) throw err;
      var ul = document.createElement('ul');
      if (rows.length > 0) {
        var length = rows.length;
        for (var i = 0; i < length; i++) {
          var li = document.createElement('li');
          li.innerText = rows[i].title;
          var button = document.createElement('input');
          button.type = 'button';
          button.value = 'delete';
          button.onclick = function() {//削除イベント定義
            var e = (window.event)? window.event : arguments.callee.caller.arguments[0];
            var self = e.target || e.srcElement;
            var deleteTarget = self.parentNode;
            //DB削除
            var query = connection().query('DELETE FROM ' + WS_CONTENT_TABLE + ' WHERE title=\'' + deleteTarget.innerText+ '\'', function(err) {
              if (err) throw err;
            });
            console.log(query.sql);
            //UI削除
            var deleteparent = deleteTarget.parentNode;
            deleteparent.removeChild(deleteTarget);
          }
          li.appendChild(button);
          ul.appendChild(li);
        }
        showArea.appendChild(ul);
      } else {
        var li = document.createElement('li');
        li.innerText = 'content not found.';
        ul.appendChild(li);
        showArea.appendChild(ul);
      }
    });
    connection().end();
    console.log(query.sql)
  })();
  
  var addEventHandler = function() {
    var text = document.querySelector('#text');
    var sql = 'INSERT INTO ' + WS_CONTENT_TABLE + ' VALUES(?)';
    connection().connect();
    var query = connection().query(sql, [text.value], function(err, result) {
      if (err) throw err;
      if (result.affectedRows > 0) console.log('success insert!');
    });
    connection().end();
    console.log(query.sql);
    text.value = '';
  };

  var confirmationEventHandler = function() {
    connection().connect();
    //外部プロセスの実行
    var spawn = require('child_process').spawn;
    var ls = spawn('ruby', ['scraping.rb']);
    ls.stdout.on('data', function(data) {
      var content = data.toString().split(':');
      var rentalStartDate = content[0];
      var title = content[1];
      connection().connect();
      var existSql = 'SELECT * FROM ' + RENTAL_TABLE + ' WHERE title = ?';
      connection().query(existSql, [title], function(err, rows, fileds) {
        if (rows.length == 0) {
          console.log('存在しない ' + title);
          var insertSql = 'INSERT INTO ' + RENTAL_TABLE + ' VALUES(?, ?)';
          connection().query(insertSql, [title, rentalStartDate], function(err, result) {
            if (err) throw err;
            if (result.affectedRows > 0) console.log('success insert!');
          });
        } else {
          console.log('既に存在する ' + title);
        }
      });
      connection().end();
      var sql = 'SELECT * FROM ' + WS_CONTENT_TABLE + ' WHERE title = ?';
      var query = connection().query(sql, [title], function(err, rows, fileds) {
         if (err) throw err;
         if (rows.length > 0) {
           var options = {
             body: rentalStartDate + '\n' + title,
             icon: ''
           }
           var notification = new Notification("レンタル開始通知", options);
         } else {
           console.log('no');
         }
      });
      console.log(query.sql)
    });
  };
  
  document.querySelector('#addButton').addEventListener('click', addEventHandler);
  document.querySelector('#confirmationButton').addEventListener('click', confirmationEventHandler);
}());