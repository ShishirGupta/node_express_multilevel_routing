var express = require('express');
var router = express.Router();

router.get('/api/location/india', function(req, res, next){
	
	res.end('inside india.js!');
	//res.end();
	
});

module.exports = router;