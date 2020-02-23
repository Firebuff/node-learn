/*
	express 使用 ejs 模板引擎
 */


const express = require('express') //引包

let app = new express() //实例化，也可以这样： let app = express()



/*
	使用 ejs 模板引擎, ejs安装后不需要引入，直接使用app.set('view engine', 'ejs')

	使用ejs渲染文件时，会默认到 views 目录下查找相关的 模板文件；

	当然，我们也可以 手动设置 这个查找的默认路径
	
	app.set('views', __dirname + '/views');

 */

app.set('view engine', 'ejs')


app.listen(4000,'127.0.0.1') //监听端口 和 设置服务器地址



//  路由配置

app.get('/',function(req,res) {

	res.send('hello, I am express, welcome!') // 给请求返回数据

})



// 使用模板引擎ejs 读取渲染文件后返回给请求端

app.get('/index', (req, res) => {

	let data = '我是ejs模板引擎渲染出来的 动态数据'

	let list = ['app','banana','pear','orange']
	
	// 会去 views 目录下查找 index.ejs文件， 如果将views 目录下的index.ejs 改为 idnex.html 则会报错
	res.render('index', {
		data: data,
		list: list
	}) 
})

