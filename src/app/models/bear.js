var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BearSchema = new Schema({
  name: String,
  age: Number,
  attack: String,
  color: String,
  favFood: String
});

module.exports = mongoose.model('Bear', BearSchema);
