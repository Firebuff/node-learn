/*
	express 指定路由 有访问 cookie 的权限

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
	

	// 设置 path 值时， 只有当访问该路由才能访问到cookie， 其他的路由访问不到cookie
	// res.cookie('name', 'hello, I am cookie!', {maxAge: 600000, path: '/read'}) 


	// 设置 httpOnly: true 意思就是只能在服务端 可以读取到cookie， 在浏览器是无法 用JavaScript 读取到的
	// res.cookie('name', 'hello, I am cookie!', {maxAge: 600000, httpOnly: true}) 
	
	res.cookie('name', 'hello, I am cookie!', {maxAge: 600000}) 

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


app.get('/html', (req, res) => {

	res.render('cookie') //渲染模板，模板里面有 用js读取cookie的脚本
})

