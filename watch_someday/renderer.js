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
      if (rows.lengh > 0) {
        console.log(lows[0].message);
      } else {
        console.log('なにもない');
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

  document.querySelector('#showButton').addEventListener('click', showEventHandler);
  document.querySelector('#addButton').addEventListener('click', addEventHandler);
}());