var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CustomerSchema = new Schema(
  {
    first_name: {type: String, required: true, max: 100},
    family_name: {type: String, required: true, max: 100},
  }
);

// Virtual for author's full name
CustomerSchema
.virtual('name')
.get(function () {
  return this.family_name + ', ' + this.first_name;
});

// Virtual for author's URL
CustomerSchema
.virtual('url')
.get(function () {
  return '/catalog/customer/' + this._id;
});

//Export model
module.exports = mongoose.model('Customer', CustomerSchema);
