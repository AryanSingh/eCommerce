var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

// user schema

var UserSchema = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true},
  password: String,

  profile:{

  }
})








// hashing password









// comparing password
