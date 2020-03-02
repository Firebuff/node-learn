/*
	express 如何 链接数据库 和 如何操作数据库？

	我们可以安装使用 mongodb 这个模块

	1. 安装 npm install mongodb --save-dev

	2. 引入 var MongoClient = require('mongodb').MongoClient;

	3. 设置链接 地址

		MongoClient.connect(url, function(err, db) {

		});

 */

const express = require('express')

const app = express()


const mongoClient = require('mongodb').MongoClient //引入使用mongo


const baseUlrl = 'mongodb://127.0.0.1:27017'

const baseName = 'student'






app.listen(4000,'127.0.0.1')



// 添加一条数据
app.get('/addone', (req,res) => {

	mongoClient.connect(baseUlrl,{ useNewUrlParser: true, useUnifiedTopology: true },(err,client) => {
		if (err) {
			console.log(err)
			return
		}
		
		let db = client.db(baseName)

		db.collection('info').insertOne({
			"name": "小五郎",
			"age": 24,
			"gender": "male"
		}, (err,result) => {
			if(err) {
				console.log(err)
				res.send('数据添加失败')
				return
			}
			res.send('数据添加成功')

			client.close() //关闭数据库连接
		})

		
	})
})


// 添加多条数据
app.get('/addmany', (req, res) => {

	mongoClient.connect(baseUlrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
		if (err) {
			console.log(err)
			res.send('数据库连接失败')
			return
		}

		// 使用某个数据库
		
		let db = client.db(baseName)


		let insertData = []



		for (let i = 0; i < 10; i++) {

			let name = '小熊' + (i + 1)

			let age = 20 +  i + 1

			let gender = ''

			if (i % 2 == 0) {
				gender = 'male'
			} else {
				gender = 'female'
			}

			insertData.push({
				name,
				gender,
				age
			})
		}
		// console.log(insertData)

		db.collection('info').insertMany(insertData, (err, result) => {
			if (err) {
				console.log(err)

				res.send('数据添加失败')
				return
			}

			res.send('数据添加成功,总共添加了 =>' + result.insertedCount + '条数据')

			client.close()
		})

	})
})


// 删除一条数据

app.get('/deleteone', (req, res) => {


	// 获取 路由传递过来的参数： {'name':'robert'}
	
	let name = req.query.name
	
	mongoClient.connect(baseUlrl,{ useNewUrlParser: true, useUnifiedTopology: true },(err, client) => {

		if (err) {
			console.log(err)
			res.send('数据库连接失败')
			return
		}

		let db = client.db(baseName) // 数据库连接成功后，使用某个数据库

		db.collection('info').deleteOne({"name":name}, (err, data) => {

			if (err) {
				console.log(err)
				res.send('数据删除失败')
				return
			}

			console.log(data)

			if (data.deleteCount) {
				res.send('数据删除成功')
			} else {
				res.send('数据不存在，删除失败')
			}
			client.close() //关闭数据库连接
		})
	})
})


// 更新一条数据

app.get('/updateone', (req, res) => {

	mongoClient.connect(baseUlrl, {}, (err, client) => {
		if (err) {

			console.log(err)
			res.send('connecting database fails!')
			return
		}

		let db = client.db(baseName) //使用哪个数据库

		let where = {"name": "小熊10"} //查询条件

		let updateContent = {$set:{"name": "大熊10"}}

		// 哪个表（集合）

		db.collection('info').updateOne(where, updateContent, (err, result) => {
			if (err) {
				console.log(err)
				res.send('updating fails!')
				return
			}

			console.log(result)

			res.send('更新成功')

		})
	})

})

// 更新多条数据

app.get('/updatemany', (req, res) => {

	mongoClient.connect(baseUlrl, {}, (err, client) => {
		if (err) {

			console.log(err)
			res.send('connecting database fails!')
			return
		}

		let db = client.db(baseName) //使用哪个数据库

		let where = {"name": "小熊5"} //查询条件

		let updateContent = {$set:{"name": "大熊5"}}

		// 哪个表（集合）

		db.collection('info').updateMany(where, updateContent, (err, result) => {
			if (err) {
				console.log(err)
				res.send('updating fails!')
				return
			}

			console.log(result)

			res.send('更新成功')

		})
	})

})


