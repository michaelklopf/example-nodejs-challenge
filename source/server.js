// server.js

// set up
var express         = require('express');
var http            = require('http');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');

// create and configure express app
var app = express();

app.use(bodyParser());
app.use(methodOverride());

app.use("/css" , express.static(__dirname + '/static/css'));
app.use("/js" , express.static(__dirname + '/static/js'));

app.set('views', __dirname + '/app/views');
app.engine('jade', require('jade').__express);
app.set('view engine', 'jade');
app.set('port', process.env.PORT || 9090);

// load routes
require('./app/routes.js')(app);

http.createServer(app).listen(app.get('port'), function() {
    console.log('Listening on port ' + app.get('port'));
});
