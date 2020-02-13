const http = require('http');

const ejs = require('ejs')

const URL = require('url')

http.createServer( (req, res) => {
    let url = URL.parse(req.url).pathname

    if (url == '/login') {

        ejs.renderFile('views/login.html',{
            user: 'robert',
            password: 123
        }, (err, data) => {
            if (err) {
                console.log(err)
                return
            }
            res.end(data)
        })
    } else if ( url == '/register') {
        ejs.renderFile('views/register.html',{

           name: ['黄健','玛丽','露西','鲁迅']

        }, (err, data) => {
            
            if (err) {
                console.log(err)
                return
            }
            res.end(data)
        })
    }

}).listen(3000)