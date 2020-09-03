const mogoose = require('mongoose');

const UserSchema = new mogoose.Schema({
  username: String,
  password: String,
  email: String,
  final: {
    type: Boolean,
    default: false,
  },
});

module.exports = mogoose.model('UserName', UserSchema);
