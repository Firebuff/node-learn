/*
	express的 动态路由
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


// 动态路由

app.get('/router/:aid',(req,res) => {

	/*
		/router/xxxx 都会匹配到这个路由，如：/router/1222， /router/name等

		/router/后面必须要紧接着其他的名字，不能为空

	 */
	

	// 获取动态路由的值: req.params
	
	console.log(req.params) // { aid: 'name' }, 键名和和上面的 /router/:aid 中的aid是一致的
	
	res.send('I am 动态路由哦  =>' + req.params.aid)
})