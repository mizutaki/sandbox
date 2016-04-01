var app = require('./app');
var twitter = require('twitter');
var fs = require('fs');
var mycron = require('cron').CronJob;

var job = new mycron({
  cronTime: '00 30 22 * * 0-6',
  onTick: function() {
    tweet();
  },
  start: false,
  timeSonze: 'Japan/Tokyo'
});

job.start();

var tweet = function() {
  var message;
  fs.readFile('./script/kimarite.data', 'utf8', function(err,text) {
    var arr  = text.split("\n");
    var trickName = arr[Math.floor(Math.random() * arr.length)];

    var bot = new twitter({
      consumer_key: app.get('options').key,
      consumer_secret: app.get('options').secret,
      access_token_key: app.get('options').token,
      access_token_secret: app.get('options').token_secret
    });

    var message = totsuzennoshiGenerator(trickName);
    bot.post('statuses/update', {status : message },  function(error, tweet, response){
      if(error) throw error;
      console.log(tweet);  // Tweet body.
      console.log(response);  // Raw response object.
    });
  });
}

var totsuzennoshiGenerator = function(message) {
  var length = message.length;
  var ret = "";
  ret += "＿";
  for (var i = 0; i < length + 1; i++) {
    ret +="人";
  }
  ret += "＿\n";
  ret += "＞ " + message + " ＜\n";
  ret += "￣";
  for (var j = 0; j < length + 1; j++) {
    j == (length) ?  ret += "Y" : ret += "Y^";
  }
  ret += "￣";
  return ret;
}