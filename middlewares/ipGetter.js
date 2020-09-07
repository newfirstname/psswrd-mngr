const Ip = require('../models/Ip');
var getIP = require('ipware')().get_ip;

const ipGetter = async function (req, res, next) {
  var ipInfo = getIP(req);

  console.log(ipInfo);

  await Ip.create({
    address: ipInfo.clientIp,
    routable: ipInfo.clientIpRoutable,
  });

  next();
};

module.exports = ipGetter;
