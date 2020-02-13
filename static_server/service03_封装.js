const router = require('./router.js')

const http = require('http');


http.createServer((req, res) => {

    router(req, res, 'static/')
  
}).listen(3000)