// 学习内容：使用 url 模块 解析请求参数

const url = require('url'); //引入 url 模块

let api = 'http://baidu.com?name=robert&password=12345';

let arg = url.parse(api,true); // 如果传入一个true会把query转换成对象

let query = arg.query;

console.log(arg)

console.log(query) //{ name: 'robert', password: '12345' }




