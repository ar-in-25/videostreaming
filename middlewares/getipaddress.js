const requestIp = require('request-ip');

// inside middleware handler
const ipMiddleware = function(req, res, next) {
    req.clientIpAddressFound = requestIp.getClientIp(req);
    // console.log(req.clientIpAddressFound)
    next();
};

module.exports = ipMiddleware