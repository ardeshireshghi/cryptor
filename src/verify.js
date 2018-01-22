import { createHmac } from 'crypto';

export default function verify(payload, secret, signature, algo = 'sha256') {
  const hmac = createHmac(algo, secret);
  hmac.update(payload);

  return hmac.digest('hex') === signature;
}
