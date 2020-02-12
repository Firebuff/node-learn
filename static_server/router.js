const http = require('http');

const fs = require('fs')


const path = require('path')


const URL = require('url')



const router = function (req, res) {
	console.log(req.url)

	// 如果路径后面带有查询参数怎么办： /all.json?7900908713156496？ 使用url模块处理 可以得到 /all.json
	let url = URL.parse(req.url,true).pathname

	if (req.url != '/favicon.ico') {

		if (url == '/') {
			url = 'index.html'
		}
		
		fs.readFile('static/' + url, (err, data) => {
			if (err) {
				console.log(err)

				// 如果找不到文件返回404页面
				
				res.writeHead(200,{"Content-type": "text/html;charset='utf-8'"})

				fs.readFile('static/404.html', (err, data) => {
					res.write(data)
					res.end()
				})
				
			} else {

				let extName = path.extname(url) // 调用path 模块获取 路径的后缀名， 如 .html .css .js .png 等等。。。


	            let fileType = getType(extName) // 根据文件类型返回如 text/html 等等

	           
	            res.writeHead(200,{"Content-type": fileType + ";charset='utf-8'"})

	            res.write(data)
	            res.end() // 结束响应

				
			}
		})
	}
}

 function getType(extname) {


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




module.exports = router

