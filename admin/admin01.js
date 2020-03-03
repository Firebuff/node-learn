const express = require('express')

const bodyParser = require('body-parser') // 引入body-parser 处理post 请求传递过来的数据


const md5 = require('md5'); //  引入加密模块

const app = express()


const MongoClient = require('mongodb').MongoClient //引入mongo 数据库操作引擎



app.set('view engine', 'ejs') //设置模板引擎, 不用require 引入，可以直接设置


// 使用 body-parser，如果表单使用了 enctype="multipart/form-data"，body-parser是无法处理的，自然也无法获取到post请求参数
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// 设置静态目录
app.use(express.static('public'))



let dataBaseUrl = 'mongodb://localhost:27017' // 数据库地址

let dataBaseName = 'user' // 数据库名字




app.listen(4000,'127.0.0.1')



app.get('/', (req,res) => {

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
    
    MongoClient.connect(dataBaseUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {

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
                res.send('登录成功')
            } else {
                res.send('用户名或者密码不正确')
            }

            
        })



    })
    


})