'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _encrypt2 = require('./encrypt');

var _encrypt3 = _interopRequireDefault(_encrypt2);

var _sign = require('./sign');

var _sign2 = _interopRequireDefault(_sign);

var _decrypt2 = require('./decrypt');

var _decrypt3 = _interopRequireDefault(_decrypt2);

var _verify = require('./verify');

var _verify2 = _interopRequireDefault(_verify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cryptor = function () {
  function Cryptor(secretKey) {
    _classCallCheck(this, Cryptor);

    this.secretKey = secretKey;
  }

  _createClass(Cryptor, [{
    key: 'encrypt',
    value: function encrypt(data) {
      var nonce = Date.now();
      var enc = (0, _encrypt3.default)(data + '.' + nonce, this.secretKey);
      var sig = (0, _sign2.default)(enc, this.secretKey);

      return enc + '.' + sig;
    }
  }, {
    key: 'decrypt',
    value: function decrypt(cipher) {
      var _this = this;

      var PAYLOAD_INDEX = 0;
      var SIG_INDEX = 1;

      var cipherSplited = cipher.split('.');
      var payload = cipherSplited[PAYLOAD_INDEX];
      var sig = cipherSplited[SIG_INDEX];

      return new Promise(function (resolve, reject) {
        if (!(0, _verify2.default)(payload, _this.secretKey, sig)) {
          reject(new Error('Error verifying the signature, invalid!'));
          return;
        }

        resolve((0, _decrypt3.default)(payload, _this.secretKey).split('.')[0]);
      });
    }
  }]);

  return Cryptor;
}();

exports.default = Cryptor;