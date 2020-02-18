
const URL = require('url')


const changeRes = function (res) {
    res.send = function (data) {
        res.writeHead(200,{"content-Type": "text/html;charset='utf-8'"})
        res.end(data)
    }
}

const server = function () {


	let all = this;


	all._get = {}

	all._post = {}


	let app = function (req, res) {

        changeRes(res)

		let url = URL.parse(req.url).pathname + '/' // => /login/


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

                    req.body = data
					all['_'+ method][url](req, res)
				})

			} else {

				// 获取 get 请求的数据
				
				let data = URL.parse(req.url, true).query

                req.body = data

				all['_'+ method][url](req, res)
			}

		}

	}

    app.get = function (fname, callback) {
        if (!fname.endsWith('/')) {
            fname = fname + '/'
        }
        if (!fname.startsWith('/')) {
            fname = '/' + fname 
        }

        all._get[fname] = callback
    } 
    app.post = function (fname, callback) {
        if (!fname.endsWith('/')) {
            fname = fname + '/'
        }
        if (!fname.startsWith('/')) {
            fname = '/' + fname 
        }

        all._post[fname] = callback
    }

	return app;

}

module.exports = server()