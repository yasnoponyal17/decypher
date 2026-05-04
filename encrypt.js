const { publicEncrypt } = require('crypto')
const fs = require('fs')

const publicKey = fs.readFileSync('public.pem')
const message = 'Привет, это тестовое сообщение!'

const encrypted = publicEncrypt(publicKey, Buffer.from(message))

fs.writeFileSync('secret.bin', encrypted)
console.log('Зашифровано!')