

let Box = {} //创建一个对象用来收集方法


let app = function (req, res) {

	if (Box['login']) {

		Box['login'](req,res)
	}
}


// 给Box注册属性
app.get = function (fnName, callback) {

	Box[fnName] = callback //想当于给 Box 注册了一个属性: Box.xxx = function () {}
}



app.get('login', function(req, res){
	console.log('hello: '+ 'login')
})


setTimeout(() => {
	app('req', 'res')
},2000)