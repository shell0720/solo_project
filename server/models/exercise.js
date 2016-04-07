var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Exercise = new Schema({
  type: {type: String, required: true},
  time: {type: Date, required: true},
  duration: {type: String, required: true},
  mood: {type: String, required: true},
  author: {type: String, required: true},
});

module.exports = mongoose.model('Exercise', Exercise);
