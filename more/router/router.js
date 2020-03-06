const express = require('express')

let router = express.Router()




router.use((req, res, next) => {
	console.log('I am happy with you')

	next()

})

router.get('/hello', (req, res) => {

	res.send('hello, baseUrl is =>' + req.baseUrl)

})

module.exports = router;