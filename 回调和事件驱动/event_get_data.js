/*
    通过事件驱动来获取数据

 */

const fs = require('fs')

const events = require('events') //  引进 events 模块 

let eventEmitter = new events() // 实例化


function getData () {

    //  readFile 是一个异步操作
    fs.readFile('input.txt', (err, data) => {

        if (err) {
            console.log(err)
            return;
        }
        eventEmitter.emit('ready', data) // 当数据读取成功后，广播一个 ready 事件， 并将读取的数据传递给广播接收者
    })
}


getData() // 调用获取数据方法



// 接收 ready 事件的广播
eventEmitter.on('ready', function (data) {
    console.log(data.toString())
})
