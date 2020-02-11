let re = require('./exports.js'); // 也可以省略 .js

// console.log(re); // exports.xxx = obj =>  { xxx: { getName: [Function: getName], getAge: [Function: getAge] } }


// console.log(re); //  module.exports = obj => { getName: [Function: getName], getAge: [Function: getAge] }


console.log(re) // exports.showName = function () {}....  =>  { showName: [Function], showAge: [Function] }