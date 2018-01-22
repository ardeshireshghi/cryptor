'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sign;

var _crypto = require('crypto');

function sign(data, secret) {
  var algo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'sha256';

  var hmac = (0, _crypto.createHmac)(algo, secret);
  hmac.update(data);

  return hmac.digest('hex');
}