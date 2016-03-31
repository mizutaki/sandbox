var Apiconf = require('./apiconf');
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

    var conf = new Apiconf();
    var bot = new twitter({
      consumer_key        : conf.consumer_key,
      consumer_secret     : conf.consumer_secret,
      access_token_key    : conf.access_token_key,
      access_token_secret : conf.access_token_secret
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