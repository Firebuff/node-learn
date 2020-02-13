
const fs = require('fs')

const http = require('http')

const path = require('path')

const URL = require('url')

//路由:指的就是针对不同请求的 URL，处理不同的业务逻辑。

http.createServer((req, res) => {
    let url = URL.parse(req.url).pathname // /login /register等等
   
    if( url == '/login') {

        res.end('login')

    } else if (url == '/register') {

        res.end('register')
        
    } else {

        res.end('index')
    }

}).listen(3000)