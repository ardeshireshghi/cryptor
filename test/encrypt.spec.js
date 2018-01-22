import encrypt from '../src/encrypt';
import expectValidHex from './utils/expectValidHex';

describe('encrypt', () => {
  it('should return a cipher text in hex format based on the data and key', () => {
    const testData = 'This is a text to be encrypted';
    const password = 'S0meSecurePassword@£';

    const cipher = encrypt(testData, password);
    expectValidHex(cipher);
  });
});
