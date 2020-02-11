// 学习内容： 如何创建一个服务并且返回 信息给请求端



const http = require('http'); // 引入http模块


// 创建服务器
http.createServer((req,res) => { // req表示请求的参数信息，res表示服务器响应请求的信息
    
    console.log(req.url)

    // 设置响应头: 状态码是200，文件类型是 text/html，字符编码是 utf-8

    res.writeHead(200,{"Content-type":"text/html;charset='utf-8'"})

    // res.write("<head><meta charset='UTF-8'></head>") // 如果不加这个，返回的内容如果是中文，那么在页面显示会是乱码

    // 
    res.write('I am who I am '); //给请求返回一些信息

    res.end('新年好呀 fuck are you doing?'); // 结束响应，必须要写, 也可以在里面将一些信息返回给请求端

}).listen(3000); //监听请求的端口