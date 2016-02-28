var express = require('express');
var router = express.Router();
var india = require('./india/india.js')

router.get('/api/location/india', india);

router.get('/api/location', function(req, res, next){
	res.end('inside location.js!');
});

module.exports = router;