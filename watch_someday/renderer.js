(function() {
  //DB処理
  var clickEventHandler = function() {
    var mysql = require('mysql');
    var connection = mysql.createConnection({
      host:'localhost',
      user:'root',
      password:'root',
      database:'test'
    });
    connection.connect();
    connection.query('SELECT * FROM testTable;', function(err, rows, fileds) {
      if (err) throw err;
      if (rows.lengh > 0) {
        console.log(lows[0].message);
      } else {
        console.log('なにもない');
      }
    });
  };
  document.querySelector('#showButton').addEventListener('click', clickEventHandler);
}());