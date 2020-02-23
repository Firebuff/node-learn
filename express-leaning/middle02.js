/*
	express 给单个路由设置中间件
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



/*
	给单个路由设置中间件

	当请求是以 /login 开头时， 会先执行中间件，中间件处理完毕后，执行 next() 继续路由的处理

	/login/xxx/xxx 也会走这个中间件

 */

app.use('/login', function (req, res, next) {

	// 这可以做一些逻辑处理

	console.log('我是中间件，必须先执行我！')

	next()
})


app.get('/login', (req, res) => {

	res.send('login page')
})


