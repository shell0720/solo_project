var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Diary = new Schema({
  content: {type: String, required: true},
  title: {type: String, required: true},
  date: {type: Date, required: true},
  weather: {type: String, required: true},
});

module.exports = mongoose.model('Diary', Diary);
