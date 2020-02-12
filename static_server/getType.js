 function getType(fs,extname) {


	// mime.json 里面包含了大量的文件类型，我们可以通过传入文件的后缀就可以获取对应的文件类型
	
	// readFile 是异步操作，无法在调用改函数的时候立即获取到返回的数据，所以要改用同步读取文件的函数 fs.readFileSync(path[, options])
	
	/*fs.readFile('mime.json', (err, data) => {

		if (err) {
			console.log(err)
			return 
		} 

		let dataObj = JSON.parse(data.toString()) //将json字符串转成对象

		return dataObj[extname] || 'text/html'
		
	})*/




	let data = fs.readFileSync('mime.json')

	let dataObj = JSON.parse(data.toString()) //将json字符串转成对象

	return dataObj[extname] || 'text/html'
}

module.exports = getType