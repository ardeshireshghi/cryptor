import { createCipher } from 'crypto';

export default function encrypt(data, password, algo = 'aes-256-cbc') {
  const cipher = createCipher(algo, password);
  const crypted = cipher.update(data, 'utf8', 'hex');
  return `${crypted}${cipher.final('hex')}`;
}
