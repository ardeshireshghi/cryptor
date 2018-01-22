# cryptor
A small crypto library for encrypt and signing data as well as decrypt and verification using HMAC SHA256 and AES 256 (cbc)

# Installation (For development)

```
npm install
```

## Run tests
```
npm test
```

# Usage

```
import createCryptor from './cryptorFactory';

const secret = 'MYS3cure@£S3cr3T';
const cryptor = createCryptor(secret);

const encryptedText = cryptor.encrypt('Some data to encrypt');
const decryptedText = cryptor.decrypt(enryptedText);
```

