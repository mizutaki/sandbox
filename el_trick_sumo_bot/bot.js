var Apiconf = require('./apiconf');
var twitter = require('twitter');
var fs = require('fs');





var tweet = function() {
  var message;
  fs.readFile('./script/kimarite.data', 'utf8', function(err,text) {
    var arr  = text.split("\n");
    var message = arr[Math.floor(Math.random() * arr.length)];
    
    var conf = new Apiconf();
    var bot = new twitter({
      consumer_key        : conf.consumer_key,
      consumer_secret     : conf.consumer_secret,
      access_token_key    : conf.access_token_key,
      access_token_secret : conf.access_token_secret
    });

    bot.post('statuses/update', {status : message },  function(error, tweet, response){
      if(error) throw error;
      console.log(tweet);  // Tweet body.
      console.log(response);  // Raw response object.
    });
  });
}

tweet();