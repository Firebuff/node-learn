/* 
    1. 缓冲区Buffer是暂时存放输入输出数据的一段内存。
    2. JS语言自身只有字符串数据类型，没有二进制数据类型，而在处理TCP和文件流的时候，必须要处理二进制数据。
    3. NodeJS提供了一个Buffer对象来提供对二进制数据的操作
    4. Buffer是一个表示固定内存分配的全局对象，也就是说要放到缓存区中的字节数需要提前确定


*/



// 任意进制转成 10 进制
console.log(parseInt("11",2)) // 二进制转成 10 进制， 结果是 3
console.log(parseInt("11",8)) // 8 进制转成 10 进制， 结果是 9
console.log(parseInt("11",16)) // 16进制转成 10 进制， 结果是 17

//  10 进制转成 2， 8， 16 进制

console.log((3).toString(2)) // 11

console.log((9).toString(8)) // 11

console.log((17).toString(16)) // 11