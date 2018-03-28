var express = require('express');
var router = express.Router();
// Load the data model
var usersModel = require('../models/usersModel');

//*************************************************//
// All of these routes are relative to /users      //
//*************************************************//

// GET to Add Character page
router.get('/addcharacter', index);

// POST data from 
router.post('/record', record_data);


//
// Functions responding to HTTP requests
//
function index(req, res, next) {
	// parameters for res.render(par1, par2)
	// par1 : a view in the views folder
	// par2 : data to be used when rendering the view
  res.render(
  	'users', 
  	{ title: 'Add Character', 
  	  users: usersModel
  	}
  	);
}

function record_data(req, res, next) {
	console.log(req.body); // show in the console what the user entered
	usersModel.push(req.body); // Add the user data to the users_data dataset
	res.redirect('/users/addcharacter');	// reload the page
}

// Export the router, required in app.js
module.exports = router;
