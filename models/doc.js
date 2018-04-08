var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var docSchema = new Schema(
  {
    title: {type: String, required: true},
    customer: {type: Schema.ObjectId, ref: 'Customer', required: true}

  }
);

// Virtual for book's URL
docSchema
.virtual('url')
.get(function () {
  return '/catalog/doc/' + this._id;
});

//Export model
module.exports = mongoose.model('Doc', docSchema);
