/*
	express 如何使用 cookie

	我们可以安装使用 中间件 cookieParser 来使用cookie

	1. 安装 npm install cookie-parser -S

	2. 引入 const cookieParser = require('cookie-parser')

	3. 设置为中间件 app.use(cookieParser())

	4. 设置cookie
									
		res.cookie('name', 'xxx', {maxAge: 60000, httpOnly: true})

	5. 读取cookie: req.cookies.xxx

	注意： cookie保存在浏览器本地   如果没有过期的话关闭浏览器再打开cookie还是存在的

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



app.get('/books',(req, res) => {

	// 设置cookie
	
	res.cookie('name', '你好', {maxAge: 600000})

	res.send('cookie 设置成功')

})

app.get('/rice', (req, res) => {


	// 读取cookie
	let cookie = req.cookies

	console.log(cookie)

	res.send('获取到的cookie是 =>' + JSON.stringify(cookie))
})



app.get('/cookie', (req, res) => {
	res.render('cookie')
})


