const express = require('express')

const app = express()


let router = require('./router/router')

app.listen(4000, '127.0.0.1')


// 设置之后，router文件中的路由就不用再写 '/base'了，如： /base/hello => 写成 /hello
app.use('/base', router)




/*
    app.use(path,callback)中的callback既可以是router对象又可以是函数
    app.get(path,callback)中的callback只能是函数
    
 */

app.use((req, res, next) => {
    console.log('hello base')

    next()
})



app.get('/download', (req, res) => {

    /* 文件传输，

        res.download(path [, filename] [, options] [, fn])

        参数： 文件的路径，文件的名字（用户下载后文件名）， 回调函数（文件传输完成或者出错都会触发）

    */

    res.download('./files/report-12345.pdf','you-sister.pdf', (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('finish')
        }
    })
})


app.get('/end',(req, res) => {

    
    /*
        如果想快速结束响应, 则使用 res.end()；

        如果想 响应内容， 则使用 res.send(xxx) 和 res.json(xx).
     */

    // res.end()


    // 也可以 返回一个结束响应的状态
    
    // res.status(200).end()
    // res.status(404).end()
    // res.status(500).end()
    

    res.status(404).send('页面不存在')
})


app.get('/index', (req, res) => {

    res.send('index')
})
