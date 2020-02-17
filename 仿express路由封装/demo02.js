const http = require('http')

const app = require('./router.js')



http.createServer(app).listen(3000)



app.get('/login', (req, res) => {

	let data = JSON.stringify(res.body)
	console.log(req.body)
})


