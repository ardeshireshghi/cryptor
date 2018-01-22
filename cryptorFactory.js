const Cryptor = require('./lib/cryptor').default;
module.exports = (secretKey) => new Cryptor(secretKey);
