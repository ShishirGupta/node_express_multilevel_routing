var express = require('express');
var app = express();
var api = require('./api/api.js');
var http = require('http');
//var location = require('./api/location/location.js');


//app.use('/api/location', location);
app.get('/api*', api);

app.get('/', function(req, res){
	console.log('get /');
	res.end('successful get');
});

var server = http.createServer(app);
server.listen(12345);
