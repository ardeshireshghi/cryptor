import { expect } from 'chai';

const expectValidHex = hexText => expect(/^[0-9A-F]+$/i.test(hexText)).to.eq(true);

export default expectValidHex;
