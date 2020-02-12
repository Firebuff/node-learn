/*

	广播和接听广播（也称为订阅者模式）事件驱动

 */

const events = require('events');

let eventEmitter = new events.EventEmitter()

// let eventEmitter = new events() //也可以这样实例化


// 接收广播 

eventEmitter.on('show', (data) => {

	console.log('收到了广播！')

	console.log(data)

})


// 5 秒后发送广播

setTimeout(() => {

	eventEmitter.emit('show', 'I love you')

},5000)