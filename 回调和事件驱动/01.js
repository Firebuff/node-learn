/*
	异步非阻塞io, 也就是在读写文件的时候不会影响下面程序的执行
 */

const fs = require('fs')



console.log(1)


fs.readFile('input.txt',(err,data) => {

	console.log(2)
})


console.log(3)

// fs.readFile 是异步操作， 不会阻塞下面代码的执行，所以输出的顺序 是 1 3 2




