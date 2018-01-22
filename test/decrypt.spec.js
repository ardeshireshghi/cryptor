import { expect } from 'chai';

import encrypt from '../src/encrypt';
import decrypt from '../src/decrypt';

describe('decrypt', () => {
  it('should decrypt a cipher text and return the original data when key is correct', () => {
    const testData = 'This is a text to be encrypted';
    const password = 'S0meSecurePassword@£';

    const cipher = encrypt(testData, password);
    expect(decrypt(cipher, password)).to.eq(testData);
  });
});
