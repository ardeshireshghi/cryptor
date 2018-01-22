import { expect } from 'chai';

import Cryptor from '../src/cryptor';
import expectValidHex from './utils/expectValidHex';

describe('Cryptor', () => {
  describe('encrypt', () => {
    it('should encrypt payload and generate a cipher text with signature', () => {
      const password = 'S0meSecurePassword@£';
      const testData = 'This is a text to be encrypted';
      const cryptor = new Cryptor(password);

      const enc = cryptor.encrypt(testData);
      const payload = enc.split('.')[0];
      const sig = enc.split('.')[1];

      expectValidHex(payload);
      expectValidHex(sig);
    });
  });

  describe('decrypt', () => {
    it('should decrypt when signature is valid', async () => {
      const password = 'S0meSecurePassword@£';
      const testData = 'This is a text to be encrypted';
      const cryptor = new Cryptor(password);

      const enc = cryptor.encrypt(testData);
      const dec = await cryptor.decrypt(enc);

      expect(dec).to.equal(testData);
    });
  });
});
