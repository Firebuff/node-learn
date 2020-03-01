const express = require('express')

const app = express()


app.listen(4000,'127.0.0.1')


app.get('/', (req,res) => {
	res.send('hello')
})