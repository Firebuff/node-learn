/* 
    可以通过 Buffer.from()、Buffer.alloc() 
    与 Buffer.allocUnsafe() 三种方式来创建

*/


// Buffer.from()

let buff1 = Buffer.from('10')

let buff2 = Buffer.from('10', 'utf8')

let buff3 = Buffer.from([10])

let buff4 = Buffer.from(buff3);

console.log(buff1)

console.log(buff2)

console.log(buff3)

console.log(buff4)


// Buffer.alloc 返回一个已初始化的 Buffer，可以保证新创建的 Buffer 永远不会包含旧数据。

let buff5 = Buffer.alloc(10) // 创建一个大小为 10 个字节的缓冲区

console.log(buff5)


/* 
  Buffer.allocUnsafe
 创建一个大小为 size 字节的新的未初始化的 Buffer，由于 Buffer 
 是未初始化的，因此分配的内存片段可能包含敏感的旧数据。在 Buffer 内容可读情况下，
 则可能会泄露它的旧数据，这个是不安全的，使用时要谨慎。

 */


let  bAllocUnsafe1 = Buffer.allocUnsafe(10);

console.log(bAllocUnsafe1); // <Buffer 49 ae c9 cd 49 1d 00 00 11 4f>


/* 
    字符串转 Buffer

    这个相信不会陌生了，通过上面讲解的 Buffer.form() 实现，如果不传递 encoding 
    默认按照 UTF-8 格式转换存储

*/

const buf = Buffer.from('Node.js 技术栈', 'UTF-8');

console.log(buf); // <Buffer 4e 6f 64 65 2e 6a 73 20 e6 8a 80 e6 9c af e6 a0 88>
console.log(buf.length); // 17


/* 
    Buffer 转换为字符串也很简单，使用 toString([encoding], [start], [end]) 方法，
    默认编码仍为 UTF-8，如果不传 start、end 可实现全部转换，传了 start、end 
    可实现部分转换（这里要小心了）

*/

const buf = Buffer.from('Node.js 技术栈', 'UTF-8');

console.log(buf); // <Buffer 4e 6f 64 65 2e 6a 73 20 e6 8a 80 e6 9c af e6 a0 88>
console.log(buf.length); // 17
console.log(buf.toString('UTF-8', 0, 9)); // Node.js �
