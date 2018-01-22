import { createHmac } from 'crypto';

export default function sign(data, secret, algo = 'sha256') {
  const hmac = createHmac(algo, secret);
  hmac.update(data);

  return hmac.digest('hex');
}
