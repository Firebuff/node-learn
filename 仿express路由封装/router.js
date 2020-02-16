
const URL = require('url')

const server = function () {


	let all = this;


	all._get = {}

	all._post = {}


	let app = function (req, res) {

		let url = URL.parse(req.url).pathname // => /login


		let method = req.method.toLowerCase() // 获取请求方法 get post

		if (all['_'+ method][url]) { // 如果存在这个方法


			// 判断是哪个请求 post 还是 get
			

			if (method == 'post') {

				// 获取 post 请求传递过来的参数
				
				let data = null

				req.on('data', (chunk) => {

					data = chunk.toString()
				})

				req.on('end', () => {

					all['_'+ method][url]()
				})

			} else {

				// 获取 get 请求的数据
				
				let data = URL.parse(req.url, true).query

				all['_'+ method][url]()
			}

			

		}

	}
	
	


	return app;

}

server()