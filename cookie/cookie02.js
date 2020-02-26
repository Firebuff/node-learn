/*
	express 如何设置 cookie 的域名访问限制

 */





const express = require ('express')

const cookieParser = require('cookie-parser') //引入中间件


let app = express()


app.use(cookieParser()) // 设置中间件

app.set('view engine', 'ejs') // 模板引擎使用



app.listen(4000, '127.0.0.1')


app.get('/', (req, res) => {


	res.send('hello, welcome to this page!')
})



app.get('/set',(req, res) => {

	// 设置cookie
	

	/* 	参数1：名字
		参数2:cookie的值
		参数3：cookie的配置信息
	*/

	// 配置 domain参数后，cookie的信息可以在 .cookie.com 的子域名下访问，  
	// 如 news.cookie.com, books.cookie.com 等都可以访问到cookie的信息
	
	/*
		
		在 host 文件中如下设置

		127.0.0.1 books.cookie.com

		127.0.0.1 food.cookie.com

		127.0.0.1 books.hello.com

		127.0.0.1 books.what.com

		 

		1. 当访问 books.cookie.com/set 设置cookie 后，

			可以在 books.cookie.com/read, food.cookie.com/read 中读取到cookie，

			因为 books.cookie.com 和 food.cookie.com 都是 .cookie.com 的子域名

		2. 当访问 books.hello.com/read 和 books.what.com/read ，则无法读取到cookie
			
			因为 books.hello.com 和 books.what.com 都不是 .cookie.com 的子域名

	 */




	res.cookie('name', 'domain-cookie', {maxAge: 600000, domain: '.cookie.com'}) 

	res.send('cookie 设置成功')

})

app.get('/read', (req, res) => {


	// 读取cookie
	let cookie = req.cookies

	console.log(cookie)

	res.send('获取到的cookie是 =>' + JSON.stringify(cookie))
})



app.get('/cookie', (req, res) => {

	// 读取cookie
	let cookie = req.cookies

	console.log(cookie)

	res.send('获取到的cookie是 =>' + JSON.stringify(cookie))
	
})


