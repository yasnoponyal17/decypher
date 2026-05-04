const express = require('express')
const multer = require('multer')
const fs = require('fs')
const { privateDecrypt } = require('crypto')

const upload = multer({ dest: 'uploads/' })

const app = express()

const uploadKeys = upload.fields([
    { name: 'key', maxCount: 1 },
    { name: 'secret', maxCount: 1 }
])

app.get('/login', function (req, res) {
    res.send('1155290')
})

app.post('/decypher', uploadKeys, function (req, res, next) {
    const keyFile = req.files['key'][0]
    const secretFile = req.files['secret'][0]

    const privateKey = fs.readFileSync(keyFile.path)
    const secret = fs.readFileSync(secretFile.path)

    const decrypted = privateDecrypt(privateKey, secret)


    res.send(decrypted.toString())
})

app.listen(3000, () => {
    console.log('Сервер запущен: http://localhost:3000')
})