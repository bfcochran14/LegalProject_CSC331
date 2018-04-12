var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;


var surveyData = require('../models/surveyData');

var db;

//const url = 'mongodb://​makenzie:​admin​@ds237979.mlab.com:37979/ndadocument';
const url = 'mongodb://ben:admin@ds237979.mlab.com:37979/ndadocument';

MongoClient.connect(url, function(err, client){
	if (err) return console.log(err)
  	db = client.db('ndadocument') // whatever your database name is
})

/* GET survey page. */
router.get('/surveypage', function(req, res, next) {
	res.render('survey',
		{title: "Here is the survey"});
});

router.post('/sendsurvey', record_data);

function record_data(req, res, next) {
	console.log(req.body); // show in the console what the user entered
	console.log("post recieved")
	db.collection('nda').save(req.body, (err, result) => {
		console.log('inside collection function')
    	if (err) return console.log(err)
    	console.log('saved to database')

    	res.redirect('/doc/docpage')

    	res.redirect('/')

  	})
}
//FUCK OFF
module.exports = router;
