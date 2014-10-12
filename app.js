var express    = require('express');
var app        = express();
var server     = require('http').createServer(app);
var sendgrid   = require('sendgrid')(process.env['SENDGRID_USERNAME'], process.env['SENDGRID_PASSWORD']);
var bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 3000))

app.listen(app.get('port'), function() {
  console.log('server running port: ' + app.get('port'));
});

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/public/index.html');
});

app.post('/', function(req, res) {
  var email = req.body.email;
  var message = req.body.message;

  sendgrid.send({
    to: email,
    from: 'mailer@nobudocs.me',
    subject: 'Your NobuDOC!',
    text: message
  }, function(err, json) {
    if (err) {
	res.status(500).end();
	return console.error(err);
	}
    console.log(json);
    res.end();
  });
});
