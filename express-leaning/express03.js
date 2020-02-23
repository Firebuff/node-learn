/*
	express 的 get 传值
 */


const express = require('express') //引包

let app = new express() //实例化



app.listen(4000,'127.0.0.1') //监听端口 和 设置服务器地址




//  路由配置

app.get('/',function(req,res) {

	res.send('hello, I am express, welcome!') // 给请求返回数据

})

app.get('/news', (req, res) => {

	res.send('news page')
})



// get 传值的获取

app.get('/login', (req, res) => {


	// 通过req.query 可以获取到 get 请求传递过来的值
	
	console.log(req.query)

	console.log(JSON.toString(req.query))

	res.send("当前 get 请求的传值是 =>" + JSON.stringify(req.query))

})