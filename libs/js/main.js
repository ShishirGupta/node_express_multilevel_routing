var express = require('express');
var app = express();
var api = require('./api/api.js');

app.get('/api*', api);

app.get('/', function(req, res){
	console.log('get /');
	res.end('successful get');
});

app.listen(12345);
