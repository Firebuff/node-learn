
/* 
    学习： 写入流向文件中写入数据
*/


const fs = require('fs')

let writeStream = fs.createWriteStream('output.txt'); 


let data = 'I am who I am';

writeStream.write(data, 'utf8');


//  标记写入完成

writeStream.end() // 如果不写end 标记完成不会触发 finish 事件



writeStream.on('finish', () => {
    console.log('写入完成')
})

writeStream.on('error', (err) => {

    console.log(err)
    console.log('写入失败')
})