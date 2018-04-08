var express = require('express');
var router = express.Router();

// Require controller modules.
var doc_controller = require('../controllers/docController');
var customer_controller = require('../controllers/userController');


/// doc ROUTES ///

// GET catalog home page.
router.get('/list', doc_controller.index);

// GET request for creating a doc. NOTE This must come before routes that display doc (uses id).
router.get('/doc/create', doc_controller.doc_create_get);

// POST request for creating doc.
router.post('/doc/create', doc_controller.doc_create_post);

// GET request to delete doc.
router.get('/doc/:id/delete', doc_controller.doc_delete_get);

// POST request to delete doc.
router.post('/doc/:id/delete', doc_controller.doc_delete_post);

// GET request to update doc.
router.get('/doc/:id/update', doc_controller.doc_update_get);

// POST request to update doc.
router.post('/doc/:id/update', doc_controller.doc_update_post);

// GET request for one doc.
router.get('/doc/:id', doc_controller.doc_detail);

// GET request for list of all doc items.
router.get('/docs', doc_controller.doc_list);

/// customer ROUTES ///

// GET request for creating customer. NOTE This must come before route for id (i.e. display customer).
router.get('/customer/create', customer_controller.customer_create_get);

// POST request for creating customer.
router.post('/customer/create', customer_controller.customer_create_post);

// GET request to delete customer.
router.get('/customer/:id/delete', customer_controller.customer_delete_get);

// POST request to delete customer.
router.post('/customer/:id/delete', customer_controller.customer_delete_post);

// GET request to update customer.
router.get('/customer/:id/update', customer_controller.customer_update_get);

// POST request to update customer.
router.post('/customer/:id/update', customer_controller.customer_update_post);





module.exports = router;
