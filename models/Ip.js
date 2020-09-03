const mogoose = require('mongoose');

const IpSchema = new mogoose.Schema({
  address: String,
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mogoose.model('Ip', IpSchema);
