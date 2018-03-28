var express = require('express');
var router = express.Router();

var survey_data = require('../models/surveyData');
/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log("Survey data: ");
	console.log(survey_data);
	res.render('index',
		{title: "Contract Generator"});

});

module.exports = router;
