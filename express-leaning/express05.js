/*
	express 配置静态资源目录
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




/*
	为什么要配置静态资源目录？
	
	比如说， 我在views 目录下的 news.ejs 文件中 引入了 css 目录下的 news.css 文件，

	<link rel="stylesheet" type="text/css" href="../css/news.css">

	当 res.render('news') 时候会将页面返回给 请求端， 页面同时也发出了一个请求:http://localhost:4000/css/news.css 

	来获取 news.css 文件，但是我们并没有处理这一个路由请求 /css/news.css， 因为获取不到 news.css 文件

	我们也不可能 一个个的去处理这些请求，这样太麻烦了

	express 为我们处理了这些请求


 */


// 配置静态目录，所有的静态资源 都放到根目录的public 文件夹下，当访问时候 http://localhost:4000/css/news.css ，会自动去 public  目录下查找
app.use(express.static('public')); // 还可以自行定义为其他的目录



app.listen(4000,'127.0.0.1') //监听端口 和 设置服务器地址



app.get('/news', (req,res) => {

	res.render('news')
})

