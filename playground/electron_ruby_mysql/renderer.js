(function() {
  var mysql = require('mysql');
  var DB_NAME = 'some_app';
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

  var confirmationEventHandler = function() {
    console.log('confirmationEventHandler');
    connection().connect();
    //外部プロセスの実行
    var spawn = require('child_process').spawn;
    var ls = spawn('ruby', ['./ruby_scraping/rental_shop_visit.rb']);
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
          var options = {
             body: rentalStartDate + '\n' + title,
             icon: ''
           }
           var notification = new Notification("レンタル開始通知", options);
        } else {
          console.log('既に存在する ' + title);
        }
      });
      connection().end();
    });
  };
  document.querySelector('#confirmationButton').addEventListener('click', confirmationEventHandler);
}());