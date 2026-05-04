const { generateKeyPairSync } = require('crypto')
const fs = require('fs')

const { publicKey, privateKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem'
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem'
    }
})

// сохраняем в файлы
fs.writeFileSync('private.pem', privateKey)
fs.writeFileSync('public.pem', publicKey)

console.log('Ключи сгенерированы!')
console.log(privateKey)