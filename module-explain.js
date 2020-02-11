
/**
 *  自定义的 模块 一般存放在node_modules文件下， 当 require('xxx') 时候 node  会先去 node_modules这个文件下查找，
 * 如果找到某个xxx文件夹，就去先去读取该文件下的 index.js 这个文件，如果没有index.js这个文件，就会去读取package.json
 * 这个件文件 的 main 属性值，然后根据这个属性值去查找对应的文件； 如果还是没有找到就会报错
 * 
 */

//  let axios = require('./node_modules/axios/index'); 

// let axios = require('axios'); // 也可以这样引入，因为先去node_modules文件下查找，找到axios文件夹就会自动读取 index.js 这个文件

//  console.log(axios); // { get: [Function] }



let db = require('db'); // 在没有package.json文件的情况下， 因为 db 文件夹下没有 index.js文件，而是 db.js文件，所以找不到文件会报错


// 我们可以在db文件夹下生成一个package.json文件来告诉 node 入口文件是哪个： npm init --yes 



console.log(db); // { db: [Function] }


