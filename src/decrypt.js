import { createDecipher } from 'crypto';

export default function decrypt(cipherText, password, algo = 'aes-256-cbc') {
  const decipher = createDecipher(algo, password);
  const dec = decipher.update(cipherText, 'hex', 'utf8');
  return `${dec}${decipher.final('utf8')}`;
}
