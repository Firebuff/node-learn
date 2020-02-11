

const fs = require('fs')

let readStr = fs.createReadStream('input.txt');

let writeStr = fs.createWriteStream('output.txt')


// 通过管道 将input.txt的内容 写入到 output.txt中
readStr.pipe(writeStr)

console.log('end')

