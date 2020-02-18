const http = require('http')

const app = require('./router.js')

const ejs = require('ejs')



http.createServer(app).listen(3000)



app.get('/login', (req, res) => {

	let data = JSON.stringify(req.body)

	res.send(data)
    
})



app.get('/register', (req,res) => {
    ejs.renderFile('./views/form.html', (err, data) => {
        if (err) {
            console.log(err)
            return
        }

        res.send(data)
    })
})

app.post('/dologin', (req,res) => {
   console.log(req.body)

   let data = "<script>alert('success')</script>"

   console.log(data)

   res.send(data)
})




