const bcrypt = require('bcrypt');
const saltRounds = 10;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    password: String
});

module.exports = mongoose.model('User', UserSchema);

