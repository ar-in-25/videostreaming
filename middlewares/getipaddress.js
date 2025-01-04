const requestIp = require('request-ip');

// inside middleware handler
const ipMiddleware = function(req, res, next) {
    req.clientIpAddressFound = requestIp.getClientIp(req);
    next();
};

module.exports = ipMiddleware