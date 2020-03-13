
const MongoClient = require('mongodb').MongoClient //引入mongo 数据库操作引擎

let dbConfig = {

    dataBasesUrl: 'mongodb://localhost:27017',

    dataBaseName: 'student'

}

function initialConfig  (dataBaseName) {

    if (dataBaseName)  {
        dbConfig.dataBaseName = dataBaseName
    }
    
}


function connectDB(callback) {
    
	// 链接 查询 数据库
	MongoClient.connect(dbConfig.dataBasesUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {

	    if (err) {
	        console.log(err)
	        return null
	    }
	    let db = client.db(dbConfig.dataBaseName) //选择哪个数据库

        callback(db,client)
        

	})
    
}

exports.find = function  (collection, where, dataBaseName, callback,) {

        let fn = arguments[arguments.length - 1]

        if (arguments.length == 4) {
            initialConfig(dataBaseName) //初始化数据库连接配置
        }

        connectDB(function (db,client) { //连接数据库， 返回一个连接对象

            db.collection(collection).find(where).toArray((err, res) => {

                // 如果参数倒数的第一个是function则执行
                if (typeof fn === 'function') {
                    fn(err,res)
                }
                client.close() // 关闭数据库
            })
        }) 

        
}
