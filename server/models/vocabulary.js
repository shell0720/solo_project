var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Vocabulary = new Schema({
  query: {type:String, required: true},
  translation: {type: String, required: true},
});

module.exports = mongoose.model('Vocabulary', Vocabulary);
