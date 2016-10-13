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

  //DB処理
  var showEventHandler = function() {
    connection().connect();
    var query = connection().query('SELECT * FROM '+ WS_CONTENT_TABLE, function(err, rows, fileds) {
      if (err) throw err;
      if (rows.length > 0) {
        var length = rows.length;
        for (var i = 0; i < length; i++) {
          console.log(rows[i].title);
        }
      } else {
        console.log('no');
      }
    });
    connection().end();
    console.log(query.sql)
  };
  
  var addEventHandler = function() {
    var text = document.querySelector('#text').value;
    var sql = 'INSERT INTO ' + WS_CONTENT_TABLE + ' VALUES(?)';
    connection().connect();
    var query = connection().query(sql, [text], function(err, result) {
      if (err) throw err;
      if (result.affectedRows > 0) console.log('success insert!');
    });
    connection().end();
    console.log(query.sql);
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
      var insertSql = 'INSERT INTO ' + RENTAL_TABLE + ' VALUES(?, ?)';
      connection().connect();
      connection().query(insertSql, [title, rentalStartDate], function(err, result) {
        if (err) throw err;
        if (result.affectedRows > 0) console.log('success insert!');
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

  document.querySelector('#showButton').addEventListener('click', showEventHandler);
  document.querySelector('#addButton').addEventListener('click', addEventHandler);
  document.querySelector('#confirmationButton').addEventListener('click', confirmationEventHandler);
}());