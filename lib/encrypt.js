'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = encrypt;

var _crypto = require('crypto');

function encrypt(data, password) {
  var algo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'aes-256-cbc';

  var cipher = (0, _crypto.createCipher)(algo, password);
  var crypted = cipher.update(data, 'utf8', 'hex');
  return '' + crypted + cipher.final('hex');
}