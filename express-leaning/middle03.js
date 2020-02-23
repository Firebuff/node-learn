/*
	express 第三方中间件
	
	我们可以使用 body-parser 中间件来获取 post 请求 传递过来的参数

 */


const express = require('express') //引包

let app = new express() //实例化



//  引进 body-parser

let bodyParser = require('body-parser')


app.listen(4000,'127.0.0.1') //监听端口 和 设置服务器地址


// 使用 ejs 模板引擎

app.set('view engine', 'ejs')




// 使用 body-parser

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())



//  路由配置

app.get('/',function(req,res) {

	res.send('hello, I am express, welcome!') // 给请求返回数据

})

app.get('/news', (req, res) => {

	res.send('news page')
})




app.get('/login', (req, res) => {

	res.render('login')
})


app.post('/dologin', (req, res) => {

	console.log(req.body) // 使用 body-parser 后可以通过 req.body 获取 post 请求传递过来的参数了

	res.send(JSON.stringify(req.body))
})

