var express = require('express');
var app = express();

var options = {
  key: process.env.TWITTER_KEY,
  secret: process.env.TWITTER_SECRET,
  token: process.env.TWITTER_TOKEN,
  token_secret: process.env.TWITTER_TOKEN_SECRET
};

app.set('options', options);

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.get('/', function(request, response) {
  response.send('This is Twitter bot app');
});

app.listen(app.get('port'), function() {
  console.log("running at localhost: * app.get(''port)");
});

module.exports = app;