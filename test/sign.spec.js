import { expect } from 'chai';

import sign from '../src/sign';
import expectValidHex from './utils/expectValidHex';

describe('sign', () => {
  it('should return a HMAC 256 signature of the data in hex format', () => {
    const testData = 'This is a text to be encrypted';
    const password = 'S0meSecurePassword@£';

    const signature = sign(testData, password);
    expectValidHex(signature);
  });
});
