var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    username: String,
    address: String,
    contact: String,
    email: String
  });

  module.exports = mongoose.model('User', UserSchema);