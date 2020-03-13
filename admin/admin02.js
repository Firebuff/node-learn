const express = require('express')

const bodyParser = require('body-parser') // 引入body-parser 处理post 请求传递过来的数据


const md5 = require('md5'); //  引入加密模块


const expressSession = require('express-session')

const MongoStore = require('connect-mongo')(expressSession)


const app = express()

const DB = require('./db/db.js')


app.set('view engine', 'ejs') //设置模板引擎, 不用require 引入，可以直接设置

app.use(expressSession({
    secret: "I am session",
    name: 'session_id',
    resave: false,
    saveUninitialized: true, 
    cookie: {
        maxAge: 1000*60*30 // 30分钟失效
    },
    rolling: true,
    store: new MongoStore({
        url: 'mongodb://127.0.0.1:27017/student',
        touchAfter: 60*30 // 多久更新一次会话（单位是秒）
    })

}))



// 使用 body-parser，如果表单使用了 enctype="multipart/form-data"，body-parser是无法处理的，自然也无法获取到post请求参数
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// 设置静态目录
app.use(express.static('public'))



app.listen(4000,'127.0.0.1')


/*app.use((req, res, next) => {

    let path = req.path

    let routers = ['/admin','/list', '/add']

    // 判断请求的路由是否在 需要登录才能访问的路由数组当中
    let isNeedLogin = routers.some((item) => {
        return path == item
    })

    // 如果该路由需要登录才能访问，则去判断用户是否已经登录，已经登录则放行，未登录则跳转到login页面
    if (isNeedLogin) {
        
        if (req.session.username) {
            next()
        } else {
            res.redirect('/login')
        }
    } else if(path == '/login') {
        if (req.session.username) {
           res.redirect('/admin')
        } else {
           next()
        }
    } else {
        next()
    }

})*/


app.get('/login', (req,res) => {

    res.render('login')

})


app.post('/dologin', (req, res) => {

    /*
        登录步骤： 

        1. 获取请求参数，即前台 传递过来的 用户名 和 密码

        2. 把传递过来的 用户名和密码 查询数据库， 看是数据库中否存在这个用户

        3. 登录成功后， session 入库，写入 cookie，作为其他页面操作的通行凭证，跳转到用户想访问的页面


     */
    

    let username = req.body.username;

    let password = req.body.password

    let where = {
        username: username,
        password: md5(password) // 密码加密， 因为用户注册时，用户的密码是加密后再保存在数据库中的
    }

    // 链接 查询 数据库
  /*  MongoClient.connect(dataBaseUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {

        if (err) {
            console.log(err)
            res.send('数据库连接失败')
            return
        }

        let db = client.db('user') //选择哪个数据库


        db.collection('userinfo').find(where).toArray( (err, result) => {
            if (err) {
                console.log(err)
                res.send('数据库查询失败')
                return
            }
            
            if (result.length) {
                req.session.username = 'robert'

                app.locals['username'] = req.session.username

                let tips = `<script>
                    alert('login success')
                    window.location.href='/admin';
                </script>`

                res.send(tips)
               
            } else {
                let tips = `<script>
                    alert('login fails')
                    window.location.href='/login';
                </script>`
                res.send(tips)
            }

        })

    })*/

})

app.get('/admin', (req, res) => {

    res.render('admin')
})

app.get('/list', (req, res) => {

    res.render('list')

})

app.get('/add', (req, res) => {

    DB.find('userinfo', {}, 'user', function (err, res) {
        if (err) {
            console.log(err)
            return
        }

        console.log(res)
    })
})

