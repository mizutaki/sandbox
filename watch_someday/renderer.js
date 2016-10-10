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
      var sql = "SELECT * FROM testTable WHERE message = ?";
      var d = data.toString().split(':')[1];
      var query = connection().query(sql, [d], function(err, rows, fileds) {
         if (err) throw err;
         if (rows.length > 0) {
           console.log(rows[0].message);
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