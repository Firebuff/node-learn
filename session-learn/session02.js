/*
	session 入库
 */


const express = require('express')


const expressSession = require('express-session')

// 引进connect-mongo
const MongoStore = require('connect-mongo')(expressSession)


const app = express()


// 将 expressSession 设置为中间件

app.use(expressSession({

	secret: 'I am session', // 可以随便写。 一个 String 类型的字符串，作为服务器端生成 session 的签名

	name: 'session_id', // 保存在本地cookie的一个名字 默认connect.sid  可以不设置

	resave: false, /*强制保存 session 即使它并没有变化,。默认为 true。建议设置成 false。*/

	saveUninitialized: true, //强制将未初始化的 session 存储。  默认值是true  建议设置成true

	cookie: {
		maxAge: 1000*60*30 // 
	},

	rolling: true,

	// session入库
	store: new MongoStore({

		url: 'mongodb://127.0.0.1:27017/user',
		touchAfter: 60*30 //多久更新一次会话（单位是秒）

	})
}))


app.get('/', (req, res) => {
	res.send('首页！')
})

app.get('/admin', (req, res) => {
	if (req.session.username) {
		res.send('你已登录，请操作')
	} else {
		res.send('你未登录，无权限操作！')
	}
})


app.get('/login', (req,res) => {
	req.session.username = 'robert'
	res.send('登录成功')
})

app.listen(4000, '127.0.0.1')