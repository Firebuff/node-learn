/*
	express 如何使用 session

	什么是session?

	当用户登录成功后，服务端会生成一个键值对, 键 (session_id) 会写入到客户端的cookie中，保存在客户端，

	值保存在服务端； 客户端下次访问需要登录会员才能访问的内容时候，将cookie中保存的 键(session_id)

	传递给服务端，服务端根据这个 键 (session_id) 去查找对应的  值，如果查找到，则返回请求端要访问的内容，


	如果没有找到对应的 值，则不返回内容或者提示客户端无权限访问



	express 如何使用session？


	1. 安装 npm install express-session  --save

	2. 引入 let  session = require("express-session");

	3. 设置为中间件
		app.use(session({
		 	secret: 'keyboard cat',
		 	resave: false,
		 	saveUninitialized: true
		}))

	4. 使用

		设置值 req.session.username = "张三";

		获取值 req.session.username

 */


const express = require('express')

const expressSession = require('express-session')

const app = express()


// 设置为中间件

app.use(expressSession({

	secret: 'keyboard cat', //一个 String 类型的字符串，作为服务器端生成 session 的签名

	resave: false, // 强制保存 session 即使它并没有变化,。默认为 true。建议设置成 false

	// name: '', // 返回客户端的 key 的名称，默认为 connect.sid,也可以自己设置。
	

	/*
		强制将未初始化的 session 存储。当新建了一个 session 且未设定属性或值时，它就处于

		未初始化状态。在设定一个 cookie 前，这对于登陆验证，减轻服务端存储压力，权限控制是有帮助的
	 */
	saveUninitialized: true,


	//  设置返回到前端 key 的属性，默认值为{ path: ‘/’, httpOnly: true, secure: false, maxAge: null }。
	cookie: { 
		secure: false, // 设置为true的话，只有在https这样的情况才可以访问cookie
		maxAge: 5000000 // 过期时间
	},

	/*
		在每次请求时强行设置 cookie，这将重置 cookie 过期时间（默认：false）
	*/
	rolling: true, 
	
}))


app.listen(4000, '127.0.0.1')


app.get('/', (req, res) => {

	res.send(' hello, welcome!')

})

app.get('/login', (req, res) => {


	console.log('login')

	// 设置session
	
	req.session.username = 'robert'

	res.send(' 登录成功')
})


app.get('/manage', (req, res) => {

	console.log(1111)

	let sessionInfo = req.session.username

	// console.log(sessionInfo)

	if (!sessionInfo) {
		res.send('对不起，没有操作权限')
		return
	}

	res.send('这是后台管理页面')

})

