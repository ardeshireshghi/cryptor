'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = decrypt;

var _crypto = require('crypto');

function decrypt(cipherText, password) {
  var algo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'aes-256-cbc';

  var decipher = (0, _crypto.createDecipher)(algo, password);
  var dec = decipher.update(cipherText, 'hex', 'utf8');
  return '' + dec + decipher.final('utf8');
}