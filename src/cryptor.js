import encrypt from './encrypt';
import sign from './sign';
import decrypt from './decrypt';
import verify from './verify';

export default class Cryptor {
  constructor(secretKey) {
    this.secretKey = secretKey;
  }

  encrypt(data) {
    const nonce = Date.now();
    const enc = encrypt(`${data}.${nonce}`, this.secretKey);
    const sig = sign(enc, this.secretKey);

    return `${enc}.${sig}`;
  }

  decrypt(cipher) {
    const PAYLOAD_INDEX = 0;
    const SIG_INDEX = 1;

    const cipherSplited = cipher.split('.');
    const payload = cipherSplited[PAYLOAD_INDEX];
    const sig = cipherSplited[SIG_INDEX];

    return new Promise((resolve, reject) => {
      if (!verify(payload, this.secretKey, sig)) {
        reject(new Error('Error verifying the signature, invalid!'));
        return;
      }

      resolve(decrypt(payload, this.secretKey).split('.')[0]);
    });
  }
}
