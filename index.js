var redirect = require('response-redirect');

function restifyPassport () {

  return function decorate (req, res, next) {
    res.redirect = redirect;
    next();
  }
  
}

module.exports = restifyPassport;

