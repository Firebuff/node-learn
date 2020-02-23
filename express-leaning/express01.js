/*
	express的简单实用
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