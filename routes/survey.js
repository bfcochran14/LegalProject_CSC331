var express = require('express');
var router = express.Router();

var surveytools = require('../models/surveytools');
var surveyData = surveytools.readJSONFile("../LegalProject_CSC331/models/surveyData.json")
/* GET survey page. */
router.get('/surveypage', function(req, res, next) {
	res.render('survey',
		{title: "Here is the survey"});
});

// router.post('/sendsurvey', record_data);
//
// function record_data(req, res, next) {
//
// 	console.log(req.body);
// 	//surveyData.push(req.body); // Add the user data to the users_data dataset
// 	surveytools.writeJSONFile(surveyData, "../LegalProject_CSC331/models/surveyData.json");
// 	console.log("surveyData:");
// 	console.log(surveyData);
//
//
// }

module.exports = router;
