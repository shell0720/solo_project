var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Movie = new Schema({
  query: {type:String, required: true},
  translation: {type: String, required: true},
});

module.exports = mongoose.model('Movie', Movie);
