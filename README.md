# Node.js-
Do it Node.js 책 참조

# Node.js 설치
https://nodejs.org/ko/  
Editor - VScode (브라켓도 많이 쓴다고 함)

Linux
```bash
$ sudo apt install nodejs
$ npm install node-rsa
```
# 설치 확인

cmd 창에  
node -v  
npm -v

## rsa-2048(고정키)예제
```bash
$ node rsa2048.js
```
reference  
https://github.com/rzcoder/node-rsa/blob/master/README.md  
http://paulaschmann.com/a-simplistic-node-js-implementation-of-rsa-encryption-decryption

```shell
Certificate Format

-----BEGIN RSA PRIVATE KEY-----
RSAPrivateKey ::= SEQUENCE {
  version           Version,
  modulus           INTEGER,  -- n
  publicExponent    INTEGER,  -- e
  privateExponent   INTEGER,  -- d
  prime1            INTEGER,  -- p
  prime2            INTEGER,  -- q
  exponent1         INTEGER,  -- d mod (p-1)
  exponent2         INTEGER,  -- d mod (q-1)
  coefficient       INTEGER,  -- (inverse of q) mod p
  otherPrimeInfos   OtherPrimeInfos OPTIONAL
}
-----END RSA PRIVATE KEY——

-----BEGIN RSA PUBLIC KEY-----
RSAPublicKey ::= SEQUENCE {
    modulus           INTEGER,  -- n
    publicExponent    INTEGER   -- e
}
-----END RSA PUBLIC KEY-----
```
