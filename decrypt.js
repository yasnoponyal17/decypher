const { privateDecrypt } = require('crypto')
const fs = require('fs')

const privateKey = fs.readFileSync('private.pem')
const secret = fs.readFileSync('secret.bin')

const decrypted = privateDecrypt(privateKey, secret)

console.log('Результат:', decrypted.toString())