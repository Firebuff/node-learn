/*
	用回调函数获取异步操作的返回值
 */

const fs = require('fs')


// fs.readFile 是异步操作

function getData () {
	fs.readFile('input.txt',(err,data) => {

		if (err) {
			console.log(err)
		} else {
			return data
		}
	})
}

let data = getData()

// 由于读取readFile是异步操作，执行打印的时候文件还没有读取出来，所以会打印undefined

console.log(data) // undefined











// 在调用包含有异步操作的函数时候，怎么样才能拿到返回值呢？ 可以使用回调函数


console.log(1)

function getData_01 (fn) {
	fs.readFile('input.txt',(err,data) => {

		if (err) {
			console.log(err)
		} else {

			fn(data)
		}
	})
}

getData_01(function(data){ // 传入一个回调函数
	console.log(data.toString())
})

console.log(3)


// 上面的打印顺序是 1 3 xxxx





