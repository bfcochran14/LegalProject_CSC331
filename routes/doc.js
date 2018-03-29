var express = require('express');
var router = express.Router();

var surveyData = require('../models/surveyData');

/* GET survey page. */
router.get('/docpage', function(req, res, next) {
	res.render('doc',
		{title: "Your document"});
});

// router.post('/senddoc', record_data);
//
// function record_data(req, res, next) {
//
// 	console.log(req.body);
// 	surveyData.push(req.body); // Add the user data to the users_data dataset
// 	res.redirect('/');	// reload the page
// }

module.exports = router;
