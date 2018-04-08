var doc = require('../models/doc');
var customer = require('../models/customer');

var async = require('async');

exports.index = function(req, res) {
  async.parallel({
      doc_count: function(callback) {
          doc.count({}, callback); // Pass an empty object as match condition to find all documents of this collection
      },
      customer_count: function(callback) {
          customer.count({}, callback);
      },
  }, function(err, results) {
      res.render('docIndex', { title: 'Documents', error: err, data: results });
  });
};
// Display list of all Authors.
exports.doc_list = function(req, res, next) {

doc.find({}, 'title customer')
  .populate('customer')
  .exec(function (err, list_doc) {
    if (err) { return next(err); }
    //Successful, so render
    res.render('doc_list', { title: 'Doc List', doc_list: list_doc });
  });

};

// Display detail page for a specific Author.
exports.doc_detail = function(req, res, next) {

    async.parallel({
        docs: function(callback) {

            doc.findById(req.params.id)
              .populate('author')
              .exec(callback);
        }

    }, function(err, results) {
        if (err) { return next(err); }
        if (results.doc==null) { // No results.
            var err = new Error('Doc not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render.
        res.render('doc_detail', { title: 'Title', book:  results.doc} );
    });

};

// Display Author create form on GET.
exports.doc_create_get =  function(req, res, next) {
	res.render('survey',
		{title: "Here is the survey"});
};

// Handle Author create on POST.
exports.doc_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Doc create POST');
};

// Display Author delete form on GET.
exports.doc_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Doc delete GET');
};

// Handle Author delete on POST.
exports.doc_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: doc delete POST');
};

// Display Author update form on GET.
exports.doc_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: doc update GET');
};

// Handle Author update on POST.
exports.doc_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Doc update POST');
};
