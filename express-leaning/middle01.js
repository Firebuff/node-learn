/*
	express 中间件的使用
 */


const express = require('express') //引包

let app = new express() //实例化



app.listen(4000,'127.0.0.1') //监听端口 和 设置服务器地址


/*

	什么叫中间件？ 
	中间件： 就是匹配路由之前和匹配路由之后做的一系列的操作

	作用： 权限判断，没有登录 跳转到登录页面，登录以后就显示登录以后的页面

 */




// app.use 创建一个中间件，参数是一个回调函数， 回调函数里面有 3 个参数，
// next() 表示中间件处理后接着执行下面的操作

app.use(function (req, res, next) { // 所有路由的中间件，所有路由请求都要先经过这里处理
	console.log('hello')
	// 如果不执行 next()是不会继续后面的路由匹配的
	

	if (req.url == '/login') {
		res.send('无权限操作')
		return;
	}

	next()


})




//  路由配置

app.get('/',function(req,res) {

	res.send('hello, I am express, welcome!') // 给请求返回数据

})

app.get('/news', (req, res) => {

	res.send('news page')
})

app.get('/login', (req, res) => {

	res.send('login page')
})



// 还可以在 所有路由后面 设置中间件，当路由无法匹配到的时候， 会执行这个中间件，我们可以返回错误提示

app.use(function (req, res, next) {


	console.log(777)

	res.status(404).send('404, 无法处理该请求！')
})