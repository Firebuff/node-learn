

const fs = require('fs'); // 引入fs模块



// 如果文件比较小可以用 fs.readFile 来读取文件， 如果文件非常大，建议使用读取流来读取文件



// 创建读取流，读取流是一块块读取的，
let readStream = fs.createReadStream('input.txt')

let str = '' // 保存读取的数据

let count = 0;


// 流是一块一块读取文件的，每读取完成一块就会广播一个 data 事件，将读取的内容从回调函数中返回
readStream.on('data', chunk => {

    str += chunk.toString()
    count++

})



// 文件读取完成后，会广播一个 end 的事件

readStream.on('end', () => {

    console.log(count)
    console.log(str)  //读取的次数
})



// 文件读取失败后，会广播一个error 的事件


readStream.on('error', err => {

    console.log(err)
})