 

 function getType(fs, extname, callback) {

	// mime.json 里面包含了大量的文件类型，我们可以通过传入文件的后缀就可以获取对应的文件类型
	
	// readFile 是异步操作，无法在调用改函数的时候立即获取到返回的数据，所以要改用同步读取文件的函数 fs.readFileSync(path[, options])
	
	// 使用 回调函数 来处理这个问题，当文件读取完后，将文件数据传入到传过来的 回调函数中， 然后在调用这个函数的时候就可以拿到返回来的文件数据了
	
	fs.readFile('mime.json', (err, data) => {

		if (err) {
			console.log(err)
			console.log('文件读取失败')
			return 
		} 

		let dataObj = JSON.parse(data.toString()) //将json字符串转成对象

		let returnData = dataObj[extname] || 'text/html'

		// 调用回调函数
		callback(returnData)
		
		
	})


}

module.exports = getType