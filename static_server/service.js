const http = require('http');

const fs = require('fs')


const path = require('path')


const URL = require('url')


const getHead = require('./getHead.js') 



http.createServer((req, res) => {
    console.log(req.url)


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

    			let extName = path.extname(url)

    			let resFileType = getHead(extName) // 根据文件类型返回 "text/html;charset='utf-8'"

    			res.writeHead(200,{"Content-type": resFileType})

                res.write(data)
                res.end()
    		}
    	})
    }
  
}).listen(3000)