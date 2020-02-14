const http = require('http')

const URL = require('url')

const ejs = require('ejs')

const fs = require('fs')


http.createServer( (req, res) => {

	let reqMethod = req.method // 获取请求方式： 	POST GET

	reqMethod = reqMethod.toLowerCase() //转成小写 post get

	let url = URL.parse(req.url).pathname

	res.writeHead(200, {"Content-Type": "text/html;charset='utf-8'"})

	if (url == '/login') {

		ejs.renderFile('./views/form.html', (err, data) => {

			if (err) {

				console.log(err)

				return;
			}

			res.end(data)
		})	

	} else if (url == '/todo' && reqMethod == 'get') { //get 请求

		let query = URL.parse(req.url,true).query
		res.end(JSON.stringify(query))

	} else if (url == '/todo' && reqMethod == 'post'){ //post 请求

		console.log(777)

		let postStr = '';

		// 监听 data 事件，回调返回的是 post 请求的参数
		
		req.on('data', (chunk) => {
			// console.log(chunk)  //chunk 是 buffer
			
			postStr = chunk.toString()
			
		})


		// 监听 end 事件，
		req.on('end', () => {

			// 将data写入文件
			fs.appendFile('form_data.txt', postStr+'\n', (err) => {
				if (err) {
					console.log(err)
					return
				}

				console.log('写入成功！')
			})

			res.end("<script>alert('success')</script>")
		})
	} 

}).listen(3000)