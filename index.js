const fs = require('fs')

const readTxt = fs.readFileSync(`C:/Users/99485/Documents/CGCS projects/node js/synchronous-and-asynchronous/index.txt`, `utf-8`)
console.log(readTxt)

const writeTxt = `${readTxt}.\nCreated on ${Date.now()}`

fs.writeFileSync(`C:/Users/99485/Documents/CGCS projects/node js/synchronous-and-asynchronous/index.txt`, writeTxt)
console.log('writing is done')