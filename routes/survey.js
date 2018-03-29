var express = require('express');
var router = express.Router();

var surveyData = require('../models/surveyData');

/* GET survey page. */
router.get('/surveypage', function(req, res, next) {
	res.render('survey',
		{title: "Here is the survey"});
});

router.post('/sendsurvey', record_data);

function record_data(req, res, next) {

	console.log(req.body);
	surveyData.push(req.body); // Add the user data to the users_data dataset
	res.redirect('/');	// reload the page
}
//FUCK OFF
module.exports = router;
