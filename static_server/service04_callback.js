const http = require('http')

const fs = require('fs')


const path = require('path')


const URL = require('url')


// 通过事件驱动来获取 异步读取文件后 返回的文件类型

const getType = require('./getType02_callback.js') 


http.createServer((req, res) => {

    // console.log(req.url)


    // 如果路径后面带有查询参数怎么办： /all.json?7900908713156496？ 使用url模块处理 可以得到 /all.json
    let url = URL.parse(req.url,true).pathname

    if (req.url != '/favicon.ico') {

    	if (url == '/') {
    		url = 'index.html'
    	}
    	
    	fs.readFile('static/' + url, (err, data) => {
    		if (err) {
    			console.log(err)

    			// 如果找不到文件返回404页面
    			
    			res.writeHead(200,{"Content-type": "text/html;charset='utf-8'"})

    			fs.readFile('static/404.html', (err, data) => {
    				res.write(data)
    				res.end()
    			})
    			
    		} else {

    			let extName = path.extname(url) // 调用path 模块获取 路径的后缀名， 如 .html .css .js .png 等等。。。


                // 要将 res 传进去
                getType(fs, extName, function (returnData) {

                     let fileType = returnData


                    res.writeHead(200,{"Content-type": fileType + ";charset='utf-8'"})

                    // res.write()
                    res.end(data) // 读取的文件内容 要放在结束响应的函数里 返回给前端， 不能用 res.write()，否则会报错
                   
                }) // 根据文件类型返回如 text/html 等等

    		}
    	})
    }
  
}).listen(3000)