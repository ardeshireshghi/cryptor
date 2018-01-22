'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = verify;

var _crypto = require('crypto');

function verify(payload, secret, signature) {
  var algo = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'sha256';

  var hmac = (0, _crypto.createHmac)(algo, secret);
  hmac.update(payload);

  return hmac.digest('hex') === signature;
}