import { expect } from 'chai';

import sign from '../src/sign';
import verify from '../src/verify';

describe('verify', () => {
  it('should return a HMAC 256 signature of the data in hex format', () => {
    const testData = 'This is a text to be encrypted';
    const password = 'S0meSecurePassword@£';

    const signature = sign(testData, password);

    expect(verify(testData, password, signature)).to.equal(true);
  });
});
