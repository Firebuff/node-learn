 function getType(fs, extname, eventEmitter) {


	// mime.json 里面包含了大量的文件类型，我们可以通过传入文件的后缀就可以获取对应的文件类型
	
	// readFile 是异步操作，无法在调用改函数的时候立即获取到返回的数据，所以要改用同步读取文件的函数 fs.readFileSync(path[, options])
	
	// 使用事件驱动来来处理这个问题，当文件读取完毕后触发一个事件，并且将文件数据传过去，同时接收这个事件广播，获取传过来的数据
	
	fs.readFile('mime.json', (err, data) => {

		if (err) {
			console.log(err)
			console.log('文件读取失败')
			return 
		} 

		let dataObj = JSON.parse(data.toString()) //将json字符串转成对象

		let returnData = dataObj[extname] || 'text/html'

		// 广播一个ready事件
		eventEmitter.emit('ready', returnData)
		
	})


}

module.exports = getType