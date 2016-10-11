(function() {
  var mysql = require('mysql');
  var connection = function() {
    var conn = mysql.createConnection({
      host:'localhost',
      user:'root',
      password:'root',
      database:'test'
    });
    return conn;
  };

  //DB処理
  var showEventHandler = function() {
    connection().connect();
    connection().query('SELECT * FROM testTable;', function(err, rows, fileds) {
      if (err) throw err;
      if (rows.length > 0) {
        console.log(rows[0].message);
      } else {
        console.log('no');
      }
    });
    connection().end();
  };
  
  var addEventHandler = function() {
    var text = document.querySelector('#text').value;
    var sql = 'INSERT INTO test.testTable VALUES(?)';
    connection().connect();
    connection().query(sql, [text], function(err, result) {
      if (err) throw err;
      if (result.affectedRows > 0) console.log('success insert!');
    });
    connection().end();
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
      var insertSql = 'INSERT INTO test.rental VALUES(?)';
      connection().connect();
      connection().query(insertSql, [title], function(err, result) {
        if (err) throw err;
        if (result.affectedRows > 0) console.log('success insert!');
      });
      connection().end();
      var sql = "SELECT * FROM testTable WHERE message = ?";
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