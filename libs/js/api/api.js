var express = require('express');
var router = express.Router();
var location = require('./location/location.js');

router.get('/api/location*', location);

router.get('/api', function(req, res, next){
	res.end('Inside api.js!');
});

module.exports = router;
