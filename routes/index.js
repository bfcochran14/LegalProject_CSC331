var express = require('express');
var router = express.Router();

var survey_data = require('../models/surveyData');
/* GET users listing. */
router.get('/', function(req, res, next) {


	//res.redirect('/catalog');
	 res.render('index',
		{title: "Contract Generator"});

});

module.exports = router;
